import nav_container from "../styles/Navbar.module.css";
import { Logo } from "./Logo";
import { CategorieProIT } from "./CategorieProIT";
import { Search } from "./Search";
import { ChangeLanguage } from "./ChangeLanguage";
import { LoginRegister } from "./LoginRegister";

export function Navbar({ serviceSrollFunction, professionScrollFunction }) {
  return (
    <nav className={nav_container.nav}>
      <div className={nav_container.container}>
        <Logo />
        <CategorieProIT category="Services IT" onClick={serviceSrollFunction} />
        <CategorieProIT category="Profession IT" onClick={professionScrollFunction} />

        <Search />
        <ChangeLanguage />
        <LoginRegister />
      </div>
    </nav>
  );
}
