import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { VscLocation } from "react-icons/vsc";
import { FiUser } from "react-icons/fi";
import { BsChevronDown } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { images } from "../constants";
import { AiOutlineMenu } from "react-icons/ai";

const links = [
  { name: "Акции", href: "/" },
  { name: "Пицца", href: "/" },
  { name: "Суши", href: "/" },
  { name: "Напитки", href: "/" },
  { name: "Закуски", href: "/" },
  { name: "Комбо", href: "/" },
  { name: "Десерты", href: "/" },
  { name: "Соусы", href: "/" },
  {
    name: "Другое",
    href: "#!",
    icon: true,
    dropdown: true,
  },
];
const dropdownlinks = [
  { link: "Акции", href: "/" },
  { link: "О компании", href: "/" },
  { link: "Пользовательское соглашение", href: "/" },
  { link: "Условия гарантии", href: "/" },
  { link: "Ресторан", href: "/" },
  { link: "Контакты", href: "/" },
  { link: "Поддержка", href: "/" },
  { link: "Отследить заказ", href: "/" },
];

export default function Navbar() {
  const [dropDown, setDropDown] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <>
      <nav className="sticky top-0 left-0 z-10 w-full bg-white">
        <div className="hidden md:block py-5 border-b-2 border-gray">
          <div className="container">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="mr-1 lg:mr-5">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center">
                      <VscLocation fontSize={25} className="text-primary" />
                    </div>
                    <select
                      name=""
                      id=""
                      className="bg-inherit font-regular text-sm outline-none"
                    >
                      <option value="">Москва</option>
                      <option value="">Узбекистан</option>
                    </select>
                  </div>
                </div>
                <div className="hidden lg:block mx-1 lg:mx-5">
                  <a href="#!" className="text-sm text-black">
                    Проверить адрес
                  </a>
                </div>
                <div className="mx-1 lg:mx-5 flex">
                  <p className="font-regular text-sm text-black">
                    Среднее время доставки*:
                  </p>
                  <div className="flex ml-1 text-sm font-semibold text-black">
                    <span>00</span>:<span>24</span>:<span>19</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="mx-3 lg:mx-5">
                  <p className="font-regular text-black text-sm">
                    Время работы: с 11:00 до 23:00
                  </p>
                </div>
                <button className="mx-1 lg:mx-5 flex items-center">
                  <span className="flex items-center justify-center mr-2">
                    <FiUser fontSize={25} className="text-primary" />
                  </span>
                  <p className="text-sm text-black font-inter font-regular">
                    Войти в аккаунт
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="py-4 border-b-2 border-gray">
          <div className="container">
            <div className="flex items-center justify-between">
              <div className="flex">
                <Link href={"/"}>
                  <a className="flex items-center outline-primary">
                    <span className="flex items-center justify-center">
                      <Image src={images.logo} alt="logo" />
                    </span>
                    <span className="text-sm ml-3 text-black font-semibold">
                      Куда пицца
                    </span>
                  </a>
                </Link>
              </div>
              <div className={`flex ${dropDown ? "relative" : ""}`}>
                <ul className="hidden lg:flex items-center">
                  {links.map((link, i) => (
                    <li key={i}>
                      <Link href={link.href}>
                        <a
                          onClick={() =>
                            link.dropdown && setDropDown((prev) => !prev)
                          }
                          className={`px-4 font-regular text-sm hover:text-primary ease-out duration-150 outline-primary ${
                            link.icon && "flex items-center"
                          }`}
                        >
                          {link.name}{" "}
                          {link.icon && (
                            <span className="ml-3">
                              <BsChevronDown fontSize={17} />
                            </span>
                          )}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
                {dropDown && (
                  <div
                    onClick={(e) => console.log(e.currentTarget)}
                    className="hidden lg:block absolute top-[70px] right-[-11%] max-w-[290px] w-full bg-white border-t-[0] border border-gray rounded-xl shadow-lg p-5"
                  >
                    <div className="absolute top-[-7px] right-[47%] w-4 h-4 bg-white border border-gray rotate-45 z-[-1]" />
                    <div className="flex items-center justify-center">
                      <ul>
                        {dropdownlinks.map((link, i) => (
                          <li key={i}>
                            <Link href={link.href}>
                              <a
                                onClick={() => setDropDown((prev) => !prev)}
                                className="text-sm font-regular text-black py-2 inline-block hover:text-primary ease-out duration-150 outline-primary"
                              >
                                {link.link}
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex">
                <button className="bg-primary rounded-sm py-3 px-4 font-regular text-white text-sm hidden sm:flex items-center outline-gray">
                  <div className="flex items-center justify-center text-white">
                    <FaShoppingCart fontSize={25} className="text-white" />
                  </div>
                  <span className="ml-1">no money no honey</span>
                  <span className="mx-1">$</span>
                </button>
                <div className="smallscreen flex items-center justify-center lg:hidden ml-4">
                  <button
                    onClick={() => setActive((prev) => !prev)}
                    className="flex items-center justify-center"
                  >
                    <span>
                      <AiOutlineMenu fontSize={30} />
                    </span>
                  </button>
                </div>
              </div>
              {active && (
                <div className="fixed top-[7%] sm:top-[9%] md:top-[17%] left-0 w-full h-full bg-white flex items-start justify-start sm:justify-center">
                  <ul className="flex flex-col md:flex-row items-start sm:items-center mx-5 sm:my-9">
                    {links.map((link, i) => (
                      <li key={i}>
                        <Link href={link.href}>
                          <a
                            onClick={() =>
                              link.dropdown && setDropDown((prev) => !prev)
                            }
                            className={`py-4 md:px-4 block font-regular text-sm hover:text-primary ease-out duration-150 outline-primary ${
                              link.icon && "flex items-center"
                            }  ${link.dropdown && "md:flex hidden"}`}
                          >
                            {link.name}{" "}
                            {link.icon && (
                              <span className="ml-3">
                                <BsChevronDown fontSize={17} />
                              </span>
                            )}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {dropDown && (
                    <div
                      onClick={(e) => console.log(e.currentTarget)}
                      className="absolute hidden md:block top-[90px] right-[2%] max-w-[290px] w-full bg-white border-t-[0] border border-gray rounded-xl shadow-lg p-5"
                    >
                      <div className="absolute top-[-7px] right-[47%] w-4 h-4 bg-white border border-gray rotate-45 z-[-1]" />
                      <div className="flex items-center justify-center">
                        <ul>
                          {dropdownlinks.map((link, i) => (
                            <li key={i}>
                              <Link href={link.href}>
                                <a
                                  onClick={() => setDropDown((prev) => !prev)}
                                  className="text-sm font-regular text-black py-2 inline-block hover:text-primary ease-out duration-150 outline-primary"
                                >
                                  {link.link}
                                </a>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
