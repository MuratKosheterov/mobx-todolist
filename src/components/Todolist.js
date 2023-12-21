import { observer } from "mobx-react";
import React, { useState } from "react";
import todoStore from "../redux/todoStore";

const Todolist = observer(() => {
  const { todos, add, removeFromTodo, clicked } = todoStore;

  const [tasks, setTasks] = useState();
  console.log(tasks);

  function handleAdd(todos) {
    if (tasks) {
      add(todos);
    }
    setTasks("");
  }

  function handleDelete(id) {
    removeFromTodo(id);
  }

  function handleClicked(id) {
    clicked(id);
  }

  return (
    <div className=" grid grid-cols-3">
      <div></div>
      <div className=" bg-gray-600  py-44 mt-10 flex flex-col items-center">
        <h1 className="pb-10 uppercase font-semibold text-white">
          mobx todolist
        </h1>
        <div className="">
          <input
            value={tasks}
            onChange={(e) => setTasks(e.target.value)}
            className=" border border-green-800"
            type="text"
            placeholder="enter some tasks please..."
          />
          <button
            onClick={() => handleAdd(tasks)}
            className=" rounded py-1 px-5  bg-orange-600  text-white "
          >
            add task
          </button>
        </div>
        {todos.map((todo) => {
          return (
            <div
              key={todo.id}
              className=" flex justify-between items-center w-2/3  px-5 py-3 rounded-md mt-5 bg-slate-200"
            >
              <input
                onClick={() => handleClicked(todo.id)}
                type="checkbox"
                name=""
                id=""
              />
              <p
                style={{ textDecoration: todo.done ? 'line-through' : '' } }
              >
                {todo.text}
              </p>
              <p onClick={() => handleDelete(todo.id)}>delete</p>
            </div>
          );
        })}
      </div>
      <div></div>
    </div>
  );
});

export default Todolist;
