import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "./store/store";
import { Dec, Inc } from "./slice/counterSlice";

const Counters = () => {
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector<AppState>(
    (state) => state.counter.counter
  ) as number;

  const inc = () => {
    dispatch(Inc());
  };
  const dec = () => {
    dispatch(Dec());
  };

  return (
    <div>
      <h1>Counters</h1>
      <h1>{data}</h1>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </div>
  );
};

export default Counters;
