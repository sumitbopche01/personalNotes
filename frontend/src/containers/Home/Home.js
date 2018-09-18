import React, { Component } from "react";

import TopicCreation from '../../components/TopicCreation/TopicCreation';
import NewsArticles from '../../components/NewsArticles/NewsArticles';

class Home extends Component {
    render() {
        return(
            <div>
                <TopicCreation />
                <NewsArticles />
            </div>
        );
    }
}

export default Home;
