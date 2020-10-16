import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    message: "random message",
  });

  const changeMessage = () => {
    //use the spread operator to spread the values, copy the old values, then decide which one to change
    if (person.message !== "Hello World") {
      setPerson({ ...person, message: "Hello World" });
    } else {
      setPerson({ ...person, message: "Random Message" });
    }
  };
  return (
    <React.Fragment>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>
        Change message
      </button>
    </React.Fragment>
  );
};

export default UseStateObject;
