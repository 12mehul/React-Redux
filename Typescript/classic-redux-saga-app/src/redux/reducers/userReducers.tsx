import { IUserAction, IUserState } from "../types/IUserTypes";

const initialState: IUserState = {
  users: [],
  loading: false,
  error: null,
};

export default (state = initialState, action: IUserAction): IUserState => {
  switch (action.type) {
    case "USERS_REQUEST":
      return { ...state, loading: true };
    case "USERS_SUCCESS":
      return { ...state, loading: false, users: action.payload };
    case "USERS_FAILURE":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
