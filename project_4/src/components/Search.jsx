import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import nav_container from "../styles/Navbar.module.css";

export function Search() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSearch(e) {
    e.stopPropagation();
    setSearch(e.target.value);
  }

  function handlePlaySearch() {
    e.stopPropagation();
    navigate("/search");
  }
  // cambiare il navigate, e capire come.
  function handleChoice(e) {
    // chiedere se va inserito
    e.stopPropagation();
    navigate(`/${e.target.value}`);
  }
  return (
    <form className={nav_container.form}>
      <select name="Category" id="Category" onChange={handleChoice}>
        <option value="all_category">All Categories</option>
        <option value="web_developer">Web Devoloper</option>
        <option value="web_design">Web Design</option>
        <option value="3D_design">3D Design</option>
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
