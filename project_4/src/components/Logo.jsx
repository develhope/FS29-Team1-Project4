import { Link } from "react-router-dom";
import nav_container from "../styles/Navbar.module.css";
import logo from "../assets/testLogo.svg";

export function Logo() {
  return (
    <div className={nav_container.logo}>
      <Link to="/">
        <img src={logo} />
      </Link>
    </div>
  );
}
