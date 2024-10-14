import customSearch from "../styles/SearchPage.module.css";
import { AsideSearchPage } from "../components/AsideSearchPage";
import { ProfSearchPage } from "../components/ProfSearchPage";
import { useState } from "react";

export function SearchPage() {
  // const [filtered, setFiltered] = useState();

  // function handleFiltered(filter) {
  //   setFiltered(filter);
  // }

  return (
    <div className={customSearch.main}>
      <AsideSearchPage /* onFiltered={handleFiltered}*/ />
      <ProfSearchPage /*filtered={filtered}*/ />
    </div>
  );
}
