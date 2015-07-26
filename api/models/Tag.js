/**
* Tags.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name: {
        type: 'string',
        required: true,
        unique: true
    },

    //add reference to Notes
    notes: {
      collection: 'ShortNote',
      via: 'tags'
    },

    //reference to Question
    questions: {
      collection: 'Question',
      via: 'tags'
    }
  }
};

