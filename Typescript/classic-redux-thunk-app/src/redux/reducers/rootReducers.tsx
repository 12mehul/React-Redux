import { combineReducers } from "redux";
import counters from "./counters";
import userReducers from "./userReducers";

const rootReducers = combineReducers({
  counter: counters,
  users: userReducers,
});

export type AppState = ReturnType<typeof rootReducers>;
export default rootReducers;
