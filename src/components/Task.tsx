"use client";
import { store } from "@/store/TaskStore";
import { observer } from "mobx-react-lite";
import React, { Fragment, useState } from "react";
import TaskList from "./TaskList";
import Modal from "./Modal";

const Task = observer(() => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedTodoId, setSelectedTodoId] = useState<string | null>(null);

  const showModalHandler = (id: string) => {
    setSelectedTodoId(id);
    setShowModal((prevState) => !prevState);
    console.log(showModal);
  };

  const closeModalHandler = () => {
    setSelectedTodoId(null);
    setShowModal(false);
  };

  const handleToggle = (todo: any) => {
    todo.toggle("Done");
  };

  const todoRemoveHandler = (id: string) => {
    store.removeTodoById(id);
  };

  const todoEditHandler = (id: string, title: string, desc: string) => {
    // store.removeTodoById(id);
    console.log("Editing todo with id:", id);
    console.log("New title:", title);
    console.log("New description:", desc);
    store.editTodoById(id, title, desc);
    closeModalHandler();
  };

  return (
    <Fragment>
      {showModal && (
        <div
          className="fixed inset-0 z-40 bg-gray-900 bg-opacity-50 flex items-center justify-center"
          onClick={closeModalHandler}
        >
          <Modal todoId={selectedTodoId} getEditDetails={todoEditHandler} />
        </div>
      )}
      <ul className="list-none my-[2rem] mx-auto p-0 w-[40rem]">
        {store.todos.map((todo, i) => (
          <TaskList
            key={i}
            changeStatus={() => handleToggle(todo)}
            title={todo.title}
            desc={todo.desc}
            status={todo.status}
            removeTodo={() => todoRemoveHandler(todo.id)}
            showModal={() => showModalHandler(todo.id)}
          />
        ))}
      </ul>
    </Fragment>
  );
});

export default Task;
