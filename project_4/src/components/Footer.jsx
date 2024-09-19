import { Logo } from "./Logo";
import style from "../styles/Footer.module.css";
import { Privacy } from "./Privacy";
import { Copyright } from "./Copyright";
import { FollowUs } from "./FollowUs";
import { Help } from "./Help";

export function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <Logo />
        <Privacy />
        <Copyright />
        <FollowUs />
        <Help />
      </div>
    </footer>
  );
}
