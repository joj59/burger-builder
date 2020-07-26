import React, { Component } from 'react';

export class Person extends Component {
    render() {
        return (
            <div>
                <h1>hello {Math.floor(Math.random() * 10)} </h1>
            </div>
        );
    }
}

export default Person;
