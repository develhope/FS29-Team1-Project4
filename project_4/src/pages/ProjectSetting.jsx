import { DATA } from "../database";
import style from "../styles/ProjectSetting.module.css";
import iconModify from "../assets/icon_modify.svg";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useShowToggle } from "../hooks/useShowToggle";
import iconClose from "../assets/xmark-solid.svg";

const db = DATA;
export function ProjectSetting() {
  // Da usare nel momento in cui avremo un database
  //   const { id } = useParams();
  //   const {data, error, mutate} = useSWR(`linkDatabase/${id}`)

  // Controllo stato per i toggle
  const [toggleProject, onToggleProject] = useShowToggle();

  // Cambio classi
  const [toggleAsideHamburger, onToggleAsideHamburger] = useShowToggle();

  // Recupero User grazie a ID preso da useParams
  const id = "5";
  const user = db.find((user) => user.id.toString() === id);
  const project = user.project;
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
            <Link to="/user" className={style.link}>
              USER SETTING
            </Link>
            {/* Presentation sono i dati anagrafaci */}
            <Link to="/user/general_setting" className={style.link}>
              GENERAL SETTING
            </Link>
            {/* Tutti i progetti caricati e cioè un array dei progetti inseriti, da qui può toglierli e inserirli */}
            <Link to="/user/presentation_setting" className={style.link}>
              EXPERIENCE SETTING
            </Link>
          </div>
        </div>

        {/* Aside tutto schermo laterale dx */}
        <aside className={style.aside}>
          <div className={style.aside_sticky}>
            <Link to="/user" className={style.link}>
              USER SETTING
            </Link>

            <Link to="/user/general_setting" className={style.link}>
              GENERAL SETTING
            </Link>

            <Link to="/user/presentation_setting" className={style.link}>
              EXPERIENCE Setting
            </Link>
          </div>
        </aside>

        {/* Sezione Centrale */}
        <div className={style.content}>
          <h1 className={style.h1}>Project Setting of {user.username}!</h1>

          {/* Progetti scelti */}
          <div className={style.container_accept}>
            {project.map((project, index) => (
              <div className={style.container_accept}>
                <p key={index} className={style.p_accept}>
                  {project.name}
                </p>
                <img src={project.image} alt="" className={style.img} />
              </div>
            ))}
            <img
              src={iconModify}
              alt="Modify Icon"
              className={style.icon_change}
              name="image"
              onClick={onToggleProject}
            />
            {/* Change Esperienze */}
            {toggleProject && (
              <div className={style.container_change}>
                <input
                  type="text"
                  // onChange={handleChangeInputDescription}
                  placeholder="Aggiungi Nome Progetto"
                  className={style.input}
                />
                <button className={style.buttonSave}>Load file</button>
                <input type="file" />

                <input
                  type="text"
                  // value={inputImage}
                  placeholder="Insert Link File"
                  // onChange={handleChangeLinkImage}
                  className={style.input}
                />
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
