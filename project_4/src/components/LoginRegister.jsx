import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import NavLogin from "../styles/LoginRegister.module.css";
import { DATA } from "../database";
import eyeIconOpen from "../assets/eyeOpen.svg";
import eyeIconClose from "../assets/eyeClose.svg";
import userIcon from "../assets/userIcon.svg";
import { UsersContext } from "../contexts/UsersContext";
import { useFindUserID } from "../hooks/useFindUserID";
import { UserContext } from "../contexts/UserContext";

export function LoginRegister() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [passVis, setPassVis] = useState(false);
  const formRef = useRef(null); // Riferimento al form

  // Setto user a livello globale
  const { users } = useContext(UsersContext);
  const { user, setUser } = useContext(UserContext);

  // Estraggo lo user usando password e username
  const { userFind } = useFindUserID(username, password);

  // Navigazione
  const navigate = useNavigate();

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => {
    setIsFormOpen(false);
  };

  function handleUsername(e) {
    setUsername(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  // Effect per aggiornare user ogni volta che viene trovato
  useEffect(() => {
    setUser(userFind);
  }, [userFind]);

  function handleGoSettingPage() {
    if (user) {
      setLoggedIn(true);
    } else {
      const errorMsg = "Username o password errati";
      alert(errorMsg); // Mostra solo un alert con l'errore
    }
  }

  function handleClikLink() {
    closeForm();
    navigate("/register");
    setUsername("");
    setPassword("");
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
      <div className={NavLogin.button} onClick={openForm}>
        <img src={userIcon} alt="User Icon" />
      </div>
      {isFormOpen && (
        <div
          ref={formRef}
          className={`${NavLogin.background} ${
            isFormOpen ? NavLogin.show : NavLogin.hide
          }`}
        >
          {!loggedIn ? (
            <form className={NavLogin.form}>
              <button onClick={closeForm} className={NavLogin.close_button}>
                X
              </button>
              <div className={NavLogin.user}>
                <label>Username:</label>
                <input
                  type="text"
                  value={username}
                  onChange={handleUsername}
                  className={NavLogin.input}
                />
                <div className={NavLogin.label}>
                  Password:
                  <input
                    type={passVis ? "text" : "password"}
                    value={password}
                    onChange={handlePassword}
                    className={NavLogin.input_password}
                    aria-label="Password"
                  />
                  <button
                    className={NavLogin.input_button}
                    type="button"
                    onClick={() => {
                      setPassVis((prev) => !prev); // Toggle visibilità password
                    }}
                    aria-label={
                      passVis ? "Nascondi password" : "Mostra password"
                    }
                  >
                    {passVis ? (
                      <img src={eyeIconOpen} alt="Show Password" />
                    ) : (
                      <img src={eyeIconClose} alt="Hide Password" />
                    )}
                  </button>
                </div>
              </div>
              <div className={NavLogin.links}>
                <button
                  type="button"
                  onClick={() =>
                    username && password
                      ? handleGoSettingPage()
                      : alert("Inserisci l'utente e password")
                  }
                  className={NavLogin.link_button}
                >
                  Login
                </button>
                <span>|</span>
                <button
                  className={NavLogin.link_button}
                  onClick={handleClikLink}
                >
                  Register
                </button>
              </div>
            </form>
          ) : (
            <div className={NavLogin.formLogged}>
              <button onClick={closeForm} className={NavLogin.close_button1}>
                X
              </button>
              <div className={NavLogin.user}>
                <h2>Welcome {user.username}</h2>
                <div className={NavLogin.loggedin}>
                  <button
                    onClick={() => {
                      switch (true) {
                        case user.isAdmin:
                          navigate(`/admin/${user.id}`);
                          break;
                        case user.isPro:
                          navigate(`/user_setting/${user.id}`);
                          break;
                        default:
                          navigate(`/company_setting/${user.id}`);
                          break;
                      }
                    }}
                    className={NavLogin.log_btn}
                  >
                    Settings
                  </button>
                </div>
                <button
                  onClick={() => {
                    localStorage.clear();
                    setLoggedIn(false);
                    navigate("/");
                    setUsername("");
                    setPassword("");
                  }}
                  className={NavLogin.log_btn}
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
