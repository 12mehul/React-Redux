import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./redux/store/store";
import { useSelector } from "react-redux";
import { AppState } from "./redux/reducers/rootReducers";
import { IUserState } from "./redux/types/IUserTypes";
import { UserRequest } from "./redux/actions/userActions";

const UserInfo = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector<AppState>((state) => state.users) as IUserState;

  useEffect(() => {
    dispatch(UserRequest());
  }, []);

  return (
    <div>
      <h1>User Info</h1>
      {user.loading ? <p>Loading...</p> : null}
      {user.error ? <p>{user.error}</p> : null}
      {user.users.map((value) => (
        <div key={value.id}>
          <p>{value.name}</p>
          <p>{value.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UserInfo;
