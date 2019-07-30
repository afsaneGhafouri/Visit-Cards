import React from 'react';
import classes from './cockpit.css'

const cockpit = (props) => {
    let appliedclasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    if (props.persons.length <= 2) {
        appliedclasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        appliedclasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className={appliedclasses.join(' ')}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.toggled}>Toggle Persons</button>

        </div>

    )
};



export default cockpit;