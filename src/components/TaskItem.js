import React from "react";

const TaskItem = ({ name, des }) => {
  return (
    <div className="border-solid border-2 border-indigo-600 rounded hover:border-dashed">
      <p className="font-bold text-xl">Task</p>
      <p>Task name: {name}</p>
      <p>Description: {des}</p>
    </div>
  );
};

export default TaskItem;
