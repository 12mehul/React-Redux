import { ICounter } from "../actions/counterActions";

const initialState: number = 0;

export default (state = initialState, action: ICounter) => {
  switch (action.type) {
    case "INCREAMENT":
      return state + 1;
    case "DECREAMENT":
      return state - 1;

    default:
      return state;
  }
};
