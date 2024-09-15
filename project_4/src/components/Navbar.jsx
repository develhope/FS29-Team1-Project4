import nav_container from "../styles/Navbar.module.css";
import { Logo } from "./Logo";
import { CategorieProIT } from "./CategorieProIT";
import { Search } from "./Search";
import { ChangeLanguage } from "./ChangeLanguage";
import { LoginRegister } from "./LoginRegister";
import { useShowToggle } from "../hooks/useShowToggle";

export function Navbar() {
  const [toggle, setToggle] = useShowToggle(false);

  function test() {
    setToggle(false);
  }

  return (
    <nav className={nav_container.nav}>
      <Logo />
      <CategorieProIT category="Services IT" />
      <CategorieProIT category="Profession IT" />

      <Search />
      <ChangeLanguage />
      {!toggle ? <LoginRegister toggle={toggle} /> : <LoginRegister />}
    </nav>
  );
}
