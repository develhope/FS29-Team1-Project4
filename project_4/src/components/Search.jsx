import { useState } from "react";

export function Search() {
  const [search, setSearch] = useState("");

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  return <input type="text" placeholder="Search" value={search} onChange={handleSearch} />;
}
