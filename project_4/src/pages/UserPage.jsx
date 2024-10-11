import style from "../styles/UserPage.module.css";
import iconModify from "../assets/icon_modify.svg";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { DATA } from "../database";
import { useContext, useRef, useState } from "react";
import { useShowToggle } from "../hooks/useShowToggle";
import iconClose from "../assets/xmark-solid.svg";
import { UserContext } from "../contexts/UserContext";
import { useUpdateUserDB } from "../hooks/useUpdateUserDB";

export function UserPage() {
  // Da usare nel momento in cui avremo un database
  const { user, setUser } = useContext(UserContext);

  // Costante per navigare
  const navigate = useNavigate();

  // Hook per aggiornare l'utente nel DB
  const { onUpdate } = useUpdateUserDB(user);

  // Cambio elementi
  // Controllo stato per i toggle
  const [toggle, onToggle] = useShowToggle();
  const [toggleUsername, onToggleUsername] = useShowToggle();
  const [toggleDescription, onToggleDescription] = useShowToggle();
  const [toggleProgram, onToggleProgram] = useShowToggle();
  const [toggleProject, onToggleProject] = useShowToggle();
  const [toggleExperince, onToggleExperince] = useShowToggle();
  const [toggleComments, onToggleComments] = useShowToggle();

  // Toggle per selezione programmi
  const [toggleClickProgram, setToggleClickProgram] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);

  // Cambio classi
  const [toggleAsideHamburger, onToggleAsideHamburger] = useShowToggle();

  // Cosstanti per cambiare username
  const [inputUsername, setInputUsername] = useState("");

  // Costanti per cambiare l'immagine
  const [inputImage, setInputImage] = useState("");
  const [fileImage, setFileImage] = useState();
  const [userImage, setUserImage] = useState(user.image);

  // Costanti per cambiare la descrizione
  const [inputDescription, setInputDescription] = useState("");
  const [userDescription, setUserDescription] = useState(user.description);

  // Handle Open CLick Programma scelto
  const handleShowPopup = (item) => {
    setSelectedProgram(item);
    setToggleClickProgram((p) => !p);
  };

  // Handle Username
  function handleChangeUsername(e) {
    e.preventDefault();
    setUser({ ...user, username: inputUsername });
    onUpdate();
  }

  // load file
  const fileInputRef = useRef(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Handle Change Image
  function handleChangeImage(e) {
    e.preventDefault();

    if (!inputImage) {
      setUser({ ...user, image: fileImage });
      onUpdate();
    } else {
      setUser({ ...user, image: inputImage });
      onUpdate();
    }
  }

  // Handle Description
  function handleChangeDescription(e) {
    e.preventDefault();
    setUser({ ...user, description: inputDescription });
    onUpdate();
  }

  // Filtraggio project tra visibili e non
  // const projectVisible = user.project.filter((project) => project.isVisible);
  // const projectNoVisible = user.project.filter((project) => !project.isVisible);

  // Filtraggio experience tra visibili e non
  const experienceVisible = user.someExperience.filter(
    (experience) => experience.isVisible
  );
  const experienceNoVisible = user.someExperience.filter(
    (experience) => !experience.isVisible
  );

  // Navigazione con passaggio di ID
  function handleNavigateGeneral() {
    navigate(`/user/general_setting/${user.id}`);
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

        {/* Section Centrale */}
        <ul className={style.content}>
          <li className={style.li}>
            <div className={style.container_accept}>
              <h1 className={style.h1}>Welcome back, {user.username}!</h1>
              <img
                src={iconModify}
                alt="Modify Icon"
                className={style.icon_change}
                name="image"
                onClick={onToggleUsername}
              />
            </div>
            {/* Change username */}
            {toggleUsername && (
              <div className={style.container_change}>
                <h3 className={style.h3}>Change Username</h3>
                <input
                  type="text"
                  onChange={(e) => setInputUsername(e.target.value)}
                  placeholder={user.username}
                  className={style.input}
                ></input>
                <button
                  onClick={handleChangeUsername}
                  className={style.buttonSave}
                >
                  Save
                </button>
              </div>
            )}
          </li>

          {/* Immagine Visibili */}
          <li className={style.li}>
            <div className={style.container_accept}>
              <img
                src={user.image}
                alt="Immagine di profilo"
                className={style.img}
              />
              <img
                src={iconModify}
                alt="Modify Icon"
                className={style.icon_change}
                name="image"
                onClick={onToggle}
              />
            </div>

            {/* Change image */}
            {toggle && (
              <div className={style.container_change}>
                <h3 className={style.h3}>Change Image</h3>
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
                  value={inputImage}
                  placeholder="Insert Link File"
                  onChange={(e) => setInputImage(e.target.value)}
                  className={style.input}
                />
                <button
                  type="button"
                  onClick={handleChangeImage}
                  className={style.buttonSave}
                >
                  Save
                </button>
              </div>
            )}
          </li>

          {/* Descrizioni Visibili */}
          <li className={style.li}>
            <div className={style.container_accept}>
              <p className={style.description}>{user.description}</p>
              <img
                src={iconModify}
                alt="Modify Icon"
                className={style.icon_change}
                name="image"
                onClick={onToggleDescription}
              />
            </div>

            {/* Change Description */}
            {toggleDescription && (
              <div className={style.container_change}>
                <h3 className={style.h3}>Change Description</h3>
                <textarea
                  onChange={(e) => setInputDescription(e.target.value)}
                  placeholder={"Insert Description"}
                  className={style.textarea}
                  rows="7"
                  maxLength="500"
                ></textarea>
                <button
                  onClick={handleChangeDescription}
                  className={style.buttonSave}
                >
                  Save
                </button>
              </div>
            )}
          </li>

          {/* Programmi Visibili */}
          <li className={style.li}>
            <div className={style.container_accept}>
              <ul className={style.ul_program}>
                {user.program.map((program, index) => (
                  <li key={index} className={style.li_program}>
                    <p className={style.p_program}>
                      {program.name.toUpperCase()}
                    </p>
                    <img
                      src={program.icon}
                      alt={`Icona ${program.name}`}
                      className={style.icon_program}
                    />
                  </li>
                ))}
              </ul>
              <img
                src={iconModify}
                alt="Modify Icon"
                className={style.icon_change}
                name="image"
                onClick={onToggleProgram}
              />
            </div>

            {/* Change Program */}
            {toggleProgram && (
              <div className={style.container_change}>
                <h3 className={style.h3}>Change Program</h3>
                <ul className={style.ul_change}>
                  {user.program.map((program, index) => (
                    <li
                      key={index}
                      onClick={() => handleShowPopup(program)}
                      className={
                        toggleClickProgram
                          ? style.li_change_click
                          : style.li_change
                      }
                    >
                      <p className={style.p_change}>
                        {program.name.toUpperCase()}
                      </p>
                      <img
                        src={program.icon}
                        alt={`Icona ${program.name}`}
                        className={style.icon_change_program}
                      />
                    </li>
                  ))}
                </ul>
                <button
                  onClick={handleChangeDescription}
                  className={style.buttonSave}
                >
                  Save
                </button>
              </div>
            )}
          </li>

          {/* Progetti Visibili */}
          <li className={style.li}>
            <div className={style.container_accept}>
              <ul className={style.ul_program}>
                {/* Map progetti accettati */}
                {user.project.map((project, index) => (
                  <li key={index} className={style.li_change}>
                    <p className={style.p_change}>
                      {project.name.toUpperCase()}
                    </p>
                    <img
                      src={project.image}
                      alt=""
                      className={style.icon_project}
                    />
                  </li>
                ))}
              </ul>
              <img
                src={iconModify}
                alt="Modify Icon"
                className={style.icon_change}
                name="image"
                onClick={onToggleProject}
              />
            </div>

            {/* Change project */}
            {toggleProject && (
              // map progetti non scelti
              <div className={style.container_change}>
                <p className={style.h3}>Project not visible</p>
                <ul className={style.ul_change}>
                  {projectNoVisible.map((project, index) => (
                    <li key={index} className={style.li_change}>
                      <p className={style.p_change}>
                        {project.name.toUpperCase()}
                      </p>
                      <img
                        src={project.image}
                        alt=""
                        className={style.icon_project_change}
                      />
                    </li>
                  ))}
                </ul>
                <button
                  onClick={handleChangeDescription}
                  className={style.buttonSave}
                >
                  Save
                </button>
              </div>
            )}
          </li>

          {/* Esperienze Visibili */}
          <li className={style.li}>
            <div className={style.container_accept}>
              <ul className={style.ul_program}>
                {user.someExperience.map((experience, index) => (
                  <li key={index} className={style.li}>
                    <p className={style.p_accept}>{experience}</p>
                  </li>
                ))}
              </ul>
              <img
                src={iconModify}
                alt="Modify Icon"
                className={style.icon_change}
                name="image"
                onClick={onToggleExperince}
              />
            </div>

            {/* Change Experience */}
            {toggleExperince && (
              <div className={style.container_change}>
                <p>Experiences not visible</p>
                <ul className={style.ul_change}>
                  {experienceNoVisible.map((experience, index) => (
                    <li key={index} className={style.li_change}>
                      <p className={style.p_accept}>{experience.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>

          {/* Review & comments */}
          <li className={style.li}>
            <div className={style.container_accept}>
              <p className={style.reviews}>Reviews: {user.reviews} / 5</p>
              <img
                src={iconModify}
                alt="Modify Icon"
                className={style.icon_change}
                name="image"
                onClick={onToggleComments}
              />
            </div>

            {/* View comments */}
            {toggleComments && (
              <div className={style.container_change}>
                <p>Comments by Company</p>
                {/*
                  Lista Commenti delle aziende che hanno lavorato
                  con questo professionista
                */}
                <ul className={style.ul_change}>
                  {user.comments.map((comment, index) => (
                    <li key={index} className={style.li_change}>
                      <p className={style.p_accept}>{comment}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
