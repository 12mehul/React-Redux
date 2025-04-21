import { IUser } from "../types/IUserTypes";

const getUser = async (): Promise<IUser[]> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  return await data.json();
};

export default getUser;
