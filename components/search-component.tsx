"use client";

import { Input } from "@material-tailwind/react";
import { useState } from "react";

export default function SearchComponent() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <Input
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
      label="Search TODO"
      icon={<i className="fa-solid fa-magnifying-glass" />}
    />
  );
}
