import { Image } from "./Image";
import hero from "../styles/Hero.module.css";

export function Hero() {
  return (
    <div className={hero.container}>
      <div className={hero.description}>
        <h1>Titolo Principale</h1>
        <h2>Sotto Titolo</h2>
        <p>Descrizione: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, distinctio!</p>
        <button>Scopri Di più</button>
      </div>
      <div className={hero.imgcontainer}>
        <svg className={hero.blob} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#004D99"
            d="M26.6,-40.3C33.1,-42.3,36.1,-32.4,45.8,-23.7C55.4,-15,71.8,-7.5,74.6,1.6C77.4,10.7,66.5,21.4,57.1,30.6C47.7,39.9,39.9,47.6,30.6,56.3C21.3,64.9,10.7,74.5,-2.2,78.2C-15,82,-29.9,79.9,-34.5,68.5C-39,57.1,-33.1,36.4,-37.8,23.4C-42.5,10.5,-57.7,5.2,-65.4,-4.5C-73.1,-14.1,-73.3,-28.3,-66.4,-37.4C-59.5,-46.4,-45.5,-50.5,-33.2,-45.1C-21,-39.7,-10.5,-24.9,-0.2,-24.5C10.1,-24.1,20.1,-38.2,26.6,-40.3Z"
            transform="translate(100 100)"
          />
        </svg>
        <svg className={hero.blob1} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#94C4F5"
            d="M52.2,-63.1C65.8,-62.1,73.5,-44.2,67.1,-29.9C60.7,-15.5,40,-4.6,27,0.5C13.9,5.5,8.4,4.7,5.2,13.2C1.9,21.6,1,39.3,-8,50.2C-16.9,61.2,-33.8,65.6,-42,58.7C-50.2,51.9,-49.6,33.9,-52.8,18.5C-56,3.1,-62.9,-9.8,-56.2,-14.5C-49.5,-19.1,-29.1,-15.6,-17.5,-17.2C-5.8,-18.8,-2.9,-25.7,8.2,-37C19.3,-48.3,38.7,-64.1,52.2,-63.1Z"
            transform="translate(100 100)"
          />
        </svg>
        <svg className={hero.blob2} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#6EE7BF"
            d="M5.5,-14.3C5.9,-3.8,4.3,-1.6,3.6,0.6C2.9,2.8,3.2,5.1,-0.8,12.4C-4.8,19.7,-13.1,32.1,-27.7,34C-42.4,36,-63.3,27.6,-65.7,15.5C-68.1,3.4,-51.9,-12.5,-37.8,-26.1C-23.8,-39.7,-11.9,-51,-4.7,-47.2C2.5,-43.5,5.1,-24.8,5.5,-14.3Z"
            transform="translate(100 100)"
          />
        </svg>
        <img src="" />
      </div>
    </div>
  );
}
