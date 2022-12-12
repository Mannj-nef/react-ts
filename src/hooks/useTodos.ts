import { useEffect, useReducer, useRef } from "react";
import { InitialState } from "../utils/interfaces";

type TAction =
  | { type: "ADD"; payload: string }
  | { type: "REMOVE"; payload: string };

interface UseTodo {
  todos: InitialState[];
  inputRef: React.LegacyRef<HTMLInputElement> | undefined;
  handleAddTodo: () => void;
  handleRemoveTodo: (id: string) => void;
}

const todoReducer = (
  state: InitialState[],
  action: TAction
): InitialState[] => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: `${action.payload} - ${state.length}`,
          value: action.payload,
        },
      ];

    case "REMOVE":
      const filterTodo = state.filter((todo) => todo.id !== action.payload);
      return filterTodo;

    default:
      return state;
  }
};
function useTodo(initialState: InitialState[]): UseTodo {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddTodo = () => {
    if (!inputRef.current) return;

    const inputValue = inputRef.current.value;
    dispatch({
      type: "ADD",
      payload: inputValue,
    });
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  const handleRemoveTodo = (id: string) => {
    dispatch({
      type: "REMOVE",
      payload: id,
    });
  };

  return { todos, handleAddTodo, handleRemoveTodo, inputRef };
}

export default useTodo;
