/**
 * QuestionController
 *
 * @description :: Server-side logic for managing questions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	addQuestionsView: function(req, res) {
        res.view();
    },

    findAll: function(req, res) {
        res.view();
    },

    addQuestion: function(req, res) {
        console.log('----------- addQuestion -------');

        var reqQuestion = req.body.question;
        var reqTags = reqQuestion.tags;
        var notes = req.body.notes;
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
            while(tModelArray.length) {
                storeTags.push(tModelArray.pop());
            }
            associate();
        };

        var afterQuestion = function(err, qModel) {
            if(reqTags) {
                var tempArr = reqTags.split(",");
                var tagsArr = [];
                for(var i=0; i <tempArr.length; i++) {
                    var tag = {name: tempArr[i]};
                    tagsArr.push(tag);
                }
                Tag.findOrCreate(tagsArr).exec(afterTags);
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

