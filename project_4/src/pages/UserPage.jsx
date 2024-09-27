import style from "../styles/UserPage.module.css";
import iconModify from "../assets/icon_modify.svg";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { DATA } from "../database";
import { useContext, useState } from "react";
import { useShowToggle } from "../hooks/useShowToggle";
import iconClose from "../assets/xmark-solid.svg";

// Database fittizio
const users = DATA;

export function UserPage() {
  // Da usare nel momento in cui avremo un database
  const { id } = useParams();
  //   const {data, error, mutate} = useSWR(`linkDatabase/${id}`)

  // Recupero lo user usando il context
  // const user = useContext(UserContext);

  // Costante per navigare
  const navigate = useNavigate();

  // Cambio elementi
  // Controllo stato per i toggle
  const [toggle, onToggle] = useShowToggle();
  const [toggleUsername, onToggleUsername] = useShowToggle();
  const [toggleDescription, onToggleDescription] = useShowToggle();
  const [toggleProgram, onToggleProgram] = useShowToggle();
  const [toggleProject, onToggleProject] = useShowToggle();
  const [toggleExperince, onToggleExperince] = useShowToggle();
  const [toggleComments, onToggleComments] = useShowToggle();

  // Cambio classi
  const [toggleAsideHamburger, onToggleAsideHamburger] = useShowToggle();

  // Recupero User grazie a ID preso da useParams
  const user = users.find((user) => user.id.toString() === id);

  // Costanti per cambiare l'immagine
  const [inputImage, setInputImage] = useState("");
  const [userImage, setUserImage] = useState(user.image);

  // Costanti per cambiare la descrizione
  const [inputDescription, setInputDescription] = useState("");
  const [userDescription, setUserDescription] = useState(user.description);

  // Handle Username
  function handleChangeUsername(e) {
    e.preventDefault();
    setUser(inputDescription);
  }

  // Handle Image
  function handleChangeLinkImage(e) {
    setInputImage(e.target.value);
  }

  function handleChangeImage(e) {
    e.preventDefault();
    setUserImage(inputImage);
  }

  // Handle Description
  function handleChangeInputDescription(e) {
    setInputDescription(e.target.value);
  }

  function handleChangeDescription(e) {
    e.preventDefault();
    setUserDescription(inputDescription);
  }

  // Navigazione con passaggio di ID
  function handleNavigate() {
    console.log(user.id);

    // navigate(`/user/general_setting/${user.id}`);
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
            {/* Presentation sono i dati anagrafaci */}
            <Link
              to={`/user/general_setting/${user.id}`}
              className={style.link}
            >
              GENERAL SETTING
            </Link>
            {/* Tutti i programmi e le esperienze che hai */}
            <Link to="/user/presentation_setting" className={style.link}>
              Experience SETTING
            </Link>
            {/* Tutti i progetti caricati e cioè un array dei progetti inseriti, da qui può toglierli e inserirli */}
            <Link to="/user/project_setting" className={style.link}>
              PROJECT SETTING
            </Link>
          </div>
        </div>

        {/* Aside tutto schermo laterale dx */}
        <aside className={style.aside}>
          <div className={style.aside_sticky}>
            <button onClick={handleNavigate} className={style.link}>
              General Setting
            </button>
            {/* Presentation sono i dati anagrafaci */}
            <Link to="/user/presentation_setting" className={style.link}>
              Experience Setting
            </Link>
            {/* Tutti i progetti caricati e cioè un array dei progetti inseriti, da qui può toglierli e inserirli */}
            <Link to="/user/project_setting" className={style.link}>
              Project Setting
            </Link>
          </div>
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
                <input
                  type="text"
                  onChange={handleChangeInputDescription}
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
                src={userImage}
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
                {/* Capire quale event handler usare
                import { useRef } from 'react';
                import './styles.css';
                export const FileUploader = ({handleFile}) => {
                // Create a reference to the hidden file input element
                const hiddenFileInput = useRef(null);

                // Programatically click the hidden file input element
                // when the Button component is clicked
                const handleClick = event => {
                  hiddenFileInput.current.click();
                };
                // Call a function (passed as a prop from the parent component)
                // to handle the user-selected file
                const handleChange = event => {
                  const fileUploaded = event.target.files[0];
                  handleFile(fileUploaded);
                };
                return (
                    <>
                      <button className="button-upload" onClick={handleClick}>
                        Upload a file
                      </button>
                      <input
                        type="file"
                        onChange={handleChange}
                        ref={hiddenFileInput}
                        style={{display: 'none'}} // Make the file input element invisible
                      />
                    </>
                  );
                */}
                <button className={style.buttonSave}>Load file</button>
                <input type="file" />

                <input
                  type="text"
                  value={inputImage}
                  placeholder="Insert Link File"
                  onChange={handleChangeLinkImage}
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
                <textarea
                  onChange={handleChangeInputDescription}
                  placeholder={userDescription}
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
                  <li key={index} className={style.li}>
                    {program.name.toUpperCase()}
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
                <ul className={style.ul_change}>
                  {user.program.map((program, index) => (
                    <li key={index} className={style.li_change}>
                      {program.name.toUpperCase()}
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
                    <p>{project.name.toUpperCase()}</p>
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
              // map tutti i progetti
              <div className={style.container_change}>
                <ul className={style.ul_change}>
                  {user.project.map((project, index) => (
                    <li key={index} className={style.li_change}>
                      <p>{project.name.toUpperCase()}</p>
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
                <ul className={style.ul_change}>
                  {user.someExperience.map((experience, index) => (
                    <li key={index} className={style.li_change}>
                      <p className={style.p_change}>{experience}</p>
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
                {/* Lista Commenti delle aziende che hanno lavorato con questo professionista */}
                <ul className={style.ul_change}>
                  {user.comments.map((comment, index) => (
                    <li key={index} className={style.li_change}>
                      <p className={style.p_change}>{comment}</p>
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
