import { IEmployee, IEmployeeAction } from "../types/IEmpTypes";

export const EmployeeRequest = (payLoad: IEmployee): IEmployeeAction => ({
  type: "EMPLOYEES_REQUEST",
  payload: payLoad,
});

export const EmployeeSuccess = (payLoad: IEmployee): IEmployeeAction => ({
  type: "EMPLOYEES_SUCCESS",
  payload: payLoad,
});

export const EmployeeFailure = (payLoad: any): IEmployeeAction => ({
  type: "EMPLOYEES_FAILURE",
  payload: payLoad,
});
