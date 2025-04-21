import { Action, applyMiddleware, createStore } from "redux";
import rootReducers, { AppState } from "../reducers/rootReducers";
import { thunk, ThunkMiddleware } from "redux-thunk";

const store = createStore(
  rootReducers,
  {},
  applyMiddleware(thunk as ThunkMiddleware<AppState, Action>)
);

export type AppDispatch = typeof store.dispatch;
export default store;
