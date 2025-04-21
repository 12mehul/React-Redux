import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "./redux/reducers/rootReducers";
import { AppDispatch } from "./redux/store/store";
import { Dec, Inc } from "./redux/actions/counterActions";

const Counters = () => {
  const dispatch = useDispatch<AppDispatch>();
  const counter = useSelector<AppState>((state) => state.counter);

  const Increase = () => {
    dispatch(Inc());
  };

  const Decrease = () => {
    dispatch(Dec());
  };

  return (
    <div className="card">
      <div>
        <h1>{counter as number}</h1>
      </div>
      <button onClick={Increase}>Increase</button>
      <button onClick={Decrease}>Decrease</button>
    </div>
  );
};

export default Counters;
