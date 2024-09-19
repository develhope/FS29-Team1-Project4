import { Hero } from "../components/Hero";
import { HomeContent } from "../components/HomeContent";

export function Home({ serviceSectionRef, professionITSectionRef }) {
  return (
    <div>
      <Hero />
      <HomeContent serviceSectionRef={serviceSectionRef} professionITSectionRef={professionITSectionRef} />
    </div>
  );
}
