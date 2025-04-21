import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./redux/store/store";
import { useSelector } from "react-redux";
import { AppState } from "./redux/reducers/rootReducers";

const Counter = () => {
  const dispatch = useDispatch<AppDispatch>();
  const counter = useSelector<AppState>((state) => state.counter) as number;

  const increment = () => {
    dispatch({ type: "INCASYNC" });
  };

  const decrement = () => {
    dispatch({ type: "DECASYNC" });
  };

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={decrement}>-</button>
      <span>{counter}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
