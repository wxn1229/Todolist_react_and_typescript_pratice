import { Todo } from "@/type";
import TodoItem from "./TodoItem";
interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}
function TodoList({ todos, toggleTodo, deleteTodo }: TodoListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        ></TodoItem>
      ))}
    </ul>
  );
}

export default TodoList;
