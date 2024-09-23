import { DATA } from "../database";
import customSearch from "../styles/SearchPage.module.css";

export function ProfSearchPage() {
  const profDb = DATA;

  return (
    <div className={customSearch.filtered}>
      <ul className={customSearch.ul}>
        {profDb.map((card) => (
          <li key={card.id} className={customSearch.li}>
            <h2>{card.username}</h2>
            <img src={card.image} />
            <p>{card.description}</p>
            <p>
              {card.program.map((program) => (
                <div>
                  <p>{program.name}</p>
                  <img src={program.icon} />
                </div>
              ))}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
