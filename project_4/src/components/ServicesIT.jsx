import style from "../styles/ServicesIT.module.css";
export function ServicesIT({ serviceSectionRef }) {
  return (
    <div className={style.container} ref={serviceSectionRef}>
      <div className={style.column}>
        <h2>SERVICES IT</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, ipsum debitis in perferendis aperiam labore reiciendis accusamus eos mollitia nostrum unde ut aspernatur quia? Cumque
          praesentium corrupti laboriosam id molestias.
        </p>
      </div>
      <div className={style.column}>
        <div className={style.cover}>
          <img src="" alt="Immagine o video del sito" />
        </div>
      </div>
    </div>
  );
}
