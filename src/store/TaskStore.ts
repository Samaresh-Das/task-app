import { types, onSnapshot, destroy } from "mobx-state-tree";

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
    edit(newTitle: string, newDesc: string) {
      self.title = newTitle;
      self.desc = newDesc;
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
        console.log(newTodo.id);
        localStorage.setItem("todos", JSON.stringify(self.todos));
      },

      editTodoById: (id: string, newTitle: string, newDesc: string) => {
        const todoToEdit = self.todos.find((todo) => todo.id === id);
        if (todoToEdit) {
          todoToEdit.edit(newTitle, newDesc);
          localStorage.setItem("todos", JSON.stringify(self.todos));
        }
      },

      toggleStatus: (id: string, newStatus: string) => {
        const todoToEdit = self.todos.find((todo) => todo.id === id);
        if (todoToEdit) {
          todoToEdit.toggle(newStatus);
          localStorage.setItem("todos", JSON.stringify(self.todos));
        }
      },

      removeTodoById: (id: string) => {
        const todoToRemove = self.todos.find((todo) => todo.id === id);
        if (todoToRemove) {
          destroy(todoToRemove);
          localStorage.setItem("todos", JSON.stringify(self.todos));
        }
      },
      fetchTodos: () => {
        const storedTodos = localStorage?.getItem("todos");
        if (storedTodos) {
          const parsedTodos = JSON.parse(storedTodos);
          self.todos.replace(parsedTodos);
        }
      },
    };
  });

// create an instance from a snapshot
export const store = Store.create({
  // todos: [
  //   {
  //     id: Math.random().toString(),
  //     title: "Get coffee",
  //     desc: "Get a coffee",
  //     status: "Todo",
  //   },
  // ],
});

store.fetchTodos(); // Fetch todos from localStorage

// listen to new snapshots
onSnapshot(store, (snapshot) => {
  // console.dir(snapshot);
});

// invoke action that modifies the tree
// store.todos[0].toggle("In-Progress");
