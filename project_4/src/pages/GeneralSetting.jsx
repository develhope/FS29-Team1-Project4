import { DATA } from "../database";
import style from "../styles/GeneralSetting.module.css";
import iconModify from "../assets/icon_modify.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { useShowToggle } from "../hooks/useShowToggle";
import iconClose from "../assets/xmark-solid.svg";
import { UserContext } from "../contexts/UserContext";
import { UsersContext } from "../contexts/UsersContext";
import { useUpdateUserDB } from "../hooks/useUpdateUserDB";

export function GeneralSetting() {
  // useNavigate
  const navigate = useNavigate();

  // Recupero user da localstorage e lo salvo nello State
  const { user, setUser } = useContext(UserContext);
  const { onUpdate } = useUpdateUserDB(user);

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
  const [price, setPrice] = useState(user.price);

  // Cambio classi
  const [toggleAsideHamburger, onToggleAsideHamburger] = useShowToggle();

  // Ottengo Solo i general dello user
  const [general, setGeneral] = useState({
    firstName: user.general.firstName,
    surName: user.general.surName,
    annoNascita: user.general.annoNascita,
    luogoNascita: user.general.luogoNascita,
  });

  // Handle generico delle info Generali
  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target[0].name;
    setGeneral({
      ...general,
      [name]: e.target[0].value,
    });
    setUser({ ...user, general });
    onUpdate();
  };

  // Handle Price
  function handleChangePrice(e) {
    e.preventDefault();
    const max = e.target[0].name;
    const min = e.target[1].name;
    setPrice({ [max]: e.target[0].value, [min]: e.target[1].value });
    setUser({ ...user, price });
    onUpdate();
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
              <p className={style.p_accept}>
                Firstname: {user.general.firstName}
              </p>
            ) : (
              <p className={style.p_accept}>Partita IVA: {user.general.pIVA}</p>
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
              <form onSubmit={handleChange} className={style.container_change}>
                <input
                  type="text"
                  name="firstName"
                  onChange={(e) => setFirstname(e.target.value)}
                  placeholder={
                    user.isPro ? user.general.firstName : user.general.pIVA
                  }
                  className={style.input}
                />
                <button type="submit" className={style.buttonSave}>
                  Save
                </button>
              </form>
            )}
          </div>
          {/* Cognome Scelto */}
          {user.isPro && (
            <div className={style.container_accept}>
              <p className={style.p_accept}>Surname: {user.general.surName}</p>
              <img
                src={iconModify}
                alt="Modify Icon"
                className={style.icon_change}
                name="image"
                onClick={onToggleSurname}
              />

              {/* Change Surname */}
              {toggleSurname && (
                <form
                  onSubmit={handleChange}
                  className={style.container_change}
                >
                  <input
                    type="text"
                    name="surName"
                    onChange={(e) => setSurname(e.target.value)}
                    placeholder={user.general.surName}
                    className={style.input}
                  ></input>
                  <button type="submit" className={style.buttonSave}>
                    Save
                  </button>
                </form>
              )}
            </div>
          )}

          {/* Anno di Nascita Scelto */}
          <div className={style.container_accept}>
            {user.isPro ? (
              <p className={style.p_accept}>
                You both in {user.general.annoNascita}
              </p>
            ) : (
              <p className={style.p_accept}>
                Founded in {user.general.annoNascita}
              </p>
            )}
          </div>

          {/* Luogo di Residenza Scelto */}
          <div className={style.container_accept}>
            {user.isPro ? (
              <p className={style.p_accept}>
                You are from {user.general.luogoNascita}
              </p>
            ) : (
              <p className={style.p_accept}>
                The registered office is located in {user.general.sedeLegale}
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
              <form onSubmit={handleChange} className={style.container_change}>
                <input
                  type="text"
                  name={user.isPro ? "luogoNascita" : "sedeLegale"}
                  onChange={(e) => setLuogo(e.target.value)}
                  placeholder={
                    user.isPro
                      ? user.general.luogoNascita
                      : user.general.sedeLegale
                  }
                  className={style.input}
                />
                <button type="submit" className={style.buttonSave}>
                  Save
                </button>
              </form>
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
              <form
                onSubmit={handleChangePrice}
                className={style.container_change}
              >
                <input
                  type="text"
                  name="max"
                  onChange={(e) => setPriceMax(e.target.value)}
                  placeholder={`Il prezzo massimo è ${user.price.max}`}
                  className={style.input}
                />
                <input
                  type="text"
                  name="min"
                  onChange={(e) => setPriceMin(e.target.value)}
                  placeholder={`Il prezzo minimo è ${user.price.min}`}
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
