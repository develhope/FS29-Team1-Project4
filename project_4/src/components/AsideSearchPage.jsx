import customSearch from "../styles/SearchPage.module.css";

export function AsideSearchPage() {
    return (
      <div className={customSearch.aside}>
        <div className="">
          <h3> Looking for : </h3>
          <div>
            <input type="checkbox"/>
            <label htmlFor="Professional"> Professional </label>
          </div>
          <div>
            <input type="checkbox"/>
            <label htmlFor="Company"> Company </label>
          </div>
          <hr />
          <br/>
          <h3> Specialization : </h3>
          <div>
            <input type="checkbox" />
            <label htmlFor="Web Developer"> Web Developer </label>
          </div>
          <div>
            <input type="checkbox" />
            <label htmlFor="3D Designer"> 3D Designer </label>
          </div>
          <div>
            <input type="checkbox" />
            <label htmlFor="Software Engineer"> Software Engineer </label>
          </div>
          <div>
            <input type="checkbox" />
            <label htmlFor="Web Designer"> Web Designer </label>
          </div>
          <hr />
          <h3> Price </h3>
          <div>
            <input type="checkbox" />
            <label htmlFor="0-50€"> 0-50€ </label>
          </div>
          <div>
            <input type="checkbox" />
            <label htmlFor="51-100€"> 51-100€ </label>
          </div>
          <div>
            <input type="checkbox" />
            <label htmlFor="101-150€"> 101-150€ </label>
          </div>
          <div>
            <input type="checkbox" />
            <label htmlFor="Over 151€"> Over 151€ </label>
          </div>
          <hr/>
          <h3> Languages: </h3>
          <div>
            <input type="checkbox" />
            <label htmlFor="HTML5"> HTML5 </label>
          </div>
          <div>
            <input type="checkbox" />
            <label htmlFor="MySQL"> MySQL </label>
          </div>
          <div>
            <input type="checkbox" />
            <label htmlFor="Python"> Python </label>
          </div>
          <div>
            <input type="checkbox" />
            <label htmlFor="C++"> C++ </label>
          </div>
          <div>
            <input type="checkbox" />
            <label htmlFor="Javascript"> Javascript </label>
          </div>
          <hr/>
          <h3> Location : </h3>
          <div></div>
        </div>
      </div>
    );
  }