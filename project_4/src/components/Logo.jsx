import { Link } from "react-router-dom";
import nav_container from "../styles/Navbar.module.css";

export function Logo() {
  return (
    <div className={nav_container.logo}>
      <Link to="/">
        <img src={"../src/assets/testLogo.svg"} />
      </Link>
    </div>
  );
}
