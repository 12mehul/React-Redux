import { IUser, IUserAction } from "../types/IUserTypes";

export const UserRequest = (): IUserAction => ({
  type: "USERS_REQUEST",
});

export const UserSuccess = (payLoad: IUser[]): IUserAction => ({
  type: "USERS_SUCCESS",
  payload: payLoad,
});

export const UserFailure = (payLoad: any): IUserAction => ({
  type: "USERS_FAILURE",
  payload: payLoad,
});
