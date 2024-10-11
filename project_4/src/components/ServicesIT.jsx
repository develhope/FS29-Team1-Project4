import style from "../styles/ServicesIT.module.css";
import img from "../assets/ServicesIT.jpg";
export function ServicesIT({ serviceSectionRef }) {
  return (
    <div className={style.container}>
      <span className={style.separator} ref={serviceSectionRef}></span>
      <div className={style.column}>
        <h2 className={style.title}>SERVICES IT</h2>
        <h3 className={style.subtitle}>My Professional IT</h3>
        <p>
          è la tua piattaforma di riferimento per trovare facilmente professionisti nel settore IT. Che tu abbia bisogno di assistenza tecnica, consulenza o sviluppo di software, siamo qui per
          aiutarti a connetterti con esperti qualificati.
        </p>
        <h3 className={style.subtitle}>Come funziona?</h3>
        <ul>
          <li>
            <p>
              <strong className="text-[#94c4f5]">Cerca </strong>– Trova il professionista IT giusto per te esplorando le nostre categorie di servizi.
            </p>
          </li>
          <li>
            <p>
              <strong className="text-[#94c4f5]">Connettiti</strong> – Contatta direttamente il professionista per discutere delle tue necessità.
            </p>
          </li>
          <li>
            <p>
              <strong className="text-[#94c4f5]">Collabora</strong> – Lavora insieme al professionista per ottenere soluzioni su misura per il tuo progetto.
            </p>
          </li>
        </ul>
      </div>
      <div className={style.column}>
        <div className={style.cover}>
          <img src={img} alt="Immagine o video del sito" />
        </div>
      </div>
    </div>
  );
}
