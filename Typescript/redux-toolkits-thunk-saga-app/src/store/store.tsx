import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/rootSaga";
import counterReducer from "../slice/counterSlice";
import userReducer from "../slice/userSlice";
import todoReducer from "../slice/todoSlice";
import commentReducer from "../slice/commentSlice";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    todo: todoReducer,
    comment: commentReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
