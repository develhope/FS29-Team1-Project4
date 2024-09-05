import { Link, useParams } from "react-router-dom";
import { DATA } from "../database";

// Database fittizio
const users = DATA;

export function UserPage() {
  const { id } = useParams();
  //   const {data, error, mutate} = useSWR(`linkDatabase/${id}`)
  const user = users.filter((user) => user.id.toString() === id);

  return (
    <div>
      <h1>Welcome back, {user.name}!</h1>
      <aside>
        <Link to="/general_setting">General Setting</Link>
        <Link to="/presentation_setting">Presentation Setting</Link>
        <Link to="/project_setting">Project Setting</Link>
        <Link to="/privacy_setting">Privacy Setting</Link>
      </aside>
      <ul>
        <li>
          User image
          <button onChange={handle}>Change</button>
        </li>
        <li>
          Description
          <button onChange={handle}>Change</button>
        </li>
        <li>
          Program
          <button onChange={handle}>Change</button>
        </li>
        <li>
          Project
          <button onChange={handle}>Change</button>
        </li>
        <li>
          Some Experience
          <button onChange={handle}>Change</button>
        </li>
        <li>
          Reviews
          <button onChange={handle}>Change</button>
        </li>
      </ul>
    </div>
  );
}
