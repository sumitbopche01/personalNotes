import React from 'react';

import classes from './NewsArticle.css';

const NewsArticle = (props) => {
    console.log("--------------------",props.article.name);
    return (

        <div>
            <h2><a href={props.article.url} >{props.article.name} </a></h2>
            <p>{props.article.description}</p>
        </div>
    );
}

export default NewsArticle;
