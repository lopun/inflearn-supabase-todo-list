"use client";

import { Button } from "@material-tailwind/react";

export default function AddTodoButton() {
  return (
    <Button className="flex items-center gap-2">
      <i className="fas fa-plus" />
      <span>Add TODO</span>
    </Button>
  );
}
