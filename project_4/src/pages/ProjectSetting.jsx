import { DATA } from "../database";
import style from "../styles/ProjectSetting.module.css";
import iconModify from "../assets/icon_modify.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { useShowToggle } from "../hooks/useShowToggle";
import iconClose from "../assets/xmark-solid.svg";
import { UserContext } from "../contexts/UserContext";
import { useUpdateUserDB } from "../hooks/useUpdateUserDB";

const db = DATA;
export function ProjectSetting() {
  // Costante per navigare
  const navigate = useNavigate();

  // Controllo stato per i toggle
  const [toggleProject, onToggleProject] = useShowToggle();

  // Cambio classi
  const [toggleAsideHamburger, onToggleAsideHamburger] = useShowToggle();

  // Recupero User grazie a ID preso da useParams
  const { user, setUser } = useContext(UserContext);
  const { onUpdate } = useUpdateUserDB(user);
  const [project, setProject] = useState(user.project);
  // const [projectImg, setProjectImg] = useState();
  // const [projectName, setProjectName] = useState("");

  function handleChange(e) {
    e.preventDefault();

    const name = e.target[0].name;
    const nameValue = e.target[0].value;
    const image = e.target[2].name ? e.target[2].name : e.target[3].name;
    const imgFileValue = e.target[2].value;
    const imgLinkValue = e.target[3].value;
    setProject([
      ...project,
      {
        [name]: nameValue,
        [image]: imgLinkValue ? imgLinkValue : imgFileValue,
      },
    ]);
    setUser({ ...user, project });
    onUpdate();
  }

  // load file
  const fileInputRef = useRef(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  // Navigazione con passagio id
  // User setting
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

            <button onClick={handleNavigateExperience} className={style.link}>
              Experience SETTING
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
        </aside>

        {/* Sezione Centrale */}
        <div className={style.content}>
          <h1 className={style.h1}>Project Setting of {user.username}!</h1>

          {/* Progetti scelti */}
          <div className={style.container_accept}>
            {project.map((project, index) => (
              <div key={index} className={style.container_accept}>
                <p className={style.p_accept}>{project.name}</p>
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
              <form onSubmit={handleChange} className={style.container_change}>
                <input
                  type="text"
                  name="name"
                  placeholder="Aggiungi Nome Progetto"
                  className={style.input}
                />
                <div>
                  <button onClick={handleClick} className={style.buttonSave}>
                    Load file
                  </button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={(e) => {
                      const file = e.target.files[0];

                      setFileImage(file);
                      console.log(fileImage);
                    }}
                    className="hidden"
                  />
                </div>

                <input
                  type="text"
                  name="image"
                  placeholder="Insert Link File"
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
