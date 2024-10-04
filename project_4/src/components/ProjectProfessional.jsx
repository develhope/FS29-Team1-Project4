import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/SliderArrows.css";
import { DATA } from "../database";
import { filterRandomDB } from "../services/filteredRandomDB";

export function ProjectProfessional() {
  const db = DATA;
  const filterUserForExamples = filterRandomDB;
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
          centerMode: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          centerMode: true,
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
    <div className="w-full m-auto ">
      <div className="max-w-7xl m-auto">
        <Slider {...settings}>
          {filterUserForExamples.map((card) => (
            <div key={card.id} className=" bg-[#94c4f5] my-shadow mb-20 mt-20">
              <div className="text-black flex justify-center items-center text-center h-10">
                <h2 className="text-2xl font-bold">Nome: {card.username}</h2>
              </div>
              <div className="h-72 bg-black">
                <img src={card.image} alt="Image Missing" className="text-center h-full w-full" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
