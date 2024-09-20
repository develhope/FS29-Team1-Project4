import { DATA } from "../database";
import customSearch from "../styles/SearchPage.module.css";

export function ProfSearchPage() {
    const profDb = DATA;

    return (
      <div className={customSearch.filtered}>
        <ul className={customSearch.ul}>{profDb.map((card) => (
            <li key={card.id} className={customSearch.li}>
                <h2>{card.name}</h2>
                <img src={card.image}/>
                <p>{card.description}</p>
                <p>{card.program}</p>
            </li>
        ))}
        </ul>    
      </div>
  )
  }