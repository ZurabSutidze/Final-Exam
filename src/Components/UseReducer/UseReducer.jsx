import React, { useReducer } from "react";

const initialvalue = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Inc":
      return { count: state.count + 1 };
    case "Dec":
      return { count: state.count - 1 };
    case "Res":
      return { count: 0 };
  }
};

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialvalue);
  return (
    <div>
      {state.count}

      <button
        onClick={() => {
          dispatch({ type: "Inc" });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: "Dec" });
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch({ type: "Res" });
        }}
      >
        Reset
      </button>
    </div>
  );
}
