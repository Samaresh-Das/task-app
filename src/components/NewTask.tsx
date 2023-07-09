"use client";
import { store } from "@/store/TaskStore";
import React, { useRef } from "react";

const NewTask = () => {
  const titleInput = useRef<HTMLInputElement>(null);
  const descInput = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredTitle = titleInput.current!.value;
    const enteredDesc = descInput.current!.value;

    store.addTodo(enteredTitle, enteredDesc, "To-do");
  };
  return (
    <form onSubmit={submitHandler} className="w-[40rem] my-[2rem] mx-auto">
      <label htmlFor="title" className="font-bold mb-2 block">
        Title
      </label>
      <input
        type="text"
        id="title"
        ref={titleInput}
        className="block w-full text-lg py-2 px-4 rounded-md bg-gray-100 border-b-2 border-gray-700 mb-2"
      />
      <label htmlFor="desc" className="font-bold mb-2 block">
        Todo description
      </label>
      <input
        type="text"
        id="desc"
        ref={descInput}
        className="block w-full text-lg py-2 px-4 rounded-md bg-gray-100 border-b-2 border-gray-700 mb-2"
      />
      <button
        type="submit"
        className="font-inherit bg-yellow-500 border border-yellow-500 text-gray-800 py-2 px-6 rounded-md cursor-pointer hover:bg-[#ebc002] active:bg-[#ebc002]"
      >
        Add Todo
      </button>
    </form>
  );
};

export default NewTask;
