import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "./store/store";
import { IComment } from "./types/IComments";
import { CommentRequest } from "./slice/commentSlice";

const Comments = () => {
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector<AppState>(
    (state) => state.comment.data
  ) as IComment[];

  useEffect(() => {
    dispatch(CommentRequest());
  }, []);

  return (
    <div>
      <h2>Comments</h2>
      {data.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p>{user.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
