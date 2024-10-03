import { Link, useNavigate } from "react-router-dom";
import { RegisterPage } from "../pages/RegisterPage";
import { useShowToggle } from "../hooks/useShowToggle";
import { createContext, useEffect, useRef, useState } from "react";
import NavLogin from "../styles/LoginRegister.module.css";
import { DATA } from "../database";

const users = DATA;

export function LoginRegister({ toggle }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const formRef = useRef(null); // Riferimento al form

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);
  const navigate = useNavigate();

  function handleUsername(e) {
    setUsername(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleGoSettingPage() {
    const user = users.find((user) => user.username.toUpperCase() === username.toUpperCase() && user.password === password);

    if (user) {
      // Salvo lo User trovato nel localstorage
      localStorage.setItem(`user ID ${user.id}`, JSON.stringify(user));

      // Chiude il form dopo il login
      closeForm();

      // Pulisce gli input
      setUsername("");
      setPassword("");

      // Naviga alla pagina giusta in base ai permessi
      if (user.isAdmin) {
        navigate(`/admin/${user.id}`);
      } else if (user.isPro) {
        navigate(`/user_setting/${user.id}`);
      } else {
        navigate(`/company_setting/${user.id}`);
      }
    }
  }

  function handleClikLink() {
    // Chiude il form prima di navigare alla pagina di registrazione
    closeForm();
    navigate("/register");
    setUsername("");
    setPassword("");
    onLogin(false);
  }

  // useEffect per chiudere il form quando si clicca fuori
  useEffect(() => {
    function handleClickOutside(event) {
      if (formRef.current && !formRef.current.contains(event.target)) {
        closeForm();
      }
    }

    if (isFormOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isFormOpen]);

  return (
    <div className={NavLogin.container}>
      <button className={NavLogin.button} onClick={openForm}>
        <i className="fa-regular fa-user"></i>
      </button>
      {isFormOpen && (
        <div ref={formRef} className={`${NavLogin.background} ${isFormOpen ? NavLogin.show : NavLogin.hide}`}>
          {!loggedIn ? (
            <form className={NavLogin.form}>
              <button onClick={closeForm} className={NavLogin.close_button}>
                X
              </button>
              <div className={NavLogin.user}>
                <label>Username:</label>
                <input type="text" value={username} onChange={handleUsername} className={NavLogin.input} />
                <label>Password:</label>
                <input type="password" value={password} onChange={handlePassword} className={NavLogin.input} />
              </div>
              <div className={NavLogin.links}>
                <button type="button" onClick={handleGoSettingPage} className={NavLogin.link_button}>
                  Login
                </button>
                <span>|</span>
                <button className={NavLogin.link_button} onClick={handleClikLink}>
                  Register
                </button>
              </div>
            </form>
          ) : (
            <div className={NavLogin.form}>
              <button onClick={closeForm} className={NavLogin.close_button}>
                X
              </button>
              <div className={NavLogin.user}>
                <h2>{}</h2>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
