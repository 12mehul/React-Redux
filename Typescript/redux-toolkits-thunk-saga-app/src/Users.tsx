import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "./store/store";
import { IUser } from "./types/IUser";
import { UserFailure, UserRequest, UserSuccess } from "./slice/userSlice";
import axios from "axios";

const Users = () => {
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector<AppState>((state) => state.user.data) as IUser[];

  useEffect(() => {
    dispatch(UserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => dispatch(UserSuccess(res.data)))
      .catch((err) => UserFailure(err));
  }, []);

  return (
    <div>
      <h2>Users</h2>
      {data.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;
