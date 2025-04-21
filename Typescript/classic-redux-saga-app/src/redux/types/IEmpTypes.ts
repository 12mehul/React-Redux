export interface IEmployeeAction {
  type: string;
  payload?: IEmployee | any;
}

export interface IEmployeeState {
  employees: IEmployee;
  loading: boolean;
  error: string | null;
}

export interface IEmployee {
  name: string;
  email: string;
  phone: string;
  id?: string;
}
