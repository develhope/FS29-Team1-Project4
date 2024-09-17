import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/SliderArrows.css";
import { DATA } from "../database";

export function ProjectProfessional({ serviceSectionRef }) {
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
    infinite: true,
    centerPadding: "50px",
    slidesToShow: 3,
    speed: 300,
    adaptiveHeight: true,
    focusOnSelect: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          centerMode: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          initialSlide: 1,
          dots: true,
          arrows: false,
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
    <div className="w-full m-auto mt-20 mb-20 " ref={serviceSectionRef}>
      <div className="max-w-7xl m-auto">
        <Slider {...settings}>
          {db.map((card) => (
            <div key={card.id} className=" text-black rounded-xl shadow-1xl shadow-lg mb-3">
              <div className="bg-slate-500 text-center">
                <h2 className="text-2xl font-bold h-10">Nome: {card.name}</h2>
              </div>
              <div className="h-72">
                <img src={card.image} alt="Image Missing" className=" bg-white text-center h-full w-full" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
