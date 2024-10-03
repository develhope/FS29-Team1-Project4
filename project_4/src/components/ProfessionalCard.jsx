import Section from "../styles/ProfessionalCard.module.css";
import iconX from "../assets/xmark-solid.svg";
import { DATA } from "../database";
import { useParams } from "react-router-dom";
import { useState } from "react";

export function ProfessionalCard({ professional, onClose }) {
  // const users = DATA;
  // const [userProgram, setUserProgram] = useState([]);

  // setUserProgram(users);
  // Recupero User grazie a ID preso da useParams
  // const { id } = useParams();
  // const id = "5";
  // const user = professional;
  // console.log(professional);

  // console.log(id);

  // console.log(user);
  // console.log(users);

  // const findProgram = users.find((user) => user.program);
  // console.log(findProgram);

  return (
    <div className={Section.box}>
      <div className={Section.wrapper}>
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

        {/* Card  */}
        <div className={Section.card}>
          <div className={Section.professionalCard}>
            <img src={professional.image} alt="" />
          </div>
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
            <span className={Section.review}>{professional.reviews}</span>
            <span className={Section.comment}>
              {professional.comments + " "}
            </span>
          </div>

          {/* Contact link */}
          <div className={Section.right}>
            <div className={Section.description}>
              <h4>Descrizione</h4>
              <span>{professional.description}</span>
            </div>
            <div>
              <h4>Costo prestazione</h4>
              <span>{professional.price.max}€</span>
            </div>
            <div>
              <h4>Luogo di lavoro</h4>
              <span>{professional.luogo}</span>
            </div>
            <div>
              <h4>Email</h4>
              <span>{professional.email}</span>
            </div>
            <div>
              <h4>Numero telefonico</h4>
              <span>{/*professional.number*/}43534564564</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
