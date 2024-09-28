import { DATA } from "../database";
import style from "../styles/GeneralSetting.module.css";
import iconModify from "../assets/icon_modify.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useShowToggle } from "../hooks/useShowToggle";
import iconClose from "../assets/xmark-solid.svg";

const db = DATA;
export function GeneralSetting() {
  // Da usare nel momento in cui avremo un database
  const { id = "5" } = useParams();
  //   const {data, error, mutate} = useSWR(`linkDatabase/${id}`)

  // useNavigate
  const navigate = useNavigate();

  // Controllo stato per i toggle
  const [toggleSurname, onToggleSurname] = useShowToggle();
  const [toggleFirstname, onToggleFirstname] = useShowToggle();
  const [toggleAnnoNascita, onToggleAnnoNascita] = useShowToggle();
  const [toggleLuogoNascita, onToggleLuogoNascita] = useShowToggle();

  // Cambio classi
  const [toggleAsideHamburger, onToggleAsideHamburger] = useShowToggle();

  // Recupero User grazie a ID preso da useParams
  const user = db.find((u) => u.id.toString() === id);

  // Ottengo Solo i general dello user
  const general = user.general;

  // Costanti per cambiare la descrizione
  // const [inputDescription, setInputDescription] = useState("");
  // const [userDescription, setUserDescription] = useState(user.description);

  // Handle Username
  // function handleChangeUsername(e) {
  //   e.preventDefault();
  //   setUser(inputDescription);
  // }

  // Handle Image
  // function handleChangeLinkImage(e) {
  //   setInputImage(e.target.value);
  // }

  // function handleChangeImage(e) {
  //   e.preventDefault();
  //   setUserImage(inputImage);
  // }

  // // Handle Description
  // function handleChangeInputDescription(e) {
  //   setInputDescription(e.target.value);
  // }

  // function handleChangeDescription(e) {
  //   e.preventDefault();
  //   setUserDescription(inputDescription);
  // }

  // Navigazione con passagio id
  // User setting
  function handleNavigateUser() {
    user.isPro
      ? navigate(`/user_setting/${user.id}`)
      : navigate(`/company_setting/${user.id}`);
  }
  // Project setting
  function handleNavigateProject() {
    navigate(`/user/project_setting/${user.id}`);
  }
  // Experience setting
  function handleNavigateExperience() {
    navigate(`/user/presentation_setting/${user.id}`);
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

          <button onClick={handleNavigateExperience} className={style.link}>
            Experience SETTING
          </button>

          <button onClick={handleNavigateProject} className={style.link}>
            PROJECT SETTING
          </button>
        </aside>

        {/* Sezione Centrale */}
        <div className={style.content}>
          <h1 className={style.h1}>General Setting of {user.username}!</h1>

          {/* Nome scelto */}
          <div className={style.container_accept}>
            <p className={style.p_accept}>Partita IVA: {general.pIVA}</p>
            <img
              src={iconModify}
              alt="Modify Icon"
              className={style.icon_change}
              name="image"
              onClick={onToggleFirstname}
            />
            {/* Change Firstname */}
            {toggleFirstname && (
              <div className={style.container_change}>
                <input
                  type="text"
                  // onChange={handleChangeInputDescription}
                  placeholder={general.pIVA}
                  className={style.input}
                ></input>
                <button
                  // onClick={handleChangeUsername}
                  className={style.buttonSave}
                >
                  Save
                </button>
              </div>
            )}
          </div>
          {/* Cognome Scelto */}
          {!!user.isPro && (
            <div className={style.container_accept}>
              <p className={style.p_accept}>Surname: {general.surName}</p>
              <img
                src={iconModify}
                alt="Modify Icon"
                className={style.icon_change}
                name="image"
                onClick={onToggleSurname}
              />

              {/* Change Surname */}
              {toggleSurname && (
                <div className={style.container_change}>
                  <input
                    type="text"
                    // onChange={handleChangeInputDescription}
                    placeholder={general.surName}
                    className={style.input}
                  ></input>
                  <button
                    // onClick={handleChangeUsername}
                    className={style.buttonSave}
                  >
                    Save
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Anno di Nascita Scelto */}
          <div className={style.container_accept}>
            <p className={style.p_accept}>You both in {general.annoNascita}</p>
            <img
              src={iconModify}
              alt="Modify Icon"
              className={style.icon_change}
              name="image"
              onClick={onToggleAnnoNascita}
            />
            {/* Change Anno di Nascita */}
            {toggleAnnoNascita && (
              <div className={style.container_change}>
                <input
                  type="text"
                  // onChange={handleChangeInputDescription}
                  placeholder={general.annoNascita}
                  className={style.input}
                ></input>
                <button
                  // onClick={handleChangeUsername}
                  className={style.buttonSave}
                >
                  Save
                </button>
              </div>
            )}
          </div>
          {/* Luogo di Nascita Scelto */}
          <div className={style.container_accept}>
            <p className={style.p_accept}>You are from {general.sedeLegale}</p>
            <img
              src={iconModify}
              alt="Modify Icon"
              className={style.icon_change}
              name="image"
              onClick={onToggleLuogoNascita}
            />
            {/* Change Luogo di nascita */}
            {toggleLuogoNascita && (
              <div className={style.container_change}>
                <input
                  type="text"
                  // onChange={handleChangeInputDescription}
                  placeholder={general.sedeLegale}
                  className={style.input}
                ></input>
                <button
                  // onClick={handleChangeUsername}
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
