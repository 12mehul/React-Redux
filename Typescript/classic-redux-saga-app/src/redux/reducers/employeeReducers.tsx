import { IEmployeeAction, IEmployeeState } from "../types/IEmpTypes";

const initialState: IEmployeeState = {
  employees: {
    name: "",
    email: "",
    phone: "",
    id: "",
  },
  loading: false,
  error: null,
};

export default (
  state = initialState,
  action: IEmployeeAction
): IEmployeeState => {
  switch (action.type) {
    case "EMPLOYEES_REQUEST":
      return { ...state, loading: true };
    case "EMPLOYEES_SUCCESS":
      return { ...state, loading: false, employees: action.payload };
    case "EMPLOYEES_FAILURE":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
