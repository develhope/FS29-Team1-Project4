import { DATA } from "../database";
import style from "../styles/ExperienceSetting.module.css";
import iconModify from "../assets/icon_modify.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useShowToggle } from "../hooks/useShowToggle";
import iconClose from "../assets/xmark-solid.svg";

const db = DATA;
export function ExperienceSetting() {
  // Da usare nel momento in cui avremo un database
  const { id } = useParams();
  //   const {data, error, mutate} = useSWR(`linkDatabase/${id}`)

  // Recupero user da localstorage e lo salvo nello State
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem(`user ID ${id}`)) || ""
  );

  // Costante per navigare
  const navigate = useNavigate();

  // Controllo stato per i toggle
  const [toggleExperience, onToggleExperience] = useShowToggle();

  // Cambio classi
  const [toggleAsideHamburger, onToggleAsideHamburger] = useShowToggle();

  // State add experience
  const [experience, setExperience] = useState("");

  function handleAddExperience() {
    user.someExperience.push({ name: experience, isVisible: false });
    localStorage.setItem(`user ID ${id}`, JSON.stringify(user));
    setUser(JSON.parse(localStorage.getItem(`user ID ${id}`)));
  }

  // Navigazione con passagio id
  // User setting
  function handleNavigateUser() {
    switch (true) {
      case user.isAdmin:
        navigate(`/admin/${user.id}`);
        break;
      case user.isPro:
        navigate(`/user_setting/${user.id}`);
        break;
      case !user.isPro:
        navigate(`/company_setting/${user.id}`);
        break;

      default:
        break;
    }
  }
  // Project setting
  function handleNavigateProject() {
    navigate(`/user/project_setting/${user.id}`);
  }
  // General setting
  function handleNavigateGeneral() {
    navigate(`/user/general_setting/${user.id}`);
  }
  return (
    <div className={style.container}>
      <div className={style.container_noTitle}>
        {/* Hamburger menù */}
        <div
          className={
            toggleAsideHamburger ? style.bs_none : style.hamburger_container
          }
        >
          <div
            onClick={onToggleAsideHamburger}
            className={toggleAsideHamburger ? style.dn : style.hamburger}
          >
            <div className={style.line}></div>
            <div className={style.line}></div>
            <div className={style.line}></div>
          </div>
          <div
            className={
              toggleAsideHamburger ? style.hamburger_content : style.dn
            }
          >
            <div className={style.hamburger_content_top}>
              <p className={style.p_change}>SETTINGS</p>

              <img
                className={style.icon_close}
                src={iconClose}
                alt="Close Menù"
                onClick={onToggleAsideHamburger}
              />
            </div>

            <button onClick={handleNavigateUser} className={style.link}>
              USER SETTING
            </button>

            <button onClick={handleNavigateGeneral} className={style.link}>
              GENERAL SETTING
            </button>

            <button onClick={handleNavigateProject} className={style.link}>
              PROJECT SETTING
            </button>
          </div>
        </div>

        {/* Aside tutto schermo laterale dx */}
        <aside className={style.aside}>
          <button onClick={handleNavigateUser} className={style.link}>
            USER SETTING
          </button>

          <button onClick={handleNavigateGeneral} className={style.link}>
            GENERAL SETTING
          </button>

          <button onClick={handleNavigateProject} className={style.link}>
            PROJECT SETTING
          </button>
        </aside>

        {/* Sezione Centrale */}
        <div className={style.content}>
          <h1 className={style.h1}>Experience Setting of {user.username}!</h1>

          {/* Esperienze scelte */}
          <div className={style.container_accept}>
            {user.someExperience.map((exp, index) => (
              <p key={index} className={style.p_accept}>
                {exp.name}
              </p>
            ))}
            <img
              src={iconModify}
              alt="Modify Icon"
              className={style.icon_change}
              name="image"
              onClick={onToggleExperience}
            />
            {/* Change Esperienze */}
            {toggleExperience && (
              <div className={style.container_change}>
                <input
                  type="text"
                  onChange={(e) => setExperience(e.target.value)}
                  placeholder="Aggiungi esperienza"
                  className={style.input}
                ></input>
                <button
                  onClick={handleAddExperience}
                  className={style.buttonSave}
                >
                  Save
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
