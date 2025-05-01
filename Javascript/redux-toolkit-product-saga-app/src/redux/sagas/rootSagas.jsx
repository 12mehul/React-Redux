import { all } from "redux-saga/effects";
import {
  watcherCreateProductSaga,
  watcherDeleteProductSaga,
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
    watcherDeleteProductSaga(),
  ]);
}
