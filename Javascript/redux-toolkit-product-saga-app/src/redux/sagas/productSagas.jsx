import { call, put, takeEvery } from "redux-saga/effects";
import { fetchProductsService } from "../services/productServices";
import {
  fetchProductsFailure,
  fetchProductsStart,
  fetchProductsSuccess,
} from "../slice/productSlice";

function* productSaga() {
  try {
    const products = yield call(fetchProductsService);
    yield put(fetchProductsSuccess(products));
  } catch (error) {
    yield put(fetchProductsFailure(error));
  }
}

export function* watcherProductSaga() {
  yield takeEvery(fetchProductsStart, productSaga);
}
