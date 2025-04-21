import { call, put, takeEvery } from "redux-saga/effects";
import { getComments } from "../services/commentServices";
import { IComment } from "../types/IComments";
import {
  CommentFailure,
  CommentRequest,
  CommentSuccess,
} from "../slice/commentSlice";

function* asyncComment() {
  try {
    const data: IComment[] = yield call(getComments);
    yield put(CommentSuccess(data));
  } catch (error) {
    yield put(CommentFailure(error));
  }
}

export function* watcherComments() {
  yield takeEvery(CommentRequest().type, asyncComment);
}
