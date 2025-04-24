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
