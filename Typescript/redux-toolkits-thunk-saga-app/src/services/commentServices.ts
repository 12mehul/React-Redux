import axios from "axios";

export async function getComments() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/comments"
  );
  return response.data;
}
