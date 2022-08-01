//Refactoring work is required rather than displaying the whole list in a single go
//JSX is not that a good way to go.
import React from "react";
function Person({person}){
    return(
        <div>
            <h2>I am{person.name} and {person.age} years old. I know {person.skill}</h2>
        </div>
    )
}
export default Person