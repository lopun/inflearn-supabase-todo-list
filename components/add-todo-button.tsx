"use client";

import { Button } from "@material-tailwind/react";
import { useMutation } from "@tanstack/react-query";
import { createTodo } from "actions/todoActions";
import { queryClient } from "config/ReactQueryClientProvider";

export default function AddTodoButton() {
  const createTodoMutation = useMutation({
    mutationFn: createTodo,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });

  return (
    <Button
      onClick={() =>
        createTodoMutation.mutate({ title: "New Todo", completed: false })
      }
      loading={createTodoMutation.isPending}
      className="flex items-center gap-2"
    >
      <i className="fas fa-plus" />
      <span>Add TODO</span>
    </Button>
  );
}
