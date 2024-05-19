"use client";

import Todo from "./todo";

export default function TodoList() {
  return (
    <div className="w-full flex flex-col gap-4">
      <Todo />
      <Todo />
    </div>
  );
}
