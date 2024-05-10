import { useState } from "react";
import "./App.css";
import TaskItem from "./components/TaskItem";

export default function App() {
  const [todos, setTodos] = useState([]);

  const [todo, setTodo] = useState({
    name: "",
    des: "",
  });
  return (
    <div className="h-screen px-96">
      <h1 className="text-4xl font-bold text-center p-4">Todo List</h1>

      <div className="grid grid-cols-4 h-[80%] text-center bg-orange-300 p-4 gap-2 rounded mb-2">
        {todos.map((todo) => (
          <TaskItem name={todo.name} des={todo.des} />
        ))}
      </div>

      <div className="flex bg-green-300 p-4 h-auto flex-auto gap-4 rounded">
        <input
          type="text"
          className="px-2 rounded"
          placeholder="Task Name"
          id="name"
          value={todo.name}
          onChange={(e) =>
            setTodo({
              ...todo,
              name: e.target.value,
            })
          }
        ></input>
        <input
          type="text"
          className="px-2 rounded"
          placeholder="Task Description"
          id="des"
          value={todo.des}
          onChange={(e) =>
            setTodo({
              ...todo,
              des: e.target.value,
            })
          }
        ></input>
        <button
          className=" bg-gray-400 rounded p-2 text-sm font-bold hover:bg-gray-300"
          onClick={() => {
            setTodos([...todos, todo]);
          }}
        >
          Add Task
        </button>
      </div>
    </div>
  );
}
