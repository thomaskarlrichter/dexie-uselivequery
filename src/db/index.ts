import Dexie, { Table } from "dexie";
import { Friend } from "./Friend";
import { Todo } from "./Todo";

class FriendsDB extends Dexie {
  friends!: Table<Friend>;
  todos!: Table<Todo>;

  constructor() {
    super("friendsDB");
    this.version(1).stores({
      friends: "++id,age",
      todos: "++id,name"
    });
   
  }
}

export const db = new FriendsDB();
