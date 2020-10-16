import React, { useState } from "react";

//use state - function from the React js. also it is a named import, must must must be exact.

//any use... function in react requires the component name to be uppercase
//must be in function/component body
//cannot call conditionally.

const UseStateBasics = () => {
  //setting up the values from useState - text then by convention setVariableName
  const [text, setText] = useState("random title");

  //essentially use state allows us to use React to Rerender the webpage components.

  const handleClick = () => {
    //use the setText to change the text whatever we pass will be the new value
    if (text === "random title") {
      setText("Hello another title");
    } else {
      setText("random title");
    }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" type="button" onClick={handleClick}>
        Change the Header with useState
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
