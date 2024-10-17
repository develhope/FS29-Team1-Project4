
import customSearch from "../styles/SearchPage.module.css";

<<<<<<< HEAD
export function ProfSearchPage() {


    return (
      <div className={customSearch.filtered}>
        <ul className={customSearch.ul}>{filter.map((card) => (
            <li key={card.id} className={customSearch.li}>
                <h2>{card.username}</h2>
                <img src={card.image}/>
                <p>{card.description}</p> 
                <div className={customSearch.program}>{card.program.map((programs) => (
                    <div key={programs.id} className={customSearch.program_content}>
                        <p>{programs.name}</p>
                        <img src={programs.icon} />
                    </div>
))}
</div>
            </li>
=======
export function ProfSearchPage({ filtered }) {
  return (
    <div className={customSearch.filtered}>
      <ul className={customSearch.ul}>
        {filtered.map((card) => (
          <li key={card.id} className={customSearch.li}>
            <h2>{card.username}</h2>
            <img src={card.image} />
            <p>{card.description}</p>
            <div className={customSearch.program}>
              {card.program.map((programs, index) => (
                <div key={index} className={customSearch.program_content}>
                  <p>{programs.name}</p>
                  <img src={programs.icon} />
                </div>
              ))}
            </div>
          </li>
>>>>>>> development
        ))}
      </ul>
    </div>
  );
}
