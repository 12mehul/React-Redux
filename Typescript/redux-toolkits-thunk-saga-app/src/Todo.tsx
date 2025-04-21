import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "./store/store";
import { ITodo } from "./types/ITodos";
import { fetchTodos } from "./services/todoServices";

const Todo = () => {
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector<AppState>((state) => state.todo.data) as ITodo[];

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <div>
      <h2>Todos</h2>
      {data.map((value) => (
        <div key={value.id}>
          <h3>{value.title}</h3>
          <p>{value.completed ? "Completed" : "Not Completed"}</p>
        </div>
      ))}
    </div>
  );
};

export default Todo;
