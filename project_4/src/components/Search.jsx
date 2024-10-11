import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import nav_container from "../styles/Navbar.module.css";
import { DATA } from "../database";
import SearchIcon from "../assets/SearchIcon.svg";
import { ProfessionalCard } from "./ProfessionalCard";

const users = DATA;

export function Search() {
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(null); // Stato per l'utente selezionato
  const [isPopupVisible, setPopupVisible] = useState(false); // Stato per gestire la visibilità del pop-up
  const [isDropdownVisible, setDropdownVisible] = useState(false); // stato per gestire la chiusura del drop down
  const dropdownRef = useRef(null); // Riferimento per il dropdown
  const navigate = useNavigate();

  // Filter users
  const usersFiltered = users
    .filter((user) =>
      user.job.some((job) => {
        const normalizedJob = job.replace(/[-\s]/g, "").toUpperCase();
        const normalizedSearch = search.replace(/[-\s]/g, "").toUpperCase();
        const regex = new RegExp(normalizedSearch.split("").join(".*"), "i");
        return regex.test(normalizedJob);
      })
    )
    .slice(0, 5);

  // utente selezionato
  function handleChoice(user) {
    setSelectedUser(user);
    setPopupVisible(true);
    setSearch("");
    setDropdownVisible(false);
  }

  // pop up
  function closePopup() {
    setPopupVisible(false);
    setSelectedUser(null);
    setSearch("");
  }

  // gestione del click esterno
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false); // Chiudi il dropdown
        setSearch(""); // resetta l'input
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  // Navigate whit name
  function handlePlaySearch(e) {
    navigate("/search");
  }

  // cambiare il navigate, e capire come.
  // function handleChoice(e) {
  //   navigate(`/${e.target.value}`);
  // }
  return (
    <>
      <form className={nav_container.form}>
        <input
          type="text"
          placeholder="Search Your Professionist By Username..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setDropdownVisible(true);
          }}
        />
        {isDropdownVisible && search !== "" && (
          <div className={nav_container.drop_search} ref={dropdownRef}>
            {usersFiltered.map((user) => (
              <div className={nav_container.drop_search_li} key={user.id} onClick={() => handleChoice(user)}>
                <h3 className={nav_container.drop_search_name}>{user.username}</h3>
                <p className={nav_container.drop_search_job}>{user.job}</p>
              </div>
            ))}
          </div>
        )}
        <div className={nav_container.button} type="button" onClick={handlePlaySearch}>
          <img src={SearchIcon} alt="" />
        </div>
      </form>
      {isPopupVisible && selectedUser && <ProfessionalCard professional={selectedUser} onClose={closePopup} />}
    </>
  );
}
