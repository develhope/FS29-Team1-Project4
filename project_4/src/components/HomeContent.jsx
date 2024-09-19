import body_container from "../styles/Body.module.css";
import section_card from "../styles/SectionCard.module.css";
import { CardProfessional } from "./CardProfessional";
import { ProfessionIT } from "./ProfessionIT";
import { ProjectProfessional } from "./ProjectProfessional";
import { ServicesIT } from "./ServicesIT";

export function HomeContent({ serviceSectionRef }) {
  return (
    <div className={body_container.container}>
      <ServicesIT />
      <ProfessionIT />
      <div>
        <h2>OUR PROFESSIONAL IT</h2>
        <section className={section_card.section}>
          <CardProfessional />
        </section>
      </div>
      <br />
      <div>
        <h2>SOME EXAMPLES</h2>
        <section className={section_card.section}>
          <ProjectProfessional serviceSectionRef={serviceSectionRef} />
        </section>
      </div>
    </div>
  );
}
