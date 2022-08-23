import React from "react";
import Image from "next/image";
import { images } from "../constants";

const cards = [
  { icon: images.fire, title: "Акции", red: true },
  { icon: images.pizza, title: "Пицца" },
  { icon: images.sushi, title: "Суши" },
  { icon: images.drinks, title: "Напитки" },
  { icon: images.snacks, title: "Закуски" },
  { icon: images.combo, title: "Комбо" },
  { icon: images.deserts, title: "Десерты" },
  { icon: images.sauces, title: "Соусы" },
];
const about = [
  {
    bg: "bg-primary",
    img: images.pizzas,
    title: `3 средние пиццы от 999 рублей`,
  },
  {
    bg: "bg-red",
    img: images.pizzaDelivery,
    title: `Кэшбек 10% на самовывоз (доставка)`,
  },
  {
    bg: "bg-primary",
    img: images.pizzas,
    title: `3 средние пиццы от 999 рублей`,
  },
  {
    bg: "bg-red",
    img: images.pizzaDelivery,
    title: `Кэшбек 10% на самовывоз (доставка)`,
  },
];

const LinkCards = () => {
  return (
    <div className="my-5 sm:my-[30px]">
      <div className="pl-5 md:px-5 md:max-w-[1320px] mx-auto">
        <div className="w-full mb-5 sm:mb-[30px]">
          <div className="grid grid-cards gap-3 sm:gap-5 md:gap-9 lg:gap-[30px] pb-[2px] md:p-0 overflow-scroll md:overflow-auto">
            {cards.map((card, i) => (
              <div
                className="flex-shrink-1 md:mx-0 py-3 md:py-5 md:px-[30px] rounded-xl border border-gray bg-white flex items-center justify-center cursor-pointer "
                key={i}
              >
                <div className="flex flex-row sm:flex-col justify-center items-center">
                  <div className="flex items-center justify-center w-5 h-5 sm:w-[32px] sm:h-[32px]">
                    <Image
                      src={card.icon}
                      alt="icon"
                      className="w-5 h-5 sm:w-full"
                    />
                  </div>
                  <p
                    className={`ml-2 sm:ml-0 sm:mt-2 font-regular text-[14px] sm:text-[18px] leading-4 sm:leading-6 ${
                      card.red ? "text-red" : "text-black"
                    }`}
                  >
                    {card.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full">
          <div className="grid grid-cards2 md:grid-cols-4 gap-5 sm:gap-[30px] overflow-scroll md:overflow-auto">
            {about.map((card, i) => (
              <div className={`${card.bg} rounded-xl`} key={i}>
                <div className="flex items-center justify-start">
                  <Image
                    src={card.img}
                    alt="img"
                    height={290}
                    className="rounded-xl"
                  />
                </div>
                <div className="mt-[30px] p-5">
                  <p className="max-w-[240px] w-full text-[20px] leading-5 text-white font-semibold">
                    {card.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkCards;
