import Dexie, { Table } from "dexie";
import { Friend } from "./Friend";
import { Todo } from "./Todo";

class FriendsDB extends Dexie {
  friends!: Table<Friend>;
  todos!: Table<Todo>;

  constructor() {
    super("friendsDB");
    this.version(2).stores({
      friends: `
        ++id,
        age`
    });
    this.version(3).stores({
      todos: `
        ++id,
        name`
    });
   
  }
}

export const db = new FriendsDB();
