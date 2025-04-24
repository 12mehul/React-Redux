import { call, put, takeEvery } from "redux-saga/effects";
import {
  fetchProductByIdService,
  fetchProductsService,
} from "../services/productServices";
import {
  fetchProductsFailure,
  fetchProductsStart,
  fetchProductsSuccess,
  fetchSingleProductFailure,
  fetchSingleProductStart,
  fetchSingleProductSuccess,
} from "../slice/productSlice";

function* productSaga() {
  try {
    const products = yield call(fetchProductsService);
    yield put(fetchProductsSuccess(products));
  } catch (error) {
    yield put(fetchProductsFailure(error));
  }
}

function* singleProductSaga(action) {
  try {
    const product = yield call(fetchProductByIdService, action.payload);
    yield put(fetchSingleProductSuccess(product));
  } catch (error) {
    yield put(fetchSingleProductFailure(error));
  }
}

export function* watcherProductSaga() {
  yield takeEvery(fetchProductsStart().type, productSaga);
}

export function* watcherSingleProductSaga() {
  yield takeEvery(fetchSingleProductStart, singleProductSaga);
}
