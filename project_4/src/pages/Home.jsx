import { Hero } from "../components/Hero";
import { HomeContent } from "../components/HomeContent";

export function Home({ serviceSectionRef }) {
  return (
    <div>
      <Hero />
      <HomeContent serviceSectionRef={serviceSectionRef} />
    </div>
  );
}
