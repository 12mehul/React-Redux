import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSagas from "../sagas/rootSagas";
import productSlice from "../slice/productSlice";
import addProductSlice from "../slice/addProductSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    products: productSlice,
    addProduct: addProductSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSagas);

export default store;
