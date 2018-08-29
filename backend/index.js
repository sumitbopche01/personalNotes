const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

mongoose.connect('mongodb://localhost:27017/personalnotes', { useNewUrlParser: true }, (error) => {
  if (error) {
    console.log('[index.js] Error in connecting to mongodb', error);
  } else {
    console.log('Connected to mongodb');
  }
});
mongoose.Promise = global.Promise;

app.set('port', (process.env.PORT || 6790));

app.use(bodyParser.json());
app.use('/api', require('./routes/api'));

app.listen(app.get('port'), () => {
  console.log('Node app is running at localhost:', app.get('port'));
});
