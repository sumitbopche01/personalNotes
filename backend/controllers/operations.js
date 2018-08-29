const Subjects = require('../models/subjects');
const Topics = require('../models/topics');

module.exports = {

  addsubject(req, res) {
    Subjects.create(req.body)
      .then(response => res.send(response))
      .catch((error) => {
        console.log('[Error operations.js] ', error);
        res.send(error);
      });
  },

  addtopic(req, res) {
    Topics.create(req.body)
      .then(response => res.send(response))
      .catch((error) => {
        console.log('[Error operations.js] ', error);
        res.send(error);
      });
  },

  updatetopic(req, res) {
    Topics.update({ _id: req.body.topicId }, { content: req.body.content })
      .then((response) => {
        console.log('response ====', response);
        return res.send(response);
      })
      .catch((error) => {
        console.log('[Error operations.js] ', error);
        return res.send(error);
      });
  },

  deletetopic(req, res) {
    Topics.remove({ _id: req.body.topicId })
      .then((response) => {
        console.log('Succesfully Deleted the Document', response);
        return res.send(response);
      })
      .catch((error) => {
        console.log('[Error operations.js] ', error);
        return res.send(error);
      });
  },

  deleteSubject(req, res) {
    Subjects.remove({ _id: req.body.subjectId })
      .then((response) => {
        res.send(response);
      })
      .catch((error) => {
        console.log('[Error deleteSubject], ', error);
        res.send(error);
      });
  },

  getSubjects(req, res) {
    Subjects.find({})
      .then((response) => {
        res.send(response);
      })
      .catch((error) => {
        console.error('Error getSubjets ', error);
        res.send(error);
      });
  },

};
