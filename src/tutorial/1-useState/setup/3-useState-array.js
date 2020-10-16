import React from "react";
import { data } from "../../../data"; //importing the array of data.
// import {useState} from "react" can do React.useState instead

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  //functional approach of setting people with the functional approach 
  const removeItem = (id) => {
    setPeople((prevPeople) => {
      return prevPeople.filter((person) => person.id !== id);
    });
  };

  return (
    <React.Fragment>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        Clear Items
      </button>
    </React.Fragment>
  );
};

export default UseStateArray;
