import axios from 'axios';
import React, { Component } from 'react';

class Subjects extends Component {
    state = {
        subjects: []
    }

    componentDidMount() {

        axios.get('http://localhost:4000/api/getsubjects')
            .then((res) => {
                console.log('response from the backend', res);
                const subjects = res;
                this.setState({subjects});
            })
            .catch(error => {
                console.log('Error Subjects.js FE', error);

            })
    }

 render() {
     return (
         <div>
             { this.state.subjects.map(subject => <li>{ subject.title }</li>)}
        </div>
     )
 }   
}

export default Subjects;
