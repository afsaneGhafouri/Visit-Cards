import React from 'react';
import Person from './Person/Person';


const persons = (props) => props.persons.map((body, index)=> {
        return <Person
        click={() => props.clicked(index)}
        name={body.name}
        age={body.age}
        key={body.id}
        changed={(event) => props.changed(event, body.id)}
        />
    });

export default persons;