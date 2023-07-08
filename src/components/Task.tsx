"use client";
import { store } from "@/store/TaskStore";
import React from "react";

const Task = () => {
  const handleToggle = (todo: any) => {
    todo.toggle("Done");
  };
  return (
    <div>
      {store.todos.map((todo, i) => (
        <div key={i}>
          <p>{todo.title}</p>
          <p>{todo.desc}</p>
          <p>{todo.status}</p>
          <button onClick={() => handleToggle(todo)}>Done</button>
        </div>
      ))}
    </div>
  );
};

export default Task;
