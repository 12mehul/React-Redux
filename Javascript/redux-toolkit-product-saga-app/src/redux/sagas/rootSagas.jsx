import { all } from "redux-saga/effects";
import { watcherProductSaga, watcherSingleProductSaga } from "./productSagas";

export default function* rootSagas() {
  yield all([watcherProductSaga(), watcherSingleProductSaga()]);
}
