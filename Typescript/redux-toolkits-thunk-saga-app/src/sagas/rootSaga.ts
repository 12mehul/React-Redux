import { all } from "redux-saga/effects";
import { watcherComments } from "./commentSaga";

export default function* rootSaga() {
  yield all([watcherComments()]);
}
