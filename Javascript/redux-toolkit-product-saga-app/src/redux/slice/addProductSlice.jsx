import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  product: {
    title: "",
    price: 0,
    description: "",
    categoryId: 0,
    images: [],
  },
  error: null,
};

const addProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    clearProduct: (state) => {
      state.product = {
        title: "",
        price: 0,
        description: "",
        categoryId: 0,
        images: [],
      };
    },
    addProductChange: (state, action) => {
      state.product = {
        ...state.product,
        [action.payload.name]: action.payload.value,
      };
    },
    // Special reducer to add an image to the array
    addImage: (state, action) => {
      state.product.images.push(action.payload); // Adds a new image URL to the array
    },
    addProductStart: (state, action) => {
      state.loading = true;
      state.product = action.payload;
      state.error = null;
    },
    addProductSuccess: (state) => {
      state.loading = false;
    },
    addProductFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  clearProduct,
  addProductChange,
  addImage,
  addProductStart,
  addProductSuccess,
  addProductFailure,
} = addProductSlice.actions;

export default addProductSlice.reducer;
