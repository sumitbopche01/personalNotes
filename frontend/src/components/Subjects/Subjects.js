import axios from 'axios';
import React, { Component } from 'react';
import Subject from './Subject/Subject';

class Subjects extends Component {
    state = {
        subjects: []
    }

    componentDidMount() {

        axios.get('http://localhost:4000/api/getsubjects')
            .then((res) => {
                console.log('response from the backend', res);
                const subjects = res.data;
                this.setState({subjects});
            })
            .catch(error => {
                console.log('Error Subjects.js FE', error);

            })
    }

 render() {
     return this.state.subjects.map((subject, index) => {
        return <Subject title = { subject.title } key = { subject._id }/>
     }); 
 }   
}

export default Subjects;
