import { combineReducers } from "redux";
import counterReducers from "./counterReducers";
import userReducers from "./userReducers";
import employeeReducers from "./employeeReducers";

const rootReducers = combineReducers({
  counter: counterReducers,
  users: userReducers,
  employess: employeeReducers,
});

export type AppState = ReturnType<typeof rootReducers>;
export default rootReducers;
