"use client";

import { useQuery } from "@tanstack/react-query";
import Todo from "./todo";
import { getTodos } from "actions/todoActions";
import SearchComponent from "./search-component";
import { useState } from "react";

export default function TodoList() {
  const [searchInput, setSearchInput] = useState("");

  const todosQuery = useQuery({
    queryKey: ["todos", searchInput],
    queryFn: () => getTodos({ search: searchInput }),
  });

  return (
    <>
      {/* Search Component */}
      <SearchComponent
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <div className="w-full flex flex-col gap-4">
        {todosQuery.isLoading ? (
          <div>Loading...</div>
        ) : (
          todosQuery.data?.map((todo) => <Todo key={todo.id} todo={todo} />)
        )}
      </div>
    </>
  );
}
