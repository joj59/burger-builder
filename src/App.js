import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { name: 'Max', age: 25 },
            { name: 'Sam', age: 24 },
            { name: 'Bob', age: 28 },
        ],
    };

    switchNameHandler = () => {
        this.setState({
            persons: [
                { name: 'Ello', age: 25 },
                { name: 'There', age: 24 },
                { name: 'Bob', age: 28 },
            ],
        });
    };

    render() {
        return (
            <div className="App">
                <h1>surprise mothafukaaaaaa</h1>
                <button onClick={this.switchNameHandler}>Click me</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                />
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler}
                />
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}
                />
            </div>
        );
    }
}

export default App;
