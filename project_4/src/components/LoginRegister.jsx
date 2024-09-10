import { Link, useNavigate } from "react-router-dom";
import { RegisterPage } from "../pages/RegisterPage";
import { useShowToggle } from "../hooks/useShowToggle";
import { useState } from "react";

export function LoginRegister() {
  const [toggle, onToggle] = useShowToggle();
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
  return (
    <div className="login_container">
      <button onClick={onToggle}>
        <img src="" alt="Login" />
      </button>
      {toggle && (
        <div>
          <form>
            <label>Username:</label>
            <input type="text" value={username} onChange={handleUsername} />
            <label>Password:</label>
            <input type="text" value={password} onChange={handlePassword} />
            <button onClick={handleGoSettingPage}>Login</button>
          </form>
          <Link to="/register" element={<RegisterPage />}>
            <p>Register</p>
          </Link>
        </div>
      )}
    </div>
  );
}
