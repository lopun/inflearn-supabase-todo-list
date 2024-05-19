"use client";

import { Checkbox, IconButton } from "@material-tailwind/react";
import { useState } from "react";

export default function Todo() {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("");

  return (
    <div className="w-full flex items-center gap-2">
      <Checkbox
        checked={isCompleted}
        onChange={(e) => setIsCompleted(e.target.checked)}
        defaultChecked
      />
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 border-b border-b-gray-600"
      />
      {isEditing ? (
        <IconButton onClick={() => setIsEditing(false)}>
          <i className="fas fa-check" />
        </IconButton>
      ) : (
        <IconButton onClick={() => setIsEditing(true)}>
          <i className="fas fa-pen" />
        </IconButton>
      )}
      <IconButton>
        <i className="fas fa-trash" />
      </IconButton>
    </div>
  );
}
