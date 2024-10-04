import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import NavLogin from "../styles/LoginRegister.module.css";
import { DATA } from "../database";
import eyeIconOpen from "../assets/eyeOpen.svg";
import eyeIconClose from "../assets/eyeClose.svg";
import userIcon from "../assets/userIcon.svg";

export function LoginRegister() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [passVis, setPassVis] = useState(false);
  const formRef = useRef(null); // Riferimento al form
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

  function handleGoSettingPage() {
    // Trova l'utente nel database
    const user = DATA.find((user) => user.username.toUpperCase() === username.toUpperCase() && user.password === password);

    if (user) {
      setUser(user);
      setLoggedIn(true);
      localStorage.setItem(`user ID ${user.id}`, JSON.stringify(user));
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
        <div ref={formRef} className={`${NavLogin.background} ${isFormOpen ? NavLogin.show : NavLogin.hide}`}>
          {!loggedIn ? (
            <form className={NavLogin.form}>
              <button onClick={closeForm} className={NavLogin.close_button}>
                X
              </button>
              <div className={NavLogin.user}>
                <label>Username:</label>
                <input type="text" value={username} onChange={handleUsername} className={NavLogin.input} />
                <div className={NavLogin.label}>
                  Password:
                  <input type={passVis ? "text" : "password"} value={password} onChange={handlePassword} className={NavLogin.input_password} aria-label="Password" />
                  <button
                    className={NavLogin.input_button}
                    type="button"
                    onClick={() => {
                      setPassVis((prev) => !prev); // Toggle visibilità password
                    }}
                    aria-label={passVis ? "Nascondi password" : "Mostra password"}
                  >
                    {passVis ? <img src={eyeIconOpen} alt="Show Password" /> : <img src={eyeIconClose} alt="Hide Password" />}
                  </button>
                </div>
              </div>
              <div className={NavLogin.links}>
                <button type="button" onClick={() => (username && password ? handleGoSettingPage() : alert("Inserisci l'utente e password"))} className={NavLogin.link_button}>
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
                <h2>Welcome {user.username}</h2>
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
                >
                  Settings
                </button>
                <button
                  onClick={() => {
                    localStorage.clear();
                    setLoggedIn(false);
                    navigate("/");
                    setUsername("");
                    setPassword("");
                  }}
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
