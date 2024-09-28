import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import nav_container from "../styles/Navbar.module.css";
import { DATA } from "../database";

const users = DATA;

export function Search() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // Filter users
  const usersFiltered = users.filter((user) =>
    user.username.toUpperCase().includes(search.toUpperCase())
  );

  // Navigate whit name
  function handlePlaySearch(e) {
    navigate("/search");
  }

  // cambiare il navigate, e capire come.
  function handleChoice(e) {
    navigate(`/${e.target.value}`);
  }
  return (
    <form className={nav_container.form}>
      <input
        type="text"
        placeholder="Search Your Professionist By Username..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="button" onClick={handlePlaySearch}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
      {search !== "" && (
        <div className={nav_container.drop_search}>
          {usersFiltered.map((user) => (
            <p key={user.id} className={nav_container.drop_search_li}>
              {user.username}
            </p>
          ))}
        </div>
      )}
    </form>
  );
}
