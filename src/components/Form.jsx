import React from "react";
import { VscLocation } from "react-icons/vsc";

const Form = () => {
  return (
    <section className="mb-[30px]">
      <div className="container">
        <div className="flex">
          <form action="" className="form w-full ">
            <div className="bg-white grid grid-cols-1 md:grid-cols-[150px_minmax(590px,_1fr)_150px] lg:grid-cols-[225px_minmax(775px,_1fr)_145px] rounded-lg border border-gray py-4 px-4 md:px-6 lg:px-8 gap-5 lg:gap-[30px]">
              <div className="flex items-center">
                <p className="text-black font-regular text-[16px] leading-6">
                  Проверить адрес доставки
                </p>
              </div>
              <div className="flex relative">
                <input
                  type="text"
                  className="w-full py-[15px] pl-[40px] border border-gray rounded-md outline-primary"
                  placeholder="Адрес"
                />
                <div className="absolute top-3 left-2">
                  <span>
                    <VscLocation className="text-primary" fontSize={28} />
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  type="submit"
                  className="w-full py-4 lg:h-full rounded-lg bg-primary text-white text-sm font-regular outline-gray"
                >
                  Проверить
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
