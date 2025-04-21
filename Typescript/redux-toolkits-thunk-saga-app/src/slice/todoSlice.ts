import { createSlice } from "@reduxjs/toolkit";
import { IStateReducer } from "../types/IStateReducers";
import { ITodo } from "../types/ITodos";
import { fetchTodos } from "../services/todoServices";
import { IAction } from "../types/IActions";

const initialState: IStateReducer<ITodo[]> = {
  loading: false,
  data: [],
  error: null,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTodos.fulfilled, (state, action: IAction<ITodo[]>) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchTodos.rejected, (state, action: IAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const {} = todoSlice.actions;

export default todoSlice.reducer;
