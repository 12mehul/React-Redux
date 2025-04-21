import { call, put, takeEvery } from "redux-saga/effects";
import { GetUsers } from "../service/userService";
import { UserFailure, UserRequest, UserSuccess } from "../actions/userActions";
import { IUser } from "../types/IUserTypes";

function* usersFetchSaga() {
  try {
    const res: IUser[] = yield call(GetUsers);
    yield put(UserSuccess(res));
  } catch (error: any) {
    yield put(UserFailure(error.message));
  }
}

export default function* watchesUsersSaga() {
  yield takeEvery(UserRequest().type, usersFetchSaga);
}
