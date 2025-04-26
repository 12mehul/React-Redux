import axios from "axios";

const apiUrl = "https://api.escuelajs.co/api/v1/products";

export const fetchProductsService = async () => {
  try {
    const response = await axios.get(`${apiUrl}`);
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "Failed to fetch products";
    throw new Error(errorMessage);
  }
};

export const fetchProductByIdService = async (id) => {
  try {
    const response = await axios.get(`${apiUrl}/${id}`);
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "Failed to fetch product";
    throw new Error(errorMessage);
  }
};

export const createProductService = async (product) => {
  try {
    const response = await axios.post(`${apiUrl}`, product);
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "Failed to create product";
    throw new Error(errorMessage);
  }
};

export const updateProductService = async (id, product) => {
  try {
    const response = await axios.put(`${apiUrl}/${id}`, product);
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "Failed to update product";
    throw new Error(errorMessage);
  }
};
