import axios from "axios";
import { IEmployee } from "../types/IEmpTypes";

// export async function AddEmployees(data: IEmployee): Promise<IEmployee> {
//   return await axios
//     .post("https://66e066f02fb67ac16f2981b3.mockapi.io/api/users/users", data)
//     .then((res) => {
//       return res.data;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

export async function AddEmployees(data: IEmployee): Promise<IEmployee> {
  return fetch("https://66e066f02fb67ac16f2981b3.mockapi.io/api/users/users", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    });
}
