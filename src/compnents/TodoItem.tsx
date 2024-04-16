import { Todo } from "@/type";
interface TodoList {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}
function TodoItem({ todo, toggleTodo, deleteTodo }: TodoList) {
  return (
    <li style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
      {todo.text}
      <button onClick={() => toggleTodo(todo.id)}>switch</button>
      <button onClick={() => deleteTodo(todo.id)}>delete</button>
    </li>
  );
}

export default TodoItem;
