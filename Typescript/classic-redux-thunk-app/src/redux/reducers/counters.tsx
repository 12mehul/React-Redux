import { ICounterType } from "../actions/counterActions";

const initialState: number = 0;

export default (state = initialState, action: ICounterType) => {
  switch (action.type) {
    case "Increament":
      return state + 1;

    case "Decreament":
      return state - 1;

    default:
      return state;
  }
};
