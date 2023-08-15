import React, { MouseEvent } from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

interface ToDoProps {
  text: string;
  description: string;
  status: "Por Hacer" | "En Progreso" | "Completada";
  updateMode: (event: MouseEvent<SVGElement>) => void;
  deleteToDo: (event: MouseEvent<SVGElement>) => void;
}

const statusToClass = {
  "Por Hacer": "status-todo",
  "En Progreso": "status-in-progress",
  "Completada": "status-completed",
};

const ToDo: React.FC<ToDoProps> = ({
  text,
  description,
  status,
  updateMode,
  deleteToDo,
}) => {
  const statusClass = statusToClass[status] || "";
  console.log("status", status);

  return (
    <div className="todo">
      <div className={`status ${statusClass}`}>Task Status: {status}</div>
      <div className={`text ${status === "Completada" ? "strikethrough" : ""}`}>
        {text}
      </div>
      <div
        className={`description ${
          status === "Completada" ? "strikethrough" : ""
        }`}
      >
        {description}
      </div>

      <div className="icons">
        <BiEdit className="icon" onClick={updateMode} />
        <AiFillDelete className="icon" onClick={deleteToDo} />
      </div>
    </div>
  );
};

export default ToDo;
