import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";

function Todo({ todo, deleteTodo, editTodo }) {
  const [editOpen, setEditOpen] = useState(false);
  const [editedValue, setEditedValue] = useState(todo.todoContent);

  return (
    <div className="w-48 lg:w-96 flex justify-between text-white bg-yellow-600 rounded-lg py-1 px-2">
      {editOpen ? (
        <>
          <input
            type="text"
            className="rounded-lg w-36 lg:w-72 text-black pl-2 outline-none"
            value={editedValue}
            onChange={(e) => {
              setEditedValue(e.target.value);
            }}
          />
          <FaCheck
            className="size-6 cursor-pointer"
            onClick={() => {
              setEditOpen(false);
              editTodo(todo.id, editedValue);
            }}
          />
        </>
      ) : (
        <>
          <p>{todo.todoContent}</p>
          <div className="flex">
            <MdDelete
              className="size-6 cursor-pointer"
              onClick={() => {
                deleteTodo(todo.id);
              }}
            />
            <MdEdit
              className="size-6 cursor-pointer"
              onClick={() => {
                setEditOpen(true);
              }}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Todo;
