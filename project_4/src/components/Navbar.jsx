import nav_container from "../styles/Navbar.module.css";
import { Logo } from "./Logo";
import { CategorieProIT } from "./CategorieProIT";
import { Search } from "./Search";
import { ChangeLanguage } from "./ChangeLanguage";
import { LoginRegister } from "./LoginRegister";
import { Link } from "react-router-dom";
import { SearchPage } from "../pages/SearchPage";

export function Navbar() {
  return (
    <nav className={nav_container.nav}>
      <Logo />
      <CategorieProIT category="WEB DEVELOPER" />
      <CategorieProIT category="WEB DESIGN" />

      <Search />
      <ChangeLanguage />
      <Link to="/register">
        <LoginRegister />
      </Link>
    </nav>
  );
}
