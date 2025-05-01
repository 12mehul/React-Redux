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
    // Handle Change
    updateProductChange: (state, action) => {
      state.product = {
        ...state.product,
        [action.payload.name]: action.payload.value,
      };
    },
    // Special reducer to add an image to the array
    updateImage: (state, action) => {
      state.product.images.push(action.payload); // Adds a new image URL to the array
    },

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

    // Update Product
    updateProductStart: (state, action) => {
      state.loading = true;
      state.productId = action.payload.id;
      state.product = action.payload.product;
      state.error = null;
    },
    updateProductSuccess: (state, action) => {
      state.loading = false;
      state.product = action.payload;
    },
    updateProductFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Delete Product
    deleteProductStart: (state, action) => {
      state.loading = true;
      state.productId = action.payload;
      state.error = null;
    },
    deleteProductSuccess: (state) => {
      state.loading = false;
    },
    deleteProductFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  updateProductChange,
  updateImage,
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
  fetchSingleProductStart,
  fetchSingleProductSuccess,
  fetchSingleProductFailure,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
} = productSlice.actions;

export default productSlice.reducer;
