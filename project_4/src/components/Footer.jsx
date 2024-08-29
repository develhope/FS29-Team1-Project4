import { Logo } from "./Logo";
import footer from "../styles/Footer.module.css";
import { Privacy } from "./Privacy";
import { Copyright } from "./Copyright";
import { FollowUs } from "./FollowUs";
import { Help } from "./Help";

export function Footer() {
  return (
    <footer className={footer.container}>
      <Logo />
      <Privacy />
      <Copyright />
      <FollowUs />
      <Help />
    </footer>
  );
}
