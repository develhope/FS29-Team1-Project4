import iconChange from "../assets/icon_change_language.svg";
import style from "../styles/ChangeLanguage.module.css";
export function ChangeLanguage() {
  return (
    <div className={style.mimmo}>
      <img src={iconChange} alt="Change Language" />
    </div>
  );
}
