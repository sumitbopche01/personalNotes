//https://newsapi.org/v2/sources?language=en&category=technology&apiKey=3509aaf3c987442f8ec14f072964c831

import axios from 'axios';
import React, { Component } from 'react';
import NewsArticle from './NewsArticle/';

class News extends Component {
    state = {
        articles: []
    }

    componentDidMount() {
        axios.get('https://newsapi.org/v2/sources?language=en&category=technology&apiKey=3509aaf3c987442f8ec14f072964c831')
            .then((res) => {
                console.log('response from the backend', res);
                const articles = res.sources;
                this.setState({articles})
            })
            .catch(error => {
                console.log('Error Subjects.js FE', error);
            })
    }

    render() {
        return this.state.subjects.map((subject, index) => {
            return <NewsArticle />
        }); 
    }   
}

export default News;
