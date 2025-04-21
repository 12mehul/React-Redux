import { delay, put, takeEvery } from "redux-saga/effects";
import { DEC, INC } from "../actions/counterActions";

function* counterSagaInc() {
  yield delay(1000);
  yield put(INC());
}

function* counterSagaDec() {
  yield delay(1000);
  yield put(DEC());
}

export default function* watchesCounterSaga() {
  yield takeEvery("INCASYNC", counterSagaInc);
  yield takeEvery("DECASYNC", counterSagaDec);
}
