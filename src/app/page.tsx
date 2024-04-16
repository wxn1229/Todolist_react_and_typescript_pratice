"use client";
import AddTodo from "@/compnents/AddTodo";
import TodoFilter from "@/compnents/TodoFilter";
import TodoList from "@/compnents/TodoList";
import { useState } from "react";
import { Todo } from "@/type";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState("all");

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text: text,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const getFilterTodos = () => {
    switch (filter) {
      case "all":
        return todos;
      case "completed":
        return todos.filter((todo) => todo.completed);
      case "active":
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  };

  return (
    <div>
      <h1>TodoList</h1>
      <AddTodo addTodo={addTodo}></AddTodo>
      <TodoList
        todos={getFilterTodos()}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      ></TodoList>
      <TodoFilter setFilter={setFilter}></TodoFilter>
    </div>
  );
}
