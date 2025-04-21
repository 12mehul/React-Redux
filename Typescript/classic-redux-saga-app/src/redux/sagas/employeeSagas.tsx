import { call, put, takeEvery } from "redux-saga/effects";
import { IEmployee, IEmployeeAction } from "../types/IEmpTypes";
import { AddEmployees } from "../service/employeeService";
import {
  EmployeeFailure,
  EmployeeRequest,
  EmployeeSuccess,
} from "../actions/employeeActions";

function* saveData(action: IEmployeeAction) {
  try {
    const res: IEmployee = yield call(AddEmployees, action.payload);
    yield put(EmployeeSuccess(res));
  } catch (error: any) {
    yield put(EmployeeFailure(error.message));
  }
}

export default function* watchesEmployeesSaga() {
  yield takeEvery(EmployeeRequest, saveData);
}
