import { DATA } from "../database";
import customSearch from "../styles/SearchPage.module.css";

export function ProfSearchPage() {
    const profDb = DATA;

    return (
      <div className={customSearch.filtered}>
        <ul className={customSearch.ul}>{profDb.map((card) => (
            <li key={card.id} className={customSearch.li}>
                <h2>{card.username}</h2>
                <img src={card.image}/>
                <p>{card.description}</p> 
                <div className={customSearch.program}>{card.program.map((programs) => (
                    <div key={programs.id} className={customSearch.program_content}>
                        <img src={programs.icon} />
                        <p>{programs.name}</p>
                    </div>
))}
</div>
            </li>
        ))}
        </ul>    
      </div>
  )
  }