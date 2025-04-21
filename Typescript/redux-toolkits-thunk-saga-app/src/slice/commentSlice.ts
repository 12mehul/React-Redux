import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStateReducer } from "../types/IStateReducers";
import { IComment } from "../types/IComments";

const initialState: IStateReducer<IComment[]> = {
  loading: false,
  data: [],
  error: null,
};

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    CommentRequest: (state: IStateReducer<IComment[]>) => {
      state.loading = true;
    },
    CommentSuccess: (
      state: IStateReducer<IComment[]>,
      action: PayloadAction<IComment[]>
    ) => {
      state.loading = false;
      state.data = action.payload ?? [];
    },
    CommentFailure: (state: IStateReducer<any>, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { CommentRequest, CommentSuccess, CommentFailure } =
  commentSlice.actions;

export default commentSlice.reducer;
