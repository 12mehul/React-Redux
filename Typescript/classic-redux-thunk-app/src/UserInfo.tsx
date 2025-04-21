import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "./redux/store/store";
import { AppState } from "./redux/reducers/rootReducers";
import { fetchUserData } from "./redux/asyncActions/userAsyncAction";
import { IUser } from "./redux/types/IUserTypes";

const UserInfo = () => {
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector<AppState>((state) => state.users.data) as IUser[];
  console.log(data);

  useEffect(() => {
    dispatch(fetchUserData());
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
        </div>
      ))}
      <h2></h2>
    </div>
  );
};

export default UserInfo;
