import { useState } from "react";
import Style from "../styles/Hero.module.css";

const herodb = [
  {
    id: 1,
    name: "Web Developer",
    icon: "WD",
    description: `Un Web Developer si occupa della creazione e manutenzione di siti web e applicazioni web. Lavora principalmente con linguaggi di programmazione come HTML, CSS, JavaScript e framework come React o Angular. Il suo obiettivo è assicurare che i siti siano funzionali, efficienti e accessibili su vari dispositivi.`,
  },
  {
    id: 2,
    name: "3D Designer",
    icon: "3D",
    description: `Il 3D Designer è specializzato nella creazione di modelli, animazioni e render 3D. Utilizza software come Blender, 3ds Max o Maya per sviluppare contenuti visivi che possono essere utilizzati in videogiochi, film, realtà virtuale, architettura o simulazioni. La sua competenza sta nella capacità di dare vita a progetti realistici o stilizzati in tre dimensioni.`,
  },
  {
    id: 3,
    name: "Software Engineer",
    icon: "SE",
    description: `Il Software Engineer progetta e sviluppa soluzioni software complesse. Questo professionista combina capacità di programmazione avanzate (con linguaggi come Java, Python, C++) con metodologie ingegneristiche per risolvere problemi e creare sistemi software su larga scala. Si occupa dell’intero ciclo di vita del software, dalla progettazione all’implementazione e alla manutenzione.`,
  },
  {
    id: 4,
    name: "Web designer",
    icon: "WB",
    description: `Il Web Designer si concentra sull’aspetto visivo e sull’usabilità di un sito web. Utilizza strumenti di design come Adobe XD, Figma o Sketch per creare layout accattivanti e intuitivi. Oltre all’estetica, il Web Designer lavora per migliorare l'esperienza utente (UX), assicurandosi che il sito sia facile da navigare e accessibile per tutti.`,
  },
];

export function Hero() {
  const [toggle, setToggle] = useState([true, true, true, true]);

  // function handleClick(event) {
  //   const index = event.target.value;
  //   console.log(index);
  //   setToggle((prev) => [...prev, (index = !prev)]);
  // }
  // function handleInput(event) {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   const type = event.target.type;
  //   const checked = event.target.checked;

  //   setData((d) => {
  //     return {
  //       ...d,
  //       [name]: type === "checkbox" ? checked : value,
  //     };
  //   });
  // }

  return (
    <div className={Style.wrapper}>
      {herodb.map((card, index) => (
        <div className={Style.Container} key={index}>
          <input type="radio" name="slide" id={card.id} className={Style.input} defaultChecked={index === 0} />
          <label htmlFor={card.id} className={Style.card}>
            <div className={Style.row}>
              {toggle[index] && <div className={Style.icon} /*onClick={handleClick} value={index}*/>{card.name}</div>}
              <div className={Style.description}>
                <h4>{card.name}</h4>
                <p>{card.description}</p>
              </div>
            </div>
          </label>
        </div>
      ))}
    </div>
  );
}
