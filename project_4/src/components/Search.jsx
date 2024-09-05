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
      <select name="Category" id="Category" onClick={handleChoice}>
        <optgroup>
          <option value="category">Tutte le Categorie</option>
          <option value="category">Web Devoloper</option>
          <option value="category">Web Design</option>
          <option value="category">3D Design</option>
        </optgroup>
      </select>
      <input
        type="text"
        placeholder="Search Your Professional IT..."
        value={search}
        onClick={handleSearch}
      />
      <button onClick={handlePlaySearch}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
}
