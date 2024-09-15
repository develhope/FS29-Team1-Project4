import { Link, useNavigate } from "react-router-dom";
import { RegisterPage } from "../pages/RegisterPage";
import { useShowToggle } from "../hooks/useShowToggle";
import { useEffect, useState } from "react";
import NavLogin from "../styles/LoginRegister.module.css";

export function LoginRegister({ toggle }) {
  const [login, onLogin] = useShowToggle(toggle);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleUsername(e) {
    setUsername(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleGoSettingPage() {
    /*user= users.find((user)=> user.username && user.password)*/
    navigate("/user_setting");
    // navigate(`/user_setting/${user.id}`)
  }

  function handleClikLink() {
    onLogin(false);
  }

  return (
    <div className={NavLogin.container}>
      <button className={NavLogin.button} onClick={onLogin}>
        <img src="" alt="" />
      </button>
      {login && (
        <div className={`${NavLogin.form} ${login ? NavLogin.show : ""}`}>
          <form>
            <label>Username:</label>
            <input type="text" value={username} onChange={handleUsername} />
            <label>Password:</label>
            <input type="text" value={password} onChange={handlePassword} />
            <button onClick={handleGoSettingPage}>Login</button>
          </form>
          <Link to="/register" element={<RegisterPage />} onClick={handleClikLink}>
            <p>Register</p>
          </Link>
        </div>
      )}
    </div>
  );
}
