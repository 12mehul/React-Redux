import { all } from "redux-saga/effects";
import { watcherProductSaga } from "./productSagas";

export default function* rootSagas() {
  yield all([watcherProductSaga()]);
}
