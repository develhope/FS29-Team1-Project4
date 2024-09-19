import { Link, useNavigate } from "react-router-dom";
import { RegisterPage } from "../pages/RegisterPage";
import { useShowToggle } from "../hooks/useShowToggle";
import { useEffect, useState } from "react";
import NavLogin from "../styles/LoginRegister.module.css";

export function LoginRegister({ toggle }) {
  // const [login, onLogin] = useShowToggle(toggle);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  /* Gestione del click fuori dal form */
  const [isFormOpen, setIsFormOpen] = useState(false);
  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);
  /* ---------------*/
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
    navigate("/register");
    onLogin(false);
  }

  return (
    <div className={NavLogin.container}>
      <button className={NavLogin.button} onClick={openForm}>
        <i className="fa-regular fa-user"></i>
      </button>
      {isFormOpen && (
        <div className={`${NavLogin.background} ${isFormOpen ? NavLogin.show : NavLogin.hide}`}>
          <form className={NavLogin.form}>
            <button onClick={closeForm} className={NavLogin.close_button}>
              X
            </button>
            <div className={NavLogin.user}>
              <label>Username:</label>
              <input type="text" value={username} onChange={handleUsername} className={NavLogin.input} />
              <label>Password:</label>
              <input type="text" value={password} onChange={handlePassword} className={NavLogin.input} />
            </div>
            <div className={NavLogin.links}>
              <button onClick={handleGoSettingPage} className={NavLogin.link_button}>
                Login
              </button>
              <span>|</span>
              <button className={NavLogin.link_button} onClick={handleClikLink}>
                Register
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
