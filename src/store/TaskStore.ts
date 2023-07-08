import { types, onSnapshot } from "mobx-state-tree";

const Todo = types
  .model("Todo", {
    id: types.identifier,
    title: types.string,
    desc: types.string,
    status: types.string,
  })
  .actions((self: any) => ({
    toggle(newStatus: string) {
      console.log(newStatus);
      self.status = newStatus;
    },
  }));

const Store = types
  .model("Store", {
    todos: types.array(Todo),
  })
  .actions((self) => {
    return {
      addTodo: (title: string, desc: string, status: string) => {
        const id = Math.random().toString();
        const newTodo = Todo.create({
          id,
          title,
          desc,
          status,
        });
        self.todos.push(newTodo);
      },
    };
  });

// create an instance from a snapshot
export const store = Store.create({
  todos: [
    {
      id: Math.random().toString(),
      title: "Get coffee",
      desc: "Get a coffee",
      status: "Todo",
    },
  ],
});

// listen to new snapshots
onSnapshot(store, (snapshot) => {
  //   console.dir(snapshot);
});

// invoke action that modifies the tree
// store.todos[0].toggle("In-Progress");
