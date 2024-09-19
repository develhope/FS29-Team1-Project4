import style from "../styles/ServicesIT.module.css";
export function ServicesIT({ serviceSectionRef }) {
  return (
    <div className={style.container} ref={serviceSectionRef}>
      <h2>SERVICES IT</h2>
      <div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, ipsum debitis in perferendis aperiam labore reiciendis accusamus eos mollitia nostrum unde ut aspernatur quia? Cumque
          praesentium corrupti laboriosam id molestias.
        </p>
        <img src="" alt="Immagine o video del sito" />
      </div>
    </div>
  );
}
