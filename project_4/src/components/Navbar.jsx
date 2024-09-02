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
      <ul>
        <CategorieProIT category="Home" />
        <CategorieProIT category="Services IT" />
        <CategorieProIT category="Professionals IT" />
        <CategorieProIT category="News" />
      </ul>
      <Search />
      <ChangeLanguage />
      <LoginRegister />
    </nav>
  );
}
