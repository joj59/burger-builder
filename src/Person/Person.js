import React from 'react';

const Person = props => {
    return (
        <div>
            <p onClick={props.click}>
                Im {props.name} and im {props.age} years old
            </p>
        </div>
    );
};

export default Person;
