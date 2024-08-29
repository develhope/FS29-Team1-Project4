import { useState } from "react";

export function Search() {
  const [search, setSearch] = useState("");

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <form action="">
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleSearch}
      />
    </form>
  );
}
