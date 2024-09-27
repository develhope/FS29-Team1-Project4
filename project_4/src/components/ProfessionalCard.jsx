import Section from "../styles/ProfessionalCard.module.css";
import iconX from "../assets/xmark-solid.svg";

export function ProfessionalCard() {
  return (
    <div className={Section.blue_box}>
      <div className={Section.megaWrapper}>
        <div className={Section.belowWrapper}></div>
        <div className={Section.wrapper}>
          {/* Section 1 */}
          <div className={Section.name}>
            <h3>Nome professionista</h3>
            <button className={Section.x__button}>
              <img src={iconX} alt="" />
            </button>
          </div>

          {/* Card  */}
          <div className={Section.card}>
            <div className={Section.professionalCard}></div>
            <div className={Section.professionalRole}>
              {/* Ruolo professionale */}
              <h3>3D DESIGNER</h3>
              {/* Icone */}
              <div className={Section.icons}>
                <span className={Section.icon}></span>
                <span className={Section.icon}></span>
                <span className={Section.icon}></span>
              </div>
            </div>
          </div>

          <div className={Section.linksSection}>
            {/* Link di esempi */}
            <div className={Section.bottomLinks}>
              <ul className={Section.links}>
                <li>
                  <a href="">Link 1</a>
                </li>
                <li>
                  <a href="">Link 2</a>
                </li>
                <li>
                  <a href="">Link 3</a>
                </li>
                <li>
                  <a href="">Link 4</a>
                </li>
              </ul>
              <span>Recensioni</span>
            </div>

            {/* Contact link */}
            <div className={Section.right}>
              <div className={Section.description}>
                <h4>Descrizione</h4>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, magnam enim perferendis excepturi vero possimus cupiditate blanditiis nisi sunt!</span>
              </div>
              <div>
                <h4>Costo prestazione</h4>
                <span>100$-150$</span>
              </div>
              <div>
                <h4>Luogo di lavoro - Roma</h4>
              </div>
              <div>
                <h4>Email</h4>
                <span>sviluppatore@gmail.com</span>
              </div>
              <div>
                <h4>Numero telefonico</h4>
                <span>39532636</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
