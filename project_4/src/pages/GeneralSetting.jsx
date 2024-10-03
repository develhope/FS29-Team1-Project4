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

  // Recupero user da localstorage e lo salvo nello State
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem(`user ID ${id}`)) || ""
  );

  // Controllo stato per i toggle
  const [toggleSurname, onToggleSurname] = useShowToggle();
  const [toggleFirstname, onToggleFirstname] = useShowToggle();
  const [togglePrice, onTogglePrice] = useShowToggle();
  const [toggleLuogoNascita, onToggleLuogoNascita] = useShowToggle();

  // State per variabili change
  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [luogo, setLuogo] = useState("");
  const [priceMax, setPriceMax] = useState(0);
  const [priceMin, setPriceMin] = useState(0);

  // Cambio classi
  const [toggleAsideHamburger, onToggleAsideHamburger] = useShowToggle();

  // Recupero User grazie a ID preso da useParams
  // const user = db.find((u) => u.id.toString() === id);

  // Ottengo Solo i general dello user
  const general = user.general;

  // Handle Firstname
  function handleChangeFirstname(e) {
    e.preventDefault();
    user.general.firstName = firstname;
    localStorage.setItem(`user ID ${id}`, JSON.stringify(user));
    setUser(JSON.parse(localStorage.getItem(`user ID ${id}`)));
  }
  // Handle Surname
  function handleChangeSurname(e) {
    e.preventDefault();
    user.general.surName = surname;
    localStorage.setItem(`user ID ${id}`, JSON.stringify(user));
    setUser(JSON.parse(localStorage.getItem(`user ID ${id}`)));
  }
  // Handle Luogo(Residenza/Sede legale)
  function handleChangeLuogo(e) {
    e.preventDefault();
    user.isPro
      ? (user.general.luogoNascita = luogo)
      : (user.general.sedeLegale = luogo);
    localStorage.setItem(`user ID ${id}`, JSON.stringify(user));
    setUser(JSON.parse(localStorage.getItem(`user ID ${id}`)));
  }
  // Handle Price
  function handleChangePrice() {
    !!priceMax && (user.price.max = priceMax);
    !!priceMin && (user.price.min = priceMin);
    localStorage.setItem(`user ID ${id}`, JSON.stringify(user));
    setUser(JSON.parse(localStorage.getItem(`user ID ${id}`)));
  }

  //  Navigazione User setting
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
            {user.isPro ? (
              <p className={style.p_accept}>Firstname: {general.firstName}</p>
            ) : (
              <p className={style.p_accept}>Partita IVA: {general.pIVA}</p>
            )}

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
                  onChange={(e) => setFirstname(e.target.value)}
                  placeholder={user.isPro ? general.firstName : general.pIVA}
                  className={style.input}
                />
                <button
                  onClick={handleChangeFirstname}
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
                    onChange={(e) => setSurname(e.target.value)}
                    placeholder={general.surName}
                    className={style.input}
                  ></input>
                  <button
                    onClick={handleChangeSurname}
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
            {user.isPro ? (
              <p className={style.p_accept}>
                You both in {general.annoNascita}
              </p>
            ) : (
              <p className={style.p_accept}>Founded in {general.annoNascita}</p>
            )}
          </div>
          {/* Luogo di Nascita Scelto */}
          <div className={style.container_accept}>
            {user.isPro ? (
              <p className={style.p_accept}>
                You are from {general.luogoNascita}
              </p>
            ) : (
              <p className={style.p_accept}>
                The registered office is located in {general.sedeLegale}
              </p>
            )}

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
                  onChange={(e) => setLuogo(e.target.value)}
                  placeholder={
                    user.isPro ? general.luogoNascita : general.sedeLegale
                  }
                  className={style.input}
                ></input>
                <button
                  onClick={handleChangeLuogo}
                  className={style.buttonSave}
                >
                  Save
                </button>
              </div>
            )}
          </div>
          {/* Prezzi */}
          <div className={style.container_accept}>
            {user.isPro ? (
              <div>
                <p className={style.p_accept}>Price Max: {user.price.max}</p>
                <p className={style.p_accept}>Price Min: {user.price.min}</p>
              </div>
            ) : (
              <p className={style.p_accept}>
                <div>
                  <p className={style.p_accept}>Price Max: {user.price.max}</p>
                  <p className={style.p_accept}>Price Min: {user.price.min}</p>
                </div>
              </p>
            )}

            <img
              src={iconModify}
              alt="Modify Icon"
              className={style.icon_change}
              name="image"
              onClick={onTogglePrice}
            />
            {/* Change Prezzi */}
            {togglePrice && (
              <div className={style.container_change}>
                <input
                  type="text"
                  onChange={(e) => setPriceMax(e.target.value)}
                  placeholder={`Il prezzo massimo è ${user.price.max}`}
                  className={style.input}
                />
                <input
                  type="text"
                  onChange={(e) => setPriceMin(e.target.value)}
                  placeholder={`Il prezzo minimo è ${user.price.min}`}
                  className={style.input}
                />
                <button
                  onClick={handleChangePrice}
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
