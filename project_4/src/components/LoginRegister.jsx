import { Link } from "react-router-dom";
import { CircleButton } from "./CircleButton";
import { RegisterPage } from "../pages/RegisterPage";
import { useState } from "react";

export function LoginRegister() {
  const [show, setShow] = useState(false);

  function handleShowLogin() {
    show ? setShow(false) : setShow(true);
  }

  return (
    <div>
      <button onClick={handleShowLogin}>
        <img src="" alt="Login" />
      </button>
      {show && (
        <div>
          <form>
            <label>Username:</label>
            <input type="text" /*value={} onChange={}*/ />
            <label>Password:</label>
            <input type="text" /*value={} onChange={}*/ />
            <button>Login</button>
          </form>
          <Link to="/register" element={<RegisterPage />}>
            <p>Register</p>
          </Link>
        </div>
      )}
    </div>
  );
}
