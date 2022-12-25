import create from "zustand";

enum Todo {
  todoKey = "TODOKEY",
}

interface UseTodo {
  todos: string[];
  inputValue: string;
  getTodo: () => void;
  setValue: (value: string) => void;
  addNew: () => void;
  remove: (value: string) => void;
}

const useTodo = create<UseTodo>((set) => ({
  todos: [],
  inputValue: "",
  setValue: (value) =>
    set(() => ({
      inputValue: value,
    })),
  getTodo: () =>
    set(() => {
      const isTodos: string | null = localStorage.getItem(Todo.todoKey);
      const todoInLocal: string[] = isTodos ? JSON.parse(isTodos) : [];
      return { todos: todoInLocal };
    }),
  addNew: () =>
    set((state) => {
      const newTodos: string[] = [state.inputValue, ...state.todos];

      hendleSetLocal(newTodos);

      return { todos: newTodos, inputValue: "" };
    }),
  remove: (value) =>
    set((state) => {
      const newTodos = state.todos.filter((todoItem) => todoItem !== value);

      hendleSetLocal(newTodos);

      return { todos: newTodos };
    }),
}));

function hendleSetLocal(newTodos: string[]): void {
  const jsonLocal: string = JSON.stringify(newTodos);
  localStorage.setItem(Todo.todoKey, jsonLocal);
}

export default useTodo;
