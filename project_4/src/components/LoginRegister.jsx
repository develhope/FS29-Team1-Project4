import { Link } from "react-router-dom";
import { CircleButton } from "./CircleButton";
import { RegisterPage } from "../pages/RegisterPage";

export function LoginRegister() {
  return (
    <div>
      <Link to="/register">
        <CircleButton />
      </Link>
      <Link to="/register" element={<RegisterPage />} className="dn">
        <p>Register</p>
      </Link>
    </div>
  );
}
