import React from "react";
import { db } from "../db";

export function ClearDatabaseButton() {
  return (
    <button
      className="large-button"
      onClick={() => {
        db.transaction("rw", db.tables, async () => {
          await Promise.all(db.tables.map((table) => table.clear()));
        });
      }}
    >
      Clear Database
    </button>
  );
}
export function ClearTodosButton() {
  return (
    <button
      className="large-button"
      onClick={() => {
        db.todos.clear()
      }}
    >
      Clear Todos
    </button>
  );
}

export function ClearFriendsButton() {
  return (
    <button
      className="large-button"
      onClick={() => {
        db.friends.clear()
      }}
    >
      Clear Friends
    </button>
  );
}