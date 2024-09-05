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
  const [inputImage, setInputImage] = useState("");
  const { toggle, onToggle } = useShowToggle();

  const id = "1";
  const user = users.find((user) => user.id.toString() === id);
  const [userImage, setUserImage] = useState(user.image);

  function handleChangeLinkImage(e) {
    setInputImage(e.target.value);
  }

  function handleChangeImage(e) {
    e.preventDefault();
    setUserImage(inputImage);
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
          <button onClick={onToggle}>Change Image</button>
          {toggle && (
            <div>
              <button>Load File</button>
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
          {user.description}
          <br />
          <button onClick={onToggle}>Change Description</button>
        </li>
        <li>
          <ul>
            {user.program.map((program, index) => (
              <li key={index}>{program}</li>
            ))}
          </ul>
          <button onClick={onToggle}>Change Program</button>
        </li>
        <li>
          <ul>
            {user.project.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
          <button onClick={onToggle}>Change Project</button>
        </li>
        <li>
          <ul>
            {user.someExperience.map((experience, index) => (
              <li key={index}>{experience}</li>
            ))}
          </ul>
          <button onClick={onToggle}>Change Some Experience</button>
        </li>
        <li>
          Reviews
          <br />
          Comment
          <br />
          <button onClick={onToggle}>View Comment</button>
        </li>
      </ul>
    </div>
  );
}
