import { DATA } from "../database";
import style from "../styles/ExperienceSetting.module.css";
import iconModify from "../assets/icon_modify.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { useShowToggle } from "../hooks/useShowToggle";
import iconClose from "../assets/xmark-solid.svg";
import { UserContext } from "../contexts/UserContext";
import { useUpdateUserDB } from "../hooks/useUpdateUserDB";

const db = DATA;
export function ExperienceSetting() {
  // Recupero user da localstorage e lo salvo nello State
  const { user, setUser } = useContext(UserContext);
  const { onUpdate } = useUpdateUserDB(user);
  // Costante per navigare
  const navigate = useNavigate();

  // Controllo stato per i toggle
  const [toggleExperience, onToggleExperience] = useShowToggle();

  // Cambio classi
  const [toggleAsideHamburger, onToggleAsideHamburger] = useShowToggle();

  // State add experience
  const [someExperience, setSomeExperience] = useState(user.someExperience);

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target[0].value;
    const name = e.target[0].name;

    setUser({ ...user, someExperience });
    onUpdate();
  };

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
                {exp}
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
              <form onSubmit={handleChange} className={style.container_change}>
                <input
                  type="text"
                  name="someExperience"
                  onChange={(e) =>
                    setSomeExperience((prev) => [...prev, e.target.value])
                  }
                  placeholder="Aggiungi esperienza"
                  className={style.input}
                />
                <button type="submit" className={style.buttonSave}>
                  Save
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
