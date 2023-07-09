"use client";
import { store } from "@/store/TaskStore";
import { observer } from "mobx-react-lite";
import React from "react";
import TaskList from "./TaskList";

const Task = observer(() => {
  const handleToggle = (todo: any) => {
    todo.toggle("Done");
  };

  const todoRemoveHandler = (id: string) => {
    store.removeTodoById(id);
  };

  const todoEditHandler = (id: string, title: string, desc: string) => {
    store.removeTodoById(id);
  };

  return (
    <ul className="list-none my-[2rem] mx-auto p-0 w-[40rem]">
      {store.todos.map((todo, i) => (
        <TaskList
          key={i}
          changeStatus={() => handleToggle(todo)}
          title={todo.title}
          desc={todo.desc}
          status={todo.status}
          removeTodo={() => todoRemoveHandler(todo.id)}
        />
      ))}
    </ul>
  );
});

export default Task;
