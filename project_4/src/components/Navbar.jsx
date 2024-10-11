import nav_container from "../styles/Navbar.module.css";
import { Logo } from "./Logo";
import { CategorieProIT } from "./CategorieProIT";
import { Search } from "./Search";
import { ChangeLanguage } from "./ChangeLanguage";
import { LoginRegister } from "./LoginRegister";
import { useNavigate } from "react-router-dom";

export function Navbar({ serviceScrollFunction, professionScrollFunction }) {
  const handleServicesIt = () => {
    serviceScrollFunction();
  };
  const handleProfessionIt = () => {
    professionScrollFunction();
  };

  return (
    <nav className={nav_container.nav}>
      <div className={nav_container.container}>
        <Logo />
        <CategorieProIT category="Services IT" onClick={handleServicesIt} />

        <CategorieProIT category="Profession IT" onClick={handleProfessionIt} />

        <Search />
        {/* <ChangeLanguage /> */}
        <LoginRegister />
      </div>
    </nav>
  );
}
