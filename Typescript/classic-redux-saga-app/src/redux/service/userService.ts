import axios from "axios";
import { IUser } from "../types/IUserTypes";

export async function GetUsers(): Promise<IUser[]> {
  return await axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
    });
}
