import { all } from "redux-saga/effects";
import {
  watcherCreateProductSaga,
  watcherProductSaga,
  watcherSingleProductSaga,
  watcherUpdateProductSaga,
} from "./productSagas";

export default function* rootSagas() {
  yield all([
    watcherProductSaga(),
    watcherSingleProductSaga(),
    watcherCreateProductSaga(),
    watcherUpdateProductSaga(),
  ]);
}
