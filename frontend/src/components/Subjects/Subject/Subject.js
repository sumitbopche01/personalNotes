import React, { Component } from 'react';
import './Subject.css';
 
class Subject extends Component {
    render() {
        return (
            <div className = "Subject">
                <h2>{this.props.title}</h2>
            </div>
        )
    };
};

export default Subject;
