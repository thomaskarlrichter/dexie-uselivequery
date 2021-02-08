import * as React from "react";
import { FriendList } from "./components/FriendList";
import { AddFriend } from "./components/AddFriend";
import { TodoList } from "./components/TodoList";
import { AddTodo } from "./components/AddTodo";
import { ClearFriendsButton, ClearTodosButton } from "./components/ClearDatabaseButton";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Dexie useLiveQuery() sample</h1>
      <FriendList />
      <AddFriend />
      <TodoList />
      <AddTodo />
      <ClearFriendsButton />

      <ClearTodosButton/>
    </div>
  );
}
