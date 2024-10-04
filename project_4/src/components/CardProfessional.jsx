import React, { useState } from "react";
import { DATA } from "../database";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/SliderArrows.css";
import { ProfessionalSection } from "./ProfessionalSection";

export function CardProfessional() {
  const db = DATA;
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProfessional, setSelectedProfessional] = useState(null);

  const handleShowPopup = (card) => {
    setSelectedProfessional(card);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    // alert("click");
    setShowPopup(false);
    setSelectedProfessional(null);
  };

  const CustomNextArrow = ({ className, style, onClick }) => (
    <button className={`${className} custom-next`} style={{ ...style }} onClick={onClick}>
      →
    </button>
  );

  const CustomPrevArrow = ({ className, style, onClick }) => (
    <button className={`${className} custom-prev`} style={{ ...style }} onClick={onClick}>
      ←
    </button>
  );

  const settings = {
    centerMode: true,
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
        breakpoint: 1024,
        settings: {
          centerMode: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          initialSlide: 1,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          centerPadding: "20px",
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="custom-class">
      <Slider {...settings}>
        {db.map((card) => (
          <div key={card.id} className=" h-full text-[94c4f5] rounded-xl  m-2 my-shadow">
            <div className="h-36 rounded-t-xl flex justify-center items-center bg-[#94c4f5]">
              <img src={card.image} alt="Image Missing" className="w-32 h-32 rounded-full bg-white text-center object-cover" />
            </div>
            <div className="h-72 flex flex-col justify-between items-center text-center p-2 bg-[#000000]">
              <h2 className="text-2xl font-bold text-[#94c4f5]">
                <span className="text-white">Nome:</span> {card.username}
              </h2>
              <p className="h-35 w-full text-ellipsis overflow-hidden m-2 text-[#94c4f5]">
                <span className="text-white">Descrizione: </span> {card.description}
              </p>
              <p className="text-left m-2 text-[#94c4f5]">
                <span className="text-white">Linguaggi: </span>
                {card.job}
              </p>
              <button onClick={() => handleShowPopup(card)} className="bg-[#94c4f5] text-black text-lg p-2 rounded-lg">
                Scopri Di Più
              </button>
            </div>
          </div>
        ))}
      </Slider>

      {showPopup && selectedProfessional && <ProfessionalSection professional={selectedProfessional} onClose={handleClosePopup} />}
    </div>
  );
}
