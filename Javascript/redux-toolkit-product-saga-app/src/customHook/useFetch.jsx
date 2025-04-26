import { useEffect, useState } from "react";
import axios from "axios";

const apiUrl = "https://api.escuelajs.co/api/v1";

export const useFetch = (url) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/${url}`);
      setData(response.data);
    } catch (error) {
      const errorMsg = err.response?.data?.message || "Failed to fetch data";
      throw new Error(errorMsg);
    }
  };

  useEffect(() => {
    if (!url) return;
    fetchData();
  }, [url]);

  return { data };
};
