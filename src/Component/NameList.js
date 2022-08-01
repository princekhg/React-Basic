import React from "react";
import Person from "./Person";
function NameList(){
   const person =[
       {id: 1,
           name:'Bruce',
           age:30,
           skill:'React'
       },
       {
           id:2,
           name:'Clark',
           age:32,
           skill: 'Angular'
       },
       {
           id:3,
           name:'Sandra',
           age:29,
           skill: 'Vue.JS'
       }
   ]
    const personList = person.map(person => <Person key = {person.id} person={person}></Person>)
    return(
        <div>
            {personList}
            {/*<div>{names[0]}</div>*/}
            {/*<div>{names[1]}</div>*/}
            {/*<div>{names[2]}</div>*/}
        </div>
    )
}
export default NameList