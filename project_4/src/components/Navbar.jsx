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
      <CategorieProIT category="Services IT" />
      <CategorieProIT category="Profession IT" />

      <Search />
      <ChangeLanguage />
      <LoginRegister />
    </nav>
  );
}
