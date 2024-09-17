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
    onLogin(false);
  }

  return (
    <div className={NavLogin.container}>
      <button className={NavLogin.button} onClick={openForm}>
        <i class="fa-regular fa-user"></i>
      </button>
      {isFormOpen && (
        <div className={`${NavLogin.background} ${isFormOpen ? NavLogin.show : ""}`}>
          <form className={NavLogin.form}>
            <button onClick={closeForm} className={NavLogin.close_button}>
              X
            </button>
            <div className={NavLogin.user}>
              <label>Username:</label>
              <input type="text" value={username} onChange={handleUsername} className="text-black rounded-2xl" />
              <label>Password:</label>
              <input type="text" value={password} onChange={handlePassword} className="text-black rounded-2xl" />
            </div>
            <div className={NavLogin.links}>
              <button onClick={handleGoSettingPage} className={NavLogin.link_button}>
                Login
              </button>
              <span className="text-black">|</span>
              <Link to="/register" element={<RegisterPage />} onClick={handleClikLink}>
                <button className={NavLogin.link_button}>Register</button>
              </Link>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
