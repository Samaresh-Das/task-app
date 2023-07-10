import React from "react";
import { MdDelete } from "react-icons/md";
import { IconContext } from "react-icons";

const TaskList: React.FC<{
  title: string;
  desc: string;
  status: string;
  changeStatus: () => void;
  removeTodo: () => void;
  showModal: () => void;
}> = ({ title, desc, status, changeStatus, removeTodo, showModal }) => {
  return (
    <li className="my-[1rem] mx-0  shadow-[0_1px_4px_rgba(0,0,0,0.2)] p-[1rem] bg-[#f7f5ef] relative">
      <h2>{title}</h2>
      <p>{desc}</p>
      <p>{status}</p>
      <button
        onClick={changeStatus}
        className="font-inherit bg-[#ebb002] border-[#ebb002] text-[#201d0f] px-2 py-1 rounded-md cursor-pointer"
      >
        Done
      </button>
      <button
        onClick={showModal}
        className="font-inherit bg-[#ebb002] border-[#ebb002] text-[#201d0f] px-2 py-1 rounded-md cursor-pointer"
      >
        Edit
      </button>
      <button
        className="absolute right-2 inset-y-1/4 text-[30px]"
        onClick={removeTodo}
      >
        <IconContext.Provider value={{ color: "red" }}>
          <div>
            <MdDelete />
          </div>
        </IconContext.Provider>
      </button>
    </li>
  );
};

export default TaskList;
