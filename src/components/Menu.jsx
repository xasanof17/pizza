import Image from "next/image";
import React, { useState } from "react";
import { HiOutlineFilter } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
import { images } from "../constants";

const generals = [
  { title: "Хит" },
  { title: "Новинка" },
  { title: "С мясом" },
  { title: "Вегетарианская" },
  { title: "С курицей" },
  { title: "Без лука" },
  { title: "С грибами" },
  { title: "С морепродуктами" },
  { title: "Барбекью" },
];
const cheese = [
  { title: "Реджанито" },
  { title: "Моцарелла" },
  { title: "Чеддер" },
  { title: "С голубой плесенью" },
  { title: "Смесь итальянских сыров" },
  { title: "Мягкий молодой сыр" },
];
const meat = [
  { title: "Пепперони" },
  { title: "Свинина" },
  { title: "Ветчина" },
  { title: "Бекон" },
  { title: "Говядина" },
  { title: "Чоризо" },
  { title: "Колбаски" },
  { title: "Куриная грудка" },
];
const components = [
  { title: "Креветка" },
  { title: "Ананасы" },
  { title: "Шампиньоны" },
  { title: "Лук" },
  { title: "Перец халапеньо" },
  { title: "Орегано" },
  { title: "Зеленый перец" },
  { title: "Томаты" },
  { title: "Чеснок" },
  { title: "Красный перец" },
  { title: "Оливки" },
  { title: "Маслины" },
  { title: "Клубника" },
  { title: "Смесь итальянских трав" },
];

const Menu = ({ title, filter, cards }) => {
  const [active, setActive] = useState(false);
  const [show, setShow] = useState(false);

  const Changes = () => {
    let links = document.querySelectorAll(".links");
    for (let i = 0; i < links.length; i++) {
      const el = links[i];
      if (el.classList.contains("active")) {
        el.classList.add("animate-pulse");
      }
    }
  };

  const AsideLink = ({ text }) => {
    const [active, setActive] = useState(false);

    return (
      <a
        onClick={() => setActive((prv) => !prv)}
        className={`links p-3 py-[10px] md:px-3 border border-gray inline-block rounded-md font-regular text-[13px] sm:text-sm ${
          active ? "bg-primary text-white active" : "bg-transparent text-black"
        }`}
      >
        {text}
      </a>
    );
  };
  const Menus = ({ title, object }) => {
    return (
      <div className="flex flex-col md:my-2">
        <h3 className="text-[#A5A5A5] font-regular text-sm mb-3">{title}</h3>
        <ul className="flex flex-wrap max-w-[550px] w-full">
          {object.map((link, i) => (
            <li key={i} className="mb-2 mr-2">
              <AsideLink text={link.title} />
            </li>
          ))}
        </ul>
      </div>
    );
  };
  return (
    <section className="mb-[45px]">
      <div className="container">
        <div className="flex flex-col">
          <div className="flex items-center justify-between mb-[30px]">
            <h2 className="font-semibold text-lg sm:text-[40px] leading-[46px]">
              {title}
            </h2>
            {filter && (
              <div className="flex items-center justify-center">
                <button
                  onClick={() => setShow((prv) => !prv)}
                  className="text-black font-regular text-sm flex items-center py-[10px] px-4 bg-white border border-gray rounded-md"
                >
                  <span className="mr-2">
                    <HiOutlineFilter fontSize={20} className="text-primary" />
                  </span>
                  <span>Фильтры</span>
                </button>
              </div>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 md:gap-4 lg:gap-[24px]">
            {cards.map((card, i) => (
              <div
                className="bg-white border border-gray rounded-xl w-full h-[470px] relative"
                key={i}
              >
                <div className="flex flex-col">
                  <div className="flex items-start lg:items-center justify-center w-full h-[300px]">
                    {card.news && (
                      <div
                        className="absolute z-[1] top-4 left-0 py-2 px-4 bg-red text-white font-regular text-sm uppercase"
                        style={{
                          borderBottomRightRadius: "6px",
                          borderTopRightRadius: "6px",
                        }}
                      >
                        {card.xit && <span>xit</span>}
                        {card.new && <span>new</span>}
                      </div>
                    )}
                    <Image
                      src={card.img}
                      alt="img"
                      className="w-full sm:w-[300px] h-[300px] rounded-t-xl"
                    />
                  </div>
                  <div className="p-5 h-[168px] flex flex-col justify-end">
                    <h3 className="mb-3 font-semibold text-sm text-black">
                      {card.title}
                    </h3>
                    <p className="mb-3 font-regular text-sm text-black">
                      {card.text}
                    </p>
                    <div className="flex items-center lg:gap-0  justify-between">
                      <button className="py-3 px-8 bg-primary rounded-md text-sm text-white font-regular">
                        Выбрать
                      </button>
                      <p className="font-semibold text-primary text-sm">
                        от <span className="my-1">{card.cost}</span> ₽
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {show && (
        <div className="fixed top-0 right-0 w-full bg-white sm:bg-inherit sm:backdrop-blur-lg h-full z-20 scroll-none overflow-y-scroll sm:overflow-y-hidden">
          <div className="lg:max-w-[520px] w-full h-full float-right bg-white pt-0 sm:pt-5 p-5 pb-3">
            <div className="sticky top-0 left-0 bg-white py-3 sm:py-0 flex items-center justify-between sm:mb-3">
              <h2 className="font-semibold text-[32px] leading-[40px]">
                Фильтры
              </h2>
              <div className="flex items-center justify-center">
                <button
                  onClick={() => setShow((prv) => !prv)}
                  className="flex items-center justify-center"
                >
                  <span>
                    <GrClose fontSize={25} className="text-[#A5A5A5]" />
                  </span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:flex flex-col pb-5 sm:pb-0">
              <Menus title={`Общее`} object={generals} />
              <Menus title={`Сыр`} object={cheese} />
              <Menus title={`Мясо`} object={meat} />
              <Menus title={`Компонент`} object={components} />
              <div className="flex items-center  border-t border-gray py-3 sm:pt-1 md:pt-4 sm:pb-0 filter-btns px-3 sm:px-0">
                <button
                  onClick={() => setActive((prv) => !prv)}
                  className="w-full mr-[10px] bg-transparent py-3 border border-primary text-sm font-regular rounded-md text-primary"
                >
                  Сбросить
                </button>
                <button
                  onClick={Changes}
                  className="w-full ml-[10px] bg-primary py-3 text-sm font-regular rounded-md text-white"
                >
                  Применить
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Menu;
