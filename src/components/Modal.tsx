"use client";
import React, { useRef } from "react";

const Modal: React.FC<{
  //   removeModal: () => void;
  getEditDetails: (id: string, title: string, desc: string) => void;
  todoId: string | null;
}> = ({ getEditDetails, todoId }) => {
  const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const titleInput = useRef<HTMLInputElement>(null);
  const descInput = useRef<HTMLInputElement>(null);

  const modalSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (todoId) {
      const enteredTitle = titleInput.current!.value;
      const enteredDesc = descInput.current!.value;

      getEditDetails(todoId, enteredTitle, enteredDesc);
    }
  };

  return (
    <div
      id="authentication-modal"
      tabIndex={-1}
      aria-hidden="true"
      className="fixed inset-0 flex items-center justify-center z-50"
    >
      <div
        className="relative w-full max-w-md max-h-full "
        onClick={handleModalClick}
      >
        <div className="relative rounded-lg shadow bg-yellow-500 border border-yellow-500">
          <div className="px-6 py-6 lg:px-8">
            <form className="space-y-6" onSubmit={modalSubmitHandler}>
              <div>
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium "
                >
                  Edit title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="border  text-sm rounded-lg block w-full p-2.5"
                  ref={titleInput}
                />
              </div>
              <div>
                <label
                  htmlFor="desc"
                  className="block mb-2 text-sm font-medium"
                >
                  Edit Description
                </label>
                <input
                  type="text"
                  name="desc"
                  id="desc"
                  className=" text-sm rounded-lg block w-full p-2.5"
                  ref={descInput}
                />
              </div>
              <button
                type="submit"
                className="font-inherit bg-white py-2 px-6 rounded-md cursor-pointer hover:bg-[#ebe8dd] active:bg-[#ebe8dd]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
