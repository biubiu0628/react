import { useState, useRef } from "react";
import "./App.css";
import TaskItem from "./components/TaskItem";

export default function App() {
  //1
  const [todos, setTodos] = useState([]);
  //2
  const [todo, setTodo] = useState({
    name: "",
    des: "",
  });
  //3
  const [isEditing, setIsEditing] = useState(false);
  //4
  const editedItemIndex = useRef(null);
  // eslint-disable-next-line

  const handleDelete = (id) => {
    setTodos(todos.filter((_, index) => index !== id));
    setTodo({ name: "", des: "" });
    setIsEditing(false);
  };

  const handleEdit = (index) => {
    setIsEditing(true);
    editedItemIndex.current = index;
    setTodo({
      name: todos[index].name,
      des: todos[index].des,
    });
  };

  const handleSaveEdit = () => {
    const updatedTodos = [...todos];
    updatedTodos[editedItemIndex.current] = todo;
    setTodos(updatedTodos);
    setIsEditing(false);
    setTodo({ name: "", des: "" });
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setTodo({ name: "", des: "" });
  };

  return (
    <div className="h-screen xl:px-96 md:px-36">
      <h1 className="text-4xl font-bold text-center p-4">Todo List</h1>

      <div className="grid grid-cols-4 max-xl:grid-cols-1 min-h-[80%] bg-orange-300 p-4 gap-2 rounded mb-2">
        {todos.map((todo, index) => (
          <TaskItem
            name={todo.name}
            des={todo.des}
            onDelete={() => handleDelete(index)}
            onEdit={() => handleEdit(index)}
          />
        ))}
      </div>

      <div className="grid grid-cols-[20%_20%_20%_20%_auto] max-xl:grid-cols-1 bg-green-300 p-4 h-auto gap-4 rounded">
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
        />
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
        />
        {isEditing ? (
          <>
            <button
              className="bg-blue-400 rounded p-2 text-sm font-bold hover:bg-blue-300"
              onClick={handleSaveEdit}
            >
              Save Edit
            </button>
            <button
              className="bg-red-400 rounded p-2 text-sm font-bold hover:bg-red-300"
              onClick={handleCancelEdit}
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            className="bg-gray-400 rounded p-2 text-sm font-bold hover:bg-gray-300"
            onClick={() => {
              setTodos([...todos, todo]);
              setTodo({ name: "", des: "" });
            }}
          >
            Add Task
          </button>
        )}
      </div>
    </div>
  );
}
