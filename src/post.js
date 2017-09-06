const mongoose = require('mongoose');

// Clear out mongoose's model cache to allow --watch to work for tests:
// https://github.com/Automattic/mongoose/issues/1251
mongoose.models = {};
mongoose.modelSchemas = {};

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/so-posts', { useMongoClient: true });

const PostSchema = new mongoose.Schema({
  // TODO: write your schema here
  soID: {
    type: Number,
    required: true,
  },
  parentID: {
    type: Number,
  },
  url: {
    type: String,
    required: true,
  },
  title: {
    type: String,
  },
  body: {
    type: String,
    required: true,
  },
  score: {
    type: String,
    required: true,
  },
  tags: [
    {
      type: String,
    }
  ],
  acceptedAnswerID: {
    type: Number,
  },
  user: {
    soUserID: Number,
    name: String,
    reputuation: String,
  }
});

module.exports = mongoose.model('Posts', PostSchema);

// "soID": 111102,
// "parentID": null,
// "url": "https://stackoverflow.com/q/111102",
// "title": "How do JavaScript closures work?",
// "body": "<p>How would you explain JavaScript closures to someone with a knowledge of the concepts they consist of (for example functions, variables and the like), but does not understand closures themselves?</p>\n\n<p>I have seen <a href=\"http://en.wikipedia.org/wiki/Scheme_%28programming_language%29\" rel=\"noreferrer\">the Scheme example</a> given on Wikipedia, but unfortunately it did not help.</p>\n",
// "score": 7669,
// "tags": [
//   "javascript",
//   "function",
//   "variables",
//   "scope",
//   "closures"
// ],
// "acceptedAnswerID": 111111,
// "user": null
