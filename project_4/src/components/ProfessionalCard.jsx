import Section from "../styles/ProfessionalCard.module.css";
export function ProfessionalCard() {
  return (
    <div className={Section.megaWrapper}>
      <div className={Section.belowWrapper}></div>
      <div className={Section.wrapper}>
        {/* Section 1 */}
        <div className={Section.name}>
          <h3>Nome professionista</h3>

          <button className={Section.x__button}></button>
        </div>

        {/* Card  */}
        <div className={Section.card}>
          <div className={Section.professionalCard}></div>

          <div className={Section.professionalRole}>
            {/* Ruolo professionale */}
            <h3 className={Section.role}>3D DESIGNER</h3>
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
          <div>
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
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus, magnam enim perferendis excepturi vero possimus
                cupiditate blanditiis nisi sunt, officia ad pariatur quaerat
                porro doloremque culpa illum illo magni aliquam!
              </span>
            </div>
            <div>
              <h4>Costo prestazione</h4>
              <span>100$-150$</span>
            </div>
            <div>
              <h4>Luogo di lavoro - Roma </h4>
              <h5 />
              Disposto a trasferirsi-si
              <h5 />
            </div>

            {/* <div className={Section.contactLink}>Contatta</div> */}

            <div>
              <h4>Email</h4>
              <h5>39532636</h5>
            </div>
            <div>
              <h4>Numero telefonico</h4>
              <h5>sviluppatore@gmail.com</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
