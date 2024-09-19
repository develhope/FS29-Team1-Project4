import customSearch from "../styles/SearchPage.module.css";
import { AsideSearchPage } from "../components/AsideSearchPage";
import { ProfSearchPage } from "../components/ProfSearchPage";

export function SearchPage() {
  return (
    <div className={customSearch.main}>
      <AsideSearchPage />
      <ProfSearchPage />
    </div>
  );
}

