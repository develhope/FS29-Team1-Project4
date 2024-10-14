import { DATA } from "../database";
import style from "../styles/PermissionUser.module.css";
import iconModify from "../assets/icon_modify.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { useShowToggle } from "../hooks/useShowToggle";
import iconClose from "../assets/iconX-white.svg";
import { UsersContext } from "../contexts/UsersContext";
import { UserContext } from "../contexts/UserContext";
import { useUpdateUserDB } from "../hooks/useUpdateUserDB";
import { useRemoveUser } from "../hooks/useRemoveUser";

export function PermissionUser() {
  // Costante per navigare
  const navigate = useNavigate();

  // recupero users e user da context
  const { users, onRefresh } = useContext(UsersContext);
  const { user, setUser } = useContext(UserContext);

  // Setto lo stato dello user a cui devo modificare i permessi
  const [userFind, setUserFind] = useState();
  const { onUpdate } = useUpdateUserDB();

  // Custom hook per gestire la rimozione dello user
  const [userRemoved, setUserRemoved] = useState();
  const { onRemove } = useRemoveUser(userRemoved);
  // Controllo stato per i toggle
  const [toggleProject, onToggleProject] = useShowToggle();

  // Cambio classi
  const [toggleAsideHamburger, onToggleAsideHamburger] = useShowToggle();

  // Handle per cambiare user in admin e viceversa---------Da gestire con Form Data
  function handleChangeAdmin(e) {
    e.preventDefault();
    console.log("Inizio handle", userFind, e.target.value);
    const id = e.target.name;
    const objFind = users.find((user) => user.id.toString() === id);
    const value = e.target.value === "false" ? false : true;
    setUserFind({ ...objFind, isAdmin: !value });
    userFind.isAdmin = !value;
    console.log(value, objFind.isAdmin, userFind.isAdmin);
    setTimeout(() => {
      onRefresh();
    }, 1500);
    onUpdate(userFind);
  }

  // Handle per rimuovere user
  function handleRemoveUser(e, id) {
    e.preventDefault();
    const uRemoved = users.find((user) => user.id === id);
    setUserRemoved(uRemoved);

    onRemove();
    onRefresh();
  }

  function handleNavigateUser() {
    if (user.isAdmin) {
      navigate(`/admin/${user.id}`);
    } else if (user.isPro) {
      navigate(`/user_setting/${user.id}`);
    } else {
      navigate(`/company_setting/${user.id}`);
    }
  }
  // Experience setting
  function handleNavigateExperience() {
    navigate(`/user/presentation_setting/${user.id}`);
  }
  // General setting
  function handleNavigateGeneral() {
    navigate(`/user/general_setting/${user.id}`);
  }
  // Project setting
  function handleNavigateProject() {
    navigate(`/user/project_setting/${user.id}`);
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
              <p>SETTINGS</p>

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

            <button onClick={handleNavigateExperience} className={style.link}>
              Experience SETTING
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

          <button onClick={handleNavigateExperience} className={style.link}>
            Experience SETTING
          </button>

          <button onClick={handleNavigateProject} className={style.link}>
            PROJECT SETTING
          </button>
        </aside>

        {/* Sezione Centrale */}
        <div className={style.content}>
          <h1 className={style.h1}>Permission User of {user.username}!</h1>

          {/* Tutti gli utenti con i loro permessi e cosa sono */}
          <div className={style.container_accept}>
            <div className={style.table}>
              <p className={style.p_table}>ID</p>
              <p className={style.p_table}>User</p>
              <p className={style.p_table}>Pro</p>
              <p className={style.p_table}>Admin</p>
            </div>
            {users.map((user, index) => (
              <div key={index} className={style.table}>
                <p className={style.p_table}>{user.id}</p>
                <p className={style.p_table}>{user.username}</p>
                <div className={style.p_table}>
                  {user.isPro ? (
                    <div className={style.circle_green}></div>
                  ) : (
                    <div className={style.circle_red}></div>
                  )}
                </div>
                <div className={style.p_table}>
                  {user.isAdmin ? (
                    <div className={style.circle_green}></div>
                  ) : (
                    <div className={style.circle_red}></div>
                  )}
                </div>
              </div>
            ))}
            <img
              src={iconModify}
              alt="Modify Icon"
              className={style.icon_change}
              name="image"
              onClick={onToggleProject}
            />
            {/* Change Permission */}
            {toggleProject && (
              <div className={style.container_accept_change}>
                <h3 className={style.h3}>Change Permission Admin</h3>
                <div className={style.table}>
                  <p className={style.p_table}>ID</p>
                  <p className={style.p_table}>User</p>
                  <p className={style.p_table}>Admin</p>
                  <p className={style.p_table}>Remove</p>
                </div>
                {users.map((user, index) => (
                  <div key={index} className={style.table_change}>
                    <p className={style.p_table_change}>{user.id}</p>
                    <p className={style.p_table_change}>{user.username}</p>
                    <form className={style.p_table_change}>
                      {user.isAdmin ? (
                        <input
                          onClick={handleChangeAdmin}
                          name={user.id}
                          value={user.isAdmin}
                          className={style.circle_green_change}
                        />
                      ) : (
                        <input
                          onClick={handleChangeAdmin}
                          name={user.id}
                          value={user.isAdmin}
                          className={style.circle_red_change}
                        />
                      )}
                    </form>
                    {/* Icon Remove */}

                    <div
                      className={style.remove_change}
                      onClick={(e) => handleRemoveUser(e, user.id)}
                    >
                      <img
                        src={iconClose}
                        alt="Remove User"
                        className={style.img}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
