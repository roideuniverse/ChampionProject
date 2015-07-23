/**
* Attempts.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    proposedSolution: 'string',
    timeTake: 'integer',
    score: 'float',

    //add reference to Note
    notes: {
      collection: 'ShortNote',
      via: 'attempts'
    },

    //add reference to Question
    questions: {
      collection: 'Question',
      via: 'attempts'
    }
  }
};

