import { Logo } from "./Logo";
import style from "../styles/Footer.module.css";
import { Privacy } from "./Privacy";
import { Copyright } from "./Copyright";
import { FollowUs } from "./FollowUs";
import { Help } from "./Help";
import { PrivacyPolicy } from "../pages/PrivacyPolicy";
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
