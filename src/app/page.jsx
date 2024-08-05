"use client";
import Image from "next/image";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";
import { useState, useEffect } from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const keys = Object.keys(localStorage);
    let loadedTodos = [];

    keys.forEach((key) => {
      if (!isNaN(key)) {
        loadedTodos.push({
          id: key,
          todoContent: localStorage.getItem(key),
        });
      }
    });

    setTodos(loadedTodos);
  }, []);

  const addTodo = (todoContent) => {
    const todo = {
      id: Math.floor(Math.random() * 999999),
      todoContent: todoContent,
    };

    setTodos([...todos, todo]);
    localStorage.setItem(todo.id, todo.todoContent);
  };

  const deleteTodo = (idForDelete) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== idForDelete;
      })
    );

    localStorage.removeItem(idForDelete);
  };

  const editTodo = (idForEdit, editedTodoContent) => {
    todos.forEach((todo) => {
      if (todo.id == idForEdit) {
        todo.todoContent = editedTodoContent;
      }
    });

    localStorage.setItem(idForEdit, editedTodoContent);
  };

  return (
    <div className="bg-gray-700 h-screen flex flex-col items-center">
      <CreateTodo addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  );
}
