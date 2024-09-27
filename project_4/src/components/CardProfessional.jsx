import { DATA } from "../services/DatabaseTemporaneo";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/SliderArrows.css";
import { Link } from "react-router-dom";

export function CardProfessional() {
  const db = DATA;
  const CustomNextArrow = ({ className, style, onClick }) => (
    <button
      className={`${className} custom-next`} // Classe personalizzata
      style={{ ...style }}
      onClick={onClick}
    >
      →
    </button>
  );

  const CustomPrevArrow = ({ className, style, onClick }) => (
    <button
      className={`${className} custom-prev`} // Classe personalizzata
      style={{ ...style }}
      onClick={onClick}
    >
      ←
    </button>
  );

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "50px",
    slidesToShow: 4,
    speed: 300,
    adaptiveHeight: true,
    focusOnSelect: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
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
    <div className="w-full m-auto max-w-7xl">
      <div className="mt-20 mb-20">
        <Slider {...settings}>
          {db.map((card) => (
            <div key={card.id} className=" text-black rounded-xl shadow-1xl shadow-lg mb-3">
              <div className="h-36 rounded-t-xl flex justify-center items-center bg-slate-400">
                <img src={card.image} alt="Image Missing" className="w-32 h-32 rounded-full bg-white text-center object-cover" />
              </div>
              <div className="h-72 flex flex-col justify-between items-center text-center p-2">
                <h2 className="text-2xl font-bold">Nome: {card.name}</h2>
                <p className="h-35 w-full text-ellipsis overflow-hidden m-2">Descrizione: {card.description}</p>
                <p className="text-left m-2">Linguaggi: {card.job}</p>
                <Link to="/pop_up">
                  <button className="bg-slate-500 text-white text-lg p-2 rounded-lg ">Scopri Di Più</button>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
