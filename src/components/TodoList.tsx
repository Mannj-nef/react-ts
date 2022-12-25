import React, { useEffect, useRef } from "react";
import useTodo from "../zustand/todoList";
import Button from "./Button";
import Input from "./Input";
import Item from "./Item";

const TodoList = () => {
  const { todos, getTodo } = useTodo();

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <div className="w-[500px] rounded-lg shadow-xl border border-blue-300 p-8 my-10 m-auto">
      <Header></Header>

      <div className="w-full border-b border-blue-500 my-5"></div>

      <div className="body">
        {todos.length > 0 &&
          todos.map((todo, index) => (
            <Item key={index} index={index} todo={todo}></Item>
          ))}
      </div>
    </div>
  );
};

const Header = () => {
  const { addNew } = useTodo();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    addNew();

    if (inputRef.current) {
      console.log(0);
      inputRef.current.focus();
    }
  };

  return (
    <>
      <h2 className="font-semibold text-xl text-center">Todo List</h2>

      <form onSubmit={handleSubmit} className="header flex gap-3 mt-10">
        <Input inputRef={inputRef}></Input>
        <Button type="submit">ADD</Button>
      </form>
    </>
  );
};

export default TodoList;
