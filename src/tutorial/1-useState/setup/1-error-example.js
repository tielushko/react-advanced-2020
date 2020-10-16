import React from "react";

const ErrorExample = () => {
  let title = "random title";

  //while we are changing the value of the variable, we are not invoking the rerendering of the application. we need to find a way to preserve the previous value and rerender application to switch between two states.
  const handleClick = () => {
    title = "hello people";
    console.log(title);
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
