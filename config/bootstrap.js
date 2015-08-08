/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function (cb) {

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  // cb();
  // After we create our tags, we will store them here to associate with our tags
  var storeTags = [];
  var shortNotes = [{text: 'Pinkie Pie'}, {text: 'Rainbow Dash'}, {text: 'Applejack'}]
  var tags = [
    {name: 'Dynamic Programming'},
    {name: 'Bit Bytes'},
    {name: 'Graph'},

    {name: 'Binary Search'},
    {name: 'Sorting'},
    {name: 'Quick Sort'},
    {name: 'Selection Sort'},
    {name: 'Bubble Sort'},
    {name: 'Insertion Sort'},
    {name: 'Merge Sort'},
    {name: 'Heap Sort'},
    {name: 'Bucket Sort'},
    {name: 'Shell sort'},
    {name: 'K Sorted'},
    {name: 'Almost Sorted'},
    {name: 'Closest Pair'},

    {name: 'Linked List'},
    {name: 'Activity Selection'},
    {name: 'Kruskal'},
    {name: 'MST'},
    {name: 'Huffman coding'},
    {name: 'Dijkstra\'s'},
    {name: 'Knapsack'},
    {name: 'Bitonic Sequence'},
    {name: 'Dynamic Programming'},
    {name: 'Bellman Ford'},
    {name: 'Subset Sum'},
    {name: 'KMP'},
    {name: 'Suffix Trees'},
    {name: 'Suffix Array'},
    {name: 'Trie'},
    {name: 'Singly Linked List'},
    {name: 'Circular Linked List'},
    {name: 'Doubly Linked List'},
    {name: 'Stack'},
    {name: 'Queue'},
    {name: 'Binary Tree'},
    {name: 'Hashing'},
    {name: 'Shortest Past'},
    {name: 'Connectivity'},

    {name: 'Max Flow'},
    {name: 'AVL Tree'},
    {name: 'Splay Tree'},
    {name: 'B Tree'},
    {name: 'Segment Tree'},
    {name: 'Red Black Tree'},
    {name: 'Interval Trees'},
    {name: 'Decision Trees'},
    {name: 'Spaghetti Stack'},
    {name: 'KD Tree'},
    {name: 'Binomial Heap'},
    {name: 'Binary Indexed Tree'}
  ];

// This does the actual associating.
// It takes one Pet then iterates through the array of newly created Users, adding each one to it's join table
/*

  var associate = function (oneNote, cb) {
    var thisNote = oneNote;
    var callback = cb;

    storeTags.forEach(function (thisTag, index) {
      console.log('Associating ', thisNote.name, 'with', thisTag.name);
      thisTag.notes.add(thisNote.id);
      thisTag.save(console.log);

      if (index === storeTags.length - 1)
        return callback(thisNote.name);
    })
  };

*/

// This callback is run after all of the tags are created.
// It sends each new tags to 'associate' with our notes
/*

  var afterNotes = function (err, newNotes) {
    while (newNotes.length) {
      var thisNote = newNotes.pop();
      var callback = function (noteID) {
        console.log('Done with note: ', noteID)
      }
      associate(thisNote, callback)
    }
    console.log('Everyone belongs to everyone!! Exiting.');

    // This callback lets us leave bootstrap.js and continue lifting our app!
    return cb()
  };
*/
// This callback is run after all of our Users are created.
// It takes the returned User and stores it in our storeTags array for later.
/*
  var afterTag = function (err, newTags) {
    while (newTags.length)
      storeTags.push(newTags.pop())

    ShortNote.findOrCreate(shortNotes).exec(afterNotes)
  };

*/

  Tag.findOrCreate(tags).exec(cb);
};
