/**
 * QuestionController
 *
 * @description :: Server-side logic for managing questions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	addQuestionsView: function(req, res) {
        Tag.find().exec(function(err, models) {
            res.view( {remoteTags: models} );
        });
    },

    findAll: function(req, res) {
        res.view();
    },

    solveQuestion: function(req, res) {
        Question.findOne( {id: req.params.id })
            .populate('tags')
            .populate('notes')
            .populate('attempts')
            .exec(function(err, model) {
                res.view( {question : model});
            });
    },

    showDetailedQuestion: function(req, res) {
        console.log("--------------- Show Details Question ------------");
        console.log(req.params.id);
        Question.findOne( {id: req.params.id })
            .populate('tags')
            .populate('notes')
            .populate('attempts')
            .exec(function(err, model) {
                console.log(err);
                console.log(model);
                res.view( {question : model});
            });
    },

    addQuestion: function(req, res) {
        console.log('----------- addQuestion -------');

        var reqQuestion = req.body.question;
        var reqTags = req.body.tags;
        var notes = req.body.notes;
        console.log(reqTags);
        var question = {
            text: reqQuestion.text,
            solved: false,
            importance: reqQuestion.importance,
            difficulty: [ reqQuestion.difficulty ]
        };

        var storeQuestions = [];
        var storeTags = [];
        var storeNotes = [];

        var associate = function() {
            console.log("associate");
            var thisQuestion = storeQuestions.pop();
            while(storeTags.length) {
                var thisTag = storeTags.pop();
                thisQuestion.tags.add(thisTag.id);
                thisQuestion.save(console.log);
            }

            res.send({success: true});

        };

        var afterTags = function(err, tModelArray) {
            console.log('---After--Tags----');
            console.log(err);
            console.log(tModelArray);

            while(tModelArray.length) {
                storeTags.push(tModelArray.pop());
            }
            associate();
        };

        var afterQuestion = function(err, qModel) {
            if(reqTags) {
                Tag.findOrCreate(reqTags).exec(afterTags);
            }
        };

        Question.findOne({text: question.text}).exec(function(err, model) {
            if(model) {
                storeQuestions.push(model);
                afterQuestion(err, model);
            } else {
                Question.create(question).exec(function(err, question) {
                    if(question){
                        storeQuestions.push(question);
                        afterQuestion(err, question);
                    }
                });
            }
        });

        if(notes) {
            //TODO: Save notes with its tags
        }
    }
};

