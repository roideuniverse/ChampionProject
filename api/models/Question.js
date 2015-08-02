/**
* Question.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    text: 'string',
    solved: 'boolean',
    difficulty: 'array',
    averageDifficulty: 'float',
    averageScore: 'float',
    importance: 'integer',

    //reference to Tag
    tags: {
      collection: 'Tag',
      via: 'questions'
    },

    //reference to Note
    notes: {
      collection: 'ShortNote',
      via: 'questions'
    },

    //reference to Attempt
    attempts: {
      collection: 'Attempt',
      via: 'questions'
    }
  }
};

