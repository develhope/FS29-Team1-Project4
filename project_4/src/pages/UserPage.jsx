import style from "../styles/UserPage.module.css";
import iconModify from "../assets/icon_modify.svg";
import { Link, useParams } from "react-router-dom";
import { DATA } from "../database";
import { useState } from "react";
import { useShowToggle } from "../hooks/useShowToggle";

// Database fittizio
const users = DATA;

export function UserPage() {
  // Da usare nel momento in cui avremo un database
  //   const { id } = useParams();
  //   const {data, error, mutate} = useSWR(`linkDatabase/${id}`)

  // Controllo stato per i toggle
  const [toggle, onToggle] = useShowToggle();
  const [toggleDescription, onToggleDescription] = useShowToggle();
  const [toggleProgram, onToggleProgram] = useShowToggle();
  const [toggleProject, onToggleProject] = useShowToggle();
  const [toggleExperince, onToggleExperince] = useShowToggle();
  const [toggleComments, onToggleComments] = useShowToggle();

  // Recupero User grazie a ID preso da useParams
  const id = "1";
  const user = users.find((user) => user.id.toString() === id);

  // Costanti per cambiare l'immagine
  const [inputImage, setInputImage] = useState("");
  const [userImage, setUserImage] = useState(user.image);

  // Costanti per cambiare la descrizione
  const [inputDescription, setInputDescription] = useState("");
  const [userDescription, setUserDescription] = useState(user.description);

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

  return (
    <div className={style.container}>
      <div className={style.container_noTitle}>
        {/* Aside tutto schermo laterale dx */}
        <aside className={style.aside}>
          <Link to="/general_setting" className={style.link}>
            General Setting
          </Link>
          {/* Presentation sono i dati anagrafaci */}
          <Link to="/presentation_setting" className={style.link}>
            Presentation Setting
          </Link>
          {/* Tutti i progetti caricati e cioè un array dei progetti inseriti, da qui può toglierli e inserirli */}
          <Link to="/project_setting" className={style.link}>
            Project Setting
          </Link>
          {/* Cosa far vedere e a chi */}
          <Link to="/privacy_setting" className={style.link}>
            Privacy Setting
          </Link>
        </aside>
        <ul className={style.content}>
          <li className={style.li}>
            <h1 className={style.h1}>Welcome back, {user.name}!</h1>
          </li>
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
                  cols="100"
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
                        className={style.icon_change}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>

          <li className={style.li}>
            <div className={style.container_accept}>
              <ul className={style.ul_program}>
                {/* Map progetti accettati */}
                {user.project.map((project, index) => (
                  <li key={index} className={style.li}>
                    <a href="">{project}</a>

                    {toggleProject && (
                      <div>
                        <button>X</button>
                      </div>
                    )}
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
            {toggleProject && (
              // map tutti i progetti
              <div></div>
            )}
          </li>
          <li className={style.li}>
            <div className={style.container_accept}>
              <ul className={style.ul_program}>
                {user.someExperience.map((experience, index) => (
                  <li key={index} className={style.li}>
                    {experience}
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
            {toggleExperince && (
              <div>
                <p>Some Experience</p>
              </div>
            )}
          </li>
          <li className={style.li}>
            <div className={style.container_accept}>
              <p className={style.reviews}>Reviews</p>
              <img
                src={iconModify}
                alt="Modify Icon"
                className={style.icon_change}
                name="image"
                onClick={onToggleComments}
              />
            </div>
            {toggleComments && (
              <div className={style.container_accept}>
                {/* Lista Commenti delle aziende che hanno lavorato con questo professionista */}
                <p className={style.reviews}>Comments</p>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
