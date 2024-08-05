import React, { useState } from "react";

function CreateTodo({ addTodo }) {
  const [todoContent, setTodoContent] = useState("");

  return (
    <div className="w-48 lg:w-96 mt-6">
      <input
        type="text"
        className="w-full rounded-lg py-1 text-center outline-none"
        value={todoContent}
        onChange={(e) => {
          setTodoContent(e.target.value);
        }}
      />
      <div className="flex justify-end mt-2">
        <button
          className="py-1 px-2 bg-yellow-600 rounded-lg"
          onClick={() => {
            addTodo(todoContent);
            setTodoContent("");
          }}
        >
          Ekle
        </button>
      </div>
    </div>
  );
}

export default CreateTodo;
