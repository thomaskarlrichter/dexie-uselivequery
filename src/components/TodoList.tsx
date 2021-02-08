import React, { useState } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../db";

export function TodoList() {
  const todos = useLiveQuery(
    () =>
      db.todos.toArray()
  );

  // Another simple query - total number of friends:
  const todoCount = useLiveQuery(() => db.todos.count());

  // Default values returned --> queries are still loading.
  if (!todos || todoCount === undefined) return null;

  return (
    <div>
      <p>
        Your have <b>{todoCount}</b> todos in total.
      </p>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.name}, {todo.finished}
            <button
              onClick={() =>
                db.todos.where({ id: todo.id }).modify((f) => !f.finished)
              }
            >
              finisshed!
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}