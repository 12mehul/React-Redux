import { all } from "redux-saga/effects";
import watchesCounterSaga from "./counterSagas";
import watchesUsersSaga from "./userSagas";
import watchesEmployeesSaga from "./employeeSagas";

export default function* rootSaga() {
  yield all([watchesCounterSaga(), watchesUsersSaga(), watchesEmployeesSaga()]);
}
