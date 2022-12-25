import { ReactNode, useEffect, useState } from "react";
import { render } from "react-dom";
import { T } from "ts-toolbelt";
import useTodo from "./hooks/useTodos";
import { InitialState } from "./utils/interfaces";
// import "./utils/app";

const initialState: InitialState[] = [
  {
    id: "1",
    value: "This is first value todo ",
  },
];

const App = () => {
  const { todos, handleAddTodo, handleRemoveTodo, inputRef } =
    useTodo(initialState);
  const [state, setState] = useState<{ id: number; value: string }[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setState(data));
  }, []);

  const handleClickAlert = (value: string) => {
    alert(value);
  };

  return (
    <div className="w-[400px] shadow-lg p-5">
      <Heading title="Accont information"></Heading>

      <RenderTodo
        array={state}
        render={(item) => (
          <List
            handleClick={handleClickAlert}
            key={item.id}
            item={item.value}
          ></List>
        )}
      />

      {/* {state.map((item) => (
        <List
          handleClick={handleClickAlert}
          key={item.id}
          item={item.value}
        ></List>
      ))} */}

      <div className="w-f flex flex-col">
        <div className="flex justify-between">
          <input
            ref={inputRef}
            className="outline-none border border-blue-500 p-4 rounded-md "
            type="text"
          />
          <button
            onClick={handleAddTodo}
            className="text-white bg-blue-500 p-4 rounded-md"
          >
            add todo
          </button>
        </div>

        <ul className="mt-5">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between mb-3 items-center text-lg font-medium"
            >
              <p>
                id:{todo.id} + {todo.value}
              </p>{" "}
              <button
                onClick={() => handleRemoveTodo(todo.id)}
                className="p-2 bg-red-500 rounded text-white"
              >
                remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

interface ItemList {
  item: string;
  handleClick: (item: string) => void;
  children?: ReactNode;
}

const List = ({ item, handleClick, children }: ItemList) => {
  return (
    <li onClick={() => handleClick?.(item)}>
      <p>{item}</p>
      {children}
    </li>
  );
};

interface RenderTodoProps<T> {
  array: T[];
  render: (item: T) => React.ReactNode;
}

const RenderTodo = <T,>({ array, render }: RenderTodoProps<T>) => {
  return <>{array.map((item) => render(item))}</>;
};

const Heading = ({ title }: { title: string }) => {
  return <h2 className="text-blue-500 font-bold text-2xl mb-5">{title}</h2>;
};

export default App;
