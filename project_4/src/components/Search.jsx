import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function Search() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function handlePlaySearch() {
    navigate("/search");
  }
  // cambiare il navigate, e capire come.
  function handleChoice(e) {
    navigate(`/${e.target.textContent}`);
  }
  return (
    <form>
      <select name="Category" id="Category" onChange={handleChoice}>
        <optgroup>
          <option value="category">Tutte le Categorie</option>
          <option value="category">Web Devoloper</option>
          <option value="category">Web Design</option>
          <option value="category">3D Design</option>
        </optgroup>
      </select>
      <input type="text" placeholder="Search Your Professional IT..." value={search} onChange={handleSearch} />
      <button onClick={handlePlaySearch}>Go</button>
    </form>
  );
}
