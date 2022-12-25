import React from "react";
import useTodo from "../zustand/todoList";
import Button from "./Button";

interface Item {
  index: number;
  todo: string;
}

const Item = ({ index, todo }: Item) => {
  const { remove: removeTodo } = useTodo();

  return (
    <div className="flex items-center justify-between py-5 pl-3 ">
      <p>
        {index}: {todo}
      </p>
      <Button handleClick={() => removeTodo(todo)} className="bg-red-500 p-3 ">
        DELETE
      </Button>
    </div>
  );
};

export default Item;
