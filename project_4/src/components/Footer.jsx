import { Logo } from "./Logo";
import style from "../styles/Footer.module.css";
import { Help } from "./Help";
import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.links}>
          <Logo />
          <Link to="/privacy_policy">Privacy</Link>
          {/* ManageCookie */}
          <Help />
        </div>
        <div className={style.copy}>
          <p>{currentYear} My Professional It</p>
        </div>
      </div>
    </footer>
  );
}
