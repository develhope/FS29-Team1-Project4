import { Link } from "react-router-dom";

export function RegisterPage() {
  return (
    <div>
      <Link to="/user">User Page</Link>
      <Link to="/admin">Admin Page</Link>

      <h1>Register Page</h1>
    </div>
  );
}
