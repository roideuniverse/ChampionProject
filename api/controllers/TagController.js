/**
 * TagsController
 *
 * @description :: Server-side logic for managing tags
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  findAll: function (req, res) {
    Tag.find(function foundTags(err, tags) {
      if (err) return next(err);
      res.view ( {tags: tags});
    });
  }
};

