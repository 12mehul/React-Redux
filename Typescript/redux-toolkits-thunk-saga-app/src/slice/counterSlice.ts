import { createSlice } from "@reduxjs/toolkit";

export interface ICounterState {
  counter: number;
}

const initialState: ICounterState = {
  counter: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    Inc: (state: ICounterState) => {
      state.counter = state.counter + 1;
    },
    Dec: (state: ICounterState) => {
      state.counter = state.counter - 1;
    },
  },
});

export const { Inc, Dec } = counterSlice.actions;

export default counterSlice.reducer;
