import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reinitialiser":
      return initialState;
    default:
      return state;
  }
};

function Count() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="row">
      <div className="col">
        <p className="h1">{count}</p>
        <button
          className="btn btn-success m-3"
          onClick={() => dispatch("increment")}
        >
          +
        </button>
        <button
          className="btn btn-danger m-3"
          onClick={() => dispatch("decrement")}
        >
          -
        </button>
        <button
          className="btn btn-primary m-3"
          onClick={() => dispatch("reinitialiser")}
        >
          0
        </button>
      </div>
    </div>
  );
}

export default Count;
