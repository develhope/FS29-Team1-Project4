import { useContext, useEffect } from "react";
import { Hero } from "../components/Hero";
import { HomeContent } from "../components/HomeContent";
import { UsersContext } from "../contexts/UsersContext";

export function Home({ serviceSectionRef, professionITSectionRef }) {
  const { users, onRefresh } = useContext(UsersContext);
  useEffect(() => {
    onRefresh();
  }, []);

  return (
    <div>
      <Hero />
      <HomeContent
        serviceSectionRef={serviceSectionRef}
        professionITSectionRef={professionITSectionRef}
      />
    </div>
  );
}
