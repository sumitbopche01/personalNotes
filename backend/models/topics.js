const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TopicSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  subjectId: {
    type: Schema.Types.ObjectId,
    ref: 'subject',
  },
  createdDate: {
      type: Date,
      default: Date.now,
  },
});

const Topics = mongoose.model('topic', TopicSchema);

module.exports = Topics;
