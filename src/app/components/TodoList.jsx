import React from "react";
import Todo from "./Todo";

function TodoList({ todos, deleteTodo, editTodo }) {
  return (
    <div className="mt-10 space-y-5">
      {todos &&
        todos.map((todo, id) => (
          <Todo
            todo={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            key={id}
          />
        ))}
    </div>
  );
}

export default TodoList;
