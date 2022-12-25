import React, { forwardRef, useState } from "react";
import useTodo from "../zustand/todoList";

interface ReactRef {
  inputRef: React.Ref<HTMLInputElement>;
}

const Input = forwardRef<HTMLInputElement, ReactRef>((props, inputRef) => {
  const { inputValue, setValue } = useTodo();

  return (
    <input
      ref={inputRef}
      className="w-full p-4 border border-blue-500 rounded-lg outline-none"
      value={inputValue}
      onChange={(e) => setValue(e.target.value)}
    />
  );
});

export default Input;
