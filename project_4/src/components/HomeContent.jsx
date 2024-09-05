import body_container from "../styles/Body.module.css";
import section_card from "../styles/SectionCard.module.css";
import { ArrowLeftButton } from "./ArrowLeftButton";
import { ArrowRightButton } from "./ArrowRightButton";
import { CardProfessional } from "./CardProfessional";
import { CircleButton } from "./CircleButton";
import { Titleh2 } from "./Titleh2";

export function HomeContent() {
  return (
    <div className={body_container.container}>
      <div>
        <Titleh2 title={"Our Proffesional IT"} />
        <section className={section_card.section}>
          <CardProfessional />
        </section>
      </div>
      <br />
      <div>
        <h2>Some Examples</h2>
        <section className={section_card.section}></section>
      </div>
    </div>
  );
}
