import { Link } from "react-router-dom";
import { CircleButton } from "./CircleButton";
import { RegisterPage } from "../pages/RegisterPage";

export function LoginRegister() {
  return (
    <div>
      <CircleButton />
      <Link to="/register" element={<RegisterPage />} className="dn">
        <p>Register</p>
      </Link>
    </div>
  );
}
