import style from "../styles/ProfessionIT.module.css";
export function ProfessionIT({ professionITSectionRef }) {
  return (
    <div className={style.container} ref={professionITSectionRef}>
      <h2>PROFESSION IT</h2>
      <div>
        <img src="" alt="Immagine o video del sito" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, ipsum debitis in perferendis aperiam labore reiciendis accusamus eos mollitia nostrum unde ut aspernatur quia? Cumque
          praesentium corrupti laboriosam id molestias.
        </p>
      </div>
    </div>
  );
}
