import nav_container from "../styles/Navbar.module.css";
import { Logo } from "./Logo";
import { CategorieProIT } from "./CategorieProIT";
import { Search } from "./Search";
import { ChangeLanguage } from "./ChangeLanguage";
import { LoginRegister } from "./LoginRegister";

export function Navbar() {
  return (
    <nav className={nav_container.nav}>
      <Logo />
      <CategorieProIT category="WEB DEVELOPER" />
      <CategorieProIT category="WEB DESIGN" />
      <CategorieProIT category="GAME DEVELOPER" />
      <CategorieProIT category="3D DESIGN" />
      <Search />
      <ChangeLanguage />
      <LoginRegister />
    </nav>
  );
}
