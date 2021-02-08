import React, { FormEvent, useState } from "react";
import { db } from "../db";

export function AddTodo() {
  const [todo, setTodo] = useState({
    name: "",
    finished: false
  });

  function onSubmit(event: FormEvent) {
    db.todos.add(todo);
    event.preventDefault();
    setTodo({
      name: "",
      finished: false
    });
  }

  return (
    <div>
      <h3>Add new todo</h3>
      <form onSubmit={onSubmit}>
        <label>
          Name:
          <input
            type="text"
            autoFocus
            placeholder="Enter name..."
            value={todo.name}
            onChange={(ev) =>
              setTodo((todo) => ({
                ...todo,
                name: ev.target.value
              }))
            }
          />
        </label>

       <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}
