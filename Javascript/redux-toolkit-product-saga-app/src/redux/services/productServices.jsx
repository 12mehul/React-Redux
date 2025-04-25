import axios from "axios";

export const fetchProductsService = async () => {
  try {
    const response = await axios.get(
      "https://api.escuelajs.co/api/v1/products"
    );
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "Failed to fetch products";
    throw new Error(errorMessage);
  }
};

export const fetchProductByIdService = async (id) => {
  try {
    const response = await axios.get(
      `https://api.escuelajs.co/api/v1/products/${id}`
    );
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "Failed to fetch product";
    throw new Error(errorMessage);
  }
};

export const createProductService = async (product) => {
  try {
    const response = await axios.post(
      "https://api.escuelajs.co/api/v1/products",
      product
    );
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "Failed to create product";
    throw new Error(errorMessage);
  }
};
