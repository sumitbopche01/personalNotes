import React from 'react';
import classes from './TopicCreation.css';

const TopicCreation = () => (
  <div className={classes.topic}>
    <input type="text" placeholder="Enter the topic name Eg. Mongo Tutorial" />
    <button>Create</button>
  </div>  
);

export default TopicCreation;
