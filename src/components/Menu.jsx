import Image from "next/image";
import React from "react";
import { HiOutlineFilter } from "react-icons/hi";

const Menu = ({ title, filter, cards }) => {
  return (
    <section className="mb-[45px]">
      <div className="container">
        <div className="flex flex-col">
          <div className="flex items-center justify-between mb-[30px]">
            <h2 className="font-semibold text-[40px] leading-[46px]">
              {title}
            </h2>
            {filter && (
              <div className="flex items-center justify-center">
                <button className="text-black font-regular text-sm flex items-center py-[10px] px-4 bg-white border border-gray rounded-md">
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
                className="bg-white border border-gray rounded-xl h-[470px] relative"
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
                      height={300}
                      width={300}
                      className="w-full rounded-t-xl"
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
    </section>
  );
};

export default Menu;
