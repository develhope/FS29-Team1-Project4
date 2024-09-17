import nav_container from "../styles/Navbar.module.css";
import { Logo } from "./Logo";
import { CategorieProIT } from "./CategorieProIT";
import { Search } from "./Search";
import { ChangeLanguage } from "./ChangeLanguage";
import { LoginRegister } from "./LoginRegister";
import { useShowToggle } from "../hooks/useShowToggle";

export function Navbar({ serviceSrollFunction }) {
  const [toggle, setToggle] = useShowToggle(false);

  function test() {
    setToggle(false);
  }

  return (
    <nav className={nav_container.nav}>
      <div className={nav_container.container}>
        <Logo />
        <CategorieProIT category="Services IT" onClick={serviceSrollFunction} />
        <CategorieProIT category="Profession IT" />

        <Search />
        <ChangeLanguage />
        {!toggle ? <LoginRegister toggle={toggle} /> : <LoginRegister />}
      </div>
    </nav>
  );
}
