"use client";

import { Checkbox, IconButton } from "@material-tailwind/react";
import { useMutation } from "@tanstack/react-query";
import { deleteTodo, updateTodo } from "actions/todoActions";
import { queryClient } from "config/ReactQueryClientProvider";
import { useState } from "react";

export default function Todo({ todo }) {
  const [isCompleted, setIsCompleted] = useState(todo.completed);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);

  const updateTodoMutation = useMutation({
    mutationFn: async () => {
      return updateTodo({ ...todo, title, completed: isCompleted });
    },
    onSuccess: () => {
      setIsEditing(false);
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });

  const deleteTodoMutation = useMutation({
    mutationFn: async () => {
      return deleteTodo(todo.id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });

  return (
    <div className="w-full flex items-center gap-2">
      <Checkbox
        checked={isCompleted}
        onChange={(e) => setIsCompleted(e.target.checked)}
      />
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 border-b border-b-gray-600"
      />
      {isEditing ? (
        <IconButton onClick={() => updateTodoMutation.mutate()}>
          <i className="fas fa-check" />
        </IconButton>
      ) : (
        <IconButton onClick={() => setIsEditing(true)}>
          <i className="fas fa-pen" />
        </IconButton>
      )}
      <IconButton onClick={() => deleteTodoMutation.mutate()}>
        <i className="fas fa-trash" />
      </IconButton>
    </div>
  );
}
