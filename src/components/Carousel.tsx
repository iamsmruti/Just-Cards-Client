import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { IoAnalytics } from "react-icons/io5";
import { GiCardRandom, GiCardPick } from "react-icons/gi";

const Caraousel = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    playsinline: true,
    arrows: false
  };

  const cardInfo = [
    {
      title: "Create, Edit & Organize",
      description:
        "Seamlessly create, refine, and structure your Flash Cards into decks to memorise better.",
      icon: <GiCardRandom className="lg:text-[300px] text-[100px] text-white" />,
    },
    {
      title: "Search Effortlessy",
      description:
        "The search functionality extends to cards, decks, and its content. The Search is now effortless.",
      icon: <GiCardPick className="lg:text-[300px] text-[100px] text-white" />,
    },
    {
      title: "Better Progress",
      description:
        "Track all your progress through the analytics and the algorithms helps to memorise the cards difficult to you.",
      icon: <IoAnalytics className="lg:text-[300px] text-[100px] text-white" />,
    },
  ];

  return (
    <div className="px-7 py-10">
      <Slider {...settings}>
        {cardInfo.map((card, index) => {
          return (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              asset={card.icon}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default Caraousel;

interface CardProps {
  title: String,
  description: String,
  asset: any
}

const Card: React.FC<CardProps> = ({ title, description, asset }) => {
  return (
    <div className="w-[100%] overflow-hidden flex items-center">
      <div className="md:h-[800px] text-white">
        <div className="md:px-20 px-10 flex flex-col justify-center h-[100%] items-center">
          {asset}
          <h3 className="lg:text-[32px] text-[24px] text-center lg:mt-[100px] mt-[20px]">{title}</h3>
          <p className="text-center mt-[15px] mb-[15px] md:mt-[0px] text-gray-300">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};