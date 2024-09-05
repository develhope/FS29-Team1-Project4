import button from "../styles/Arrow.module.css";
export function ArrowLeftButton() {
  return (
    <button className={button.Arrow}>
      <i className="fa-solid fa-arrow-left"></i>
    </button>
  );
}
