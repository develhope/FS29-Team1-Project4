import style from "../styles/ProfessionIT.module.css";
export function ProfessionIT({ professionITSectionRef }) {
  return (
    <div className={style.container} ref={professionITSectionRef}>
      <div className={style.column}>
        <div className={style.cover}>
          <img src="" alt="Immagine o video del sito" className={style.cover} />
        </div>
      </div>
      <div className={style.column}>
        <h2>PROFESSION IT</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, ipsum debitis in perferendis aperiam labore reiciendis accusamus eos mollitia nostrum unde ut aspernatur quia? Cumque
          praesentium corrupti laboriosam id molestias.
        </p>
      </div>
    </div>
  );
}
