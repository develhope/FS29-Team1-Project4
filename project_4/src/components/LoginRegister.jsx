import { Link } from "react-router-dom";
import { RegisterPage } from "../pages/RegisterPage";
import { useShowToggle } from "../hooks/useShowToggle";

export function LoginRegister() {
  const { toggle, onToggle } = useShowToggle();

  return (
    <div>
      <button onClick={onToggle}>
        <img src="" alt="Login" />
      </button>
      {toggle && (
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
