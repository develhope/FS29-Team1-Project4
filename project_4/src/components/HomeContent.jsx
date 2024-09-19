import body_container from "../styles/Body.module.css";
import section_card from "../styles/SectionCard.module.css";
import { CardProfessional } from "./CardProfessional";
import { ProfessionIT } from "./ProfessionIT";
import { ProjectProfessional } from "./ProjectProfessional";
import { ServicesIT } from "./ServicesIT";

export function HomeContent({ serviceSectionRef, professionITSectionRef }) {
  return (
    <div className={body_container.container}>
      <div className={body_container.titles}>
        <ServicesIT serviceSectionRef={serviceSectionRef} />
      </div>
      <div className={body_container.titles}>
        <ProfessionIT professionITSectionRef={professionITSectionRef} />
      </div>
      <div>
        <section className={section_card.section}>
          <CardProfessional />
        </section>
      </div>
      <br />
      <div>
        <section className={section_card.section}>
          <ProjectProfessional />
        </section>
      </div>
    </div>
  );
}
