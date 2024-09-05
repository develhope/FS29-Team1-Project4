import { DATA } from "../services/DatabaseTemporaneo";
import Slider from "react-slick";
import "../styles/Card.module.css";

export function CardProfessional() {
  const db = DATA;
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 300,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="w-11/12 m-auto mimmo">
      <div className="mt-20">
        <Slider {...settings}>
          {db.map((card) => (
            <div key={card.id} className="h-3/6 text-black rounded-xl">
              <div className="h-56 rounded-t-xl bg-slate-400 flex justify-center items-center ">
                <img src={card.image} alt="Immage Missing" className="h-40 w-40 rounded-full bg-white text-center object-cover" />
              </div>
              <div className="flex flex-col justify-center items-center gap-4 bg-sky-300">
                <h2 className="text-2xl font-bold m-2">Nome: {card.name}</h2>
                <p className="m-2">Descrizione: {card.description}</p>
                <p className="m-2">Linguaggi: {card.job}</p>
                <button className="bg-slate-500 text-white text-lg p-2 rounded-lg m-3">Scopri Di Più</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
