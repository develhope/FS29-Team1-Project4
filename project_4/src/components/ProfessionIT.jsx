import style from "../styles/ServicesIT.module.css";
import img from "../assets/ProfessionalIT.jpg";
export function ProfessionIT({ professionITSectionRef }) {
  return (
    <div className={`${style.container} ${style.professionITContainer}`}>
      <span className={style.separator} ref={professionITSectionRef}></span>
      <div className={style.column}>
        <div className={style.cover}>
          <img src={img} alt="Immagine o video del sito" className={style.cover} />
        </div>
      </div>
      <div className={style.column}>
        <h2 className={style.title}>PROFESSION IT</h2>
        <p>Nell'ambito dell'informatica, ci sono diverse categorie di professionisti che offrono competenze specializzate. Ecco una panoramica dei ruoli principali che puoi trovare su </p>
        <h3 className={style.subtitle}>My Professional IT</h3>
        <ul>
          <li>
            <strong>Web Developer</strong>
            <p>Un Web Developer si occupa della creazione e manutenzione di siti web e applicazioni web.</p>
          </li>
          <li>
            <strong>3D Designer</strong>
            <p>Il 3D Designer è specializzato nella creazione di modelli, animazioni e render 3D.</p>
          </li>
          <li>
            <strong>Software Engineer</strong>
            <p>Il Software Engineer progetta e sviluppa soluzioni software complesse. </p>
          </li>
          <li>
            <strong>Web Designer</strong>
            <p>Il Web Designer si concentra sull’aspetto visivo e sull’usabilità di un sito web.</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
