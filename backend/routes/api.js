const express = require('express');
const { addsubject, addtopic, updatetopic, getSubjects } = require('../controllers/operations');

const router = express.Router();

router.post('/addsubject', addsubject);
router.post('/addtopic', addtopic);
router.post('/updatetopic', updatetopic);
router.get('/getsubjects', getSubjects);

module.exports = router;
