import { IUser } from "../types/IUserTypes";

export interface IUserAction {
  type: string;
  payload?: IUser[] | any | undefined;
}

export const UserRequest = (): IUserAction => {
  return {
    type: "USER_REQUEST",
  };
};

export const UserSuccess = (payLoad: IUser[]): IUserAction => {
  return {
    type: "USER_SUCCESS",
    payload: payLoad,
  };
};

export const UserError = (payLoad: any): IUserAction => {
  return {
    type: "USER_FAILURE",
    payload: payLoad,
  };
};
