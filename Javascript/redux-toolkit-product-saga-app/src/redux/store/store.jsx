import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import productSlice from "../slice/productSlice";
import rootSagas from "../sagas/rootSagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    products: productSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSagas);

export default store;
