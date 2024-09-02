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
  return (
    <form>
      <select name="Category" id="Category">
        <option value="category">
          <Link to="/all_category">Tutte le Categorie</Link>
        </option>
        <option value="category">
          <Link to="/web_developer">Web Devoloper</Link>
        </option>
        <option value="category">
          <Link to="/web_design">Web Design</Link>
        </option>
        <option value="category">
          <Link to="/3D_design">3D Design</Link>
        </option>
      </select>
      <input type="text" placeholder="Search Your Professional IT..." value={search} onChange={handleSearch} />
      <button onClick={handlePlaySearch}>Go</button>
    </form>
  );
}
