import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  products: [],
  error: null,
  product: null,
  productId: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // Get All Products
    fetchProductsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    fetchProductsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Single Product
    fetchSingleProductStart: (state, action) => {
      state.loading = true;
      state.productId = action.payload;
      state.error = null;
    },
    fetchSingleProductSuccess: (state, action) => {
      state.loading = false;
      state.product = action.payload;
    },
    fetchSingleProductFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
  fetchSingleProductStart,
  fetchSingleProductSuccess,
  fetchSingleProductFailure,
} = productSlice.actions;

export default productSlice.reducer;
