import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const complexIncrease = () => {
    setTimeout(() => {
      // will only work with 1 value increase no matter how often it is pressed need to work with the state value.
      // setValue(value + 1);
      //this gets the current value from the state upon each time we can
      //prevstate is the placeholder for the older values of the state
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };

  return (
    <React.Fragment>
      <section style={{ margin: "4rem 0" }}>
        <h2>Regular counter</h2>
        <h1>{value}</h1>
        <button
          className="btn"
          onClick={() => {
            setValue(value - 1);
          }}
        >
          Decrease
        </button>
        <button
          className="btn"
          onClick={() => {
            setValue(0);
          }}
        >
          Reset
        </button>
        <button
          className="btn"
          onClick={() => {
            setValue(value + 1);
          }}
        >
          Increase
        </button>
      </section>

      <section style={{ margin: "4rem 0" }}>
        <h2>More Complex</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}>
          Increase after 2 seconds
        </button>
      </section>
    </React.Fragment>
  );
};

export default UseStateCounter;
