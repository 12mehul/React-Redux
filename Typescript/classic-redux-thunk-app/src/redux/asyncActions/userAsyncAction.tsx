import { ThunkAction } from "redux-thunk";
import { AppState } from "../reducers/rootReducers";
import {
  IUserAction,
  UserError,
  UserRequest,
  UserSuccess,
} from "../actions/userActions";
import { AppDispatch } from "../store/store";
import getUser from "../services/userService";

export const fetchUserData = (): ThunkAction<
  Promise<void>,
  AppState,
  any,
  IUserAction
> => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(UserRequest());
      const data = await getUser();
      dispatch(UserSuccess(data));
    } catch (error) {
      dispatch(UserError(error));
    }
  };
};
