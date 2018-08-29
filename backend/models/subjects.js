const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SubjectsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  numberOfTopics: {
    type: Number,
  },
});

const Subjects = mongoose.model('subject', SubjectsSchema);

module.exports = Subjects;
