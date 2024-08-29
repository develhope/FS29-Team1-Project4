import { Image } from "./Image";
import hero from "../styles/Hero.module.css";

export function Hero() {
  return (
    <header>
      <div className={hero.img}>
        <Image />
      </div>
    </header>
  );
}
