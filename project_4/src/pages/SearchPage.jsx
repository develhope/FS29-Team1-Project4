import customSearch from "../styles/SearchPage.module.css";

export function SearchPage() {
  return (
    <div className={customSearch.main}>
      {<AsideSearchPage />}
      {<ProffSearchPage />}
    </div>
  );
}

export function AsideSearchPage() {
  return (
    <div className={customSearch.aside}>
      <div className="">
        <div>
          <input type="checkbox" />
          <label htmlFor="Web Developer">Web Developer</label>
        </div>
        <div>
          <input type="checkbox" />
          <label htmlFor="3D Designer">3D Designer</label>
        </div>
        <div>
          <input type="checkbox" />
          <label htmlFor="Software Developer">Software Developer</label>
        </div>
      </div>
    </div>
  );
}

export function ProffSearchPage() {
  return <div className={customSearch.filtered}>Mimmo 3</div>;
}
