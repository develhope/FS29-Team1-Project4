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
    <div>
      <h1>Welcome back, {user.name}!</h1>
      {/* Aside tutto schermo laterale dx */}
      <aside>
        <Link to="/general_setting">General Setting</Link>|{" "}
        {/* Presentation sono i dati anagrafaci */}
        <Link to="/presentation_setting">Presentation Setting</Link>|{" "}
        {/* Tutti i progetti caricati e cioè un array dei progetti inseriti, da qui può toglierli e inserirli */}
        <Link to="/project_setting">Project Setting</Link>|{" "}
        {/* Cosa far vedere e a chi */}
        <Link to="/privacy_setting">Privacy Setting</Link>
      </aside>
      <ul>
        <li>
          <img src={userImage} alt="Immagine di profilo" />
          <button name="image" onClick={onToggle}>
            Change Image
          </button>

          {/* Change image */}
          {toggle && (
            <div>
              {/* Capire quale event handler usare */}
              <input type="file"></input>
              <br />
              <form>
                <input
                  type="text"
                  value={inputImage}
                  onChange={handleChangeLinkImage}
                />
                <button type="button" onClick={handleChangeImage}>
                  Insert Link File
                </button>
              </form>
            </div>
          )}
        </li>
        <li>
          <p>{user.description}</p>
          <br />
          <button name="description" onClick={onToggleDescription}>
            Change Description
          </button>
          {toggleDescription && (
            <div>
              <input
                type="text"
                value={userDescription}
                onChange={handleChangeInputDescription}
              />
              <button onClick={handleChangeDescription}>Save</button>
            </div>
          )}
        </li>
        <li>
          <ul>
            {user.program.map((program, index) => (
              <li key={index}>{program}</li>
            ))}
          </ul>
          <button onClick={onToggleProgram}>Change Program</button>
          {toggleProgram && (
            <div>
              <p>Program</p>
            </div>
          )}
        </li>
        <li>
          <ul>
            {user.project.map((project, index) => (
              <li key={index}>
                {project}
                {toggleProject && (
                  <div>
                    <button>X</button>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <button onClick={onToggleProject}>Change Project</button>
        </li>
        <li>
          <ul>
            {user.someExperience.map((experience, index) => (
              <li key={index}>{experience}</li>
            ))}
          </ul>
          <button onClick={onToggleExperince}>Change Some Experience</button>
          {toggleExperince && (
            <div>
              <p>Some Experience</p>
            </div>
          )}
        </li>
        <li>
          Reviews
          <br />
          <button onClick={onToggleComments}>View Comment</button>
          {toggleComments && (
            <div>
              <p>Comments</p>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}
