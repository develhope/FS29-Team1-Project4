import Section from "../styles/ProfessionalCard.module.css";
import iconX from "../assets/xmark-solid.svg";
import { useRef, useEffect } from "react";
export function ProfessionalCard({ professional, onClose }) {
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={Section.box}>
      <div className={Section.wrapper} ref={popupRef}>
        {/* Section 1 */}
        <div className={Section.name}>
          <h3>{professional.username}</h3>

          <img
            src={iconX}
            alt=""
            className={Section.x__button}
            onClick={onClose}
          />
        </div>
        <div className={Section.content}>
          <div className={Section.left}>
            {/* Card  */}
            <div className={Section.card}>
              <div className={Section.professionalCard}>
                <img
                  src={professional.image}
                  alt=""
                  className={Section.image}
                />
              </div>
              <div className={Section.bottomLinks}>
                <span>PROJECTS</span>
                <ul className={Section.links}>
                  {professional.project.map((project, index) => (
                    <li key={index}>{project.name}</li>
                  ))}
                </ul>
                <div className={Section.review}>
                  <span>REVIEWS</span>
                  <span>{professional.reviews}</span>
                </div>
                <div className={Section.comment}>
                  <span>COMMENTS</span>
                  <ul>
                    {professional.comments.map((comments, index) => (
                      <li key={index}>{comments}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={Section.right}>
            <div className={Section.right_content}>
              <div className={Section.professionalRole}>
                {/* Ruolo professionale */}
                <h3 className={Section.role}>
                  {professional.job.map((job) => job + " ")}
                </h3>
                {/* Icone */}
                <ul className={Section.icons}>
                  {professional.program.map((program, index) => (
                    <li key={index}>
                      <img src={program.icon} alt="" className={Section.icon} />
                    </li>
                  ))}
                </ul>
              </div>
              <div className={Section.linksSection}></div>

              {/* Contact link */}

              <div className={Section.description}>
                <h4>DESCRIZIONE</h4>
                <span>{professional.description}</span>
              </div>
              <div>
                <h4>COSTO PRESTAZIONE</h4>
                <span>
                  {professional.price.min}€-{professional.price.max}€
                </span>
              </div>
              <div>
                <h4>LUOGO DI LAVORO</h4>
                <span>{professional.luogo.toUpperCase()}</span>
              </div>
              <h4>CONTACT</h4>
              <ul className={Section.contacts}>
                {professional.contact.map((contact, index) => (
                  <li key={index}>
                    {contact.tipo.toUpperCase()}
                    <br />
                    {contact.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
