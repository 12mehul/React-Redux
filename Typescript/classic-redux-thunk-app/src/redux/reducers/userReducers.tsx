import { IUserAction } from "../actions/userActions";
import { IUser } from "../types/IUserTypes";

export interface IUserReducer {
  data: IUser[];
  isRequest: boolean;
  error: any;
}

const initialState: IUserReducer = {
  data: [],
  isRequest: false,
  error: {},
};

export default (state = initialState, action: IUserAction) => {
  switch (action.type) {
    case "USER_REQUEST":
      return { ...state, isRequest: true };
    case "USER_SUCCESS":
      return { ...state, data: action.payload as IUser[], isRequest: false };
    case "USER_FAILURE":
      return { ...state, error: action.payload, isRequest: false };
    default:
      return state;
  }
};
