"use client";
import React, { useState } from "react";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  console.log(searchQuery);
  return (
    <div>
      <input
        name="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="search..."
      />
    </div>
  );
};

export default Search;
