import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../types/IUser";
import { IAction } from "../types/IActions";
import { IStateReducer } from "../types/IStateReducers";

const initialState: IStateReducer<IUser[]> = {
  loading: false,
  data: [],
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    UserRequest: (state: IStateReducer<IUser[]>) => {
      state.loading = true;
    },
    UserSuccess: (state: IStateReducer<IUser[]>, action: IAction<IUser[]>) => {
      state.loading = false;
      state.data = action.payload ?? [];
    },
    UserFailure: (state: IStateReducer<any>, action: IAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { UserRequest, UserSuccess, UserFailure } = userSlice.actions;

export default userSlice.reducer;
