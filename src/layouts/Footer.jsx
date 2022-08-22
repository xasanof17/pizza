import Image from "next/image";
import Link from "next/link";
import React from "react";
import { images } from "../constants";
import { FaPhone } from "react-icons/fa";
import { RiRoadMapLine } from "react-icons/ri";

export default function Footer() {
  return (
    <>
      <footer className="bg-white py-[30px]">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[40px]">
            <div className="flex flex-col items-start">
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
              <p>© Copyright 2021 — Куда Пицца</p>
            </div>
            <div className="flex flex-col">
              <h3 className="font-semibold text-sm">Куда пицца</h3>
              <ul className="mt-5">
                <li>
                  <Link href={"/"}>
                    <a className="font-regular text-sm text-black py-2 inline-block">
                      О компании
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    <a className="font-regular text-sm text-black py-2 inline-block">
                      Пользовательское соглашение
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    <a className="font-regular text-sm text-black py-2 inline-block">
                      Условия гарантии
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h3 className="font-semibold text-sm">Помощь</h3>
              <ul className="mt-5">
                <li>
                  <Link href={"/"}>
                    <a className="font-regular text-sm text-black py-2 inline-block">
                      Ресторан
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    <a className="font-regular text-sm text-black py-2 inline-block">
                      Контакты
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    <a className="font-regular text-sm text-black py-2 inline-block">
                      Поддержка
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    <a className="font-regular text-sm text-black py-2 inline-block">
                      Отследить заказ
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h3 className="font-semibold text-sm">Контакты</h3>
              <ul className="mt-5">
                <li>
                    <a href="tel:+998900198505" className="font-regular text-sm text-primary py-2 flex gap-3">
                      <span className="flex items-center justify-center">
                        <FaPhone />
                      </span>
                      +998 (90) 019-85-05
                    </a>
                </li>
                <li>
                  <Link href={"/"}>
                    <a className="font-regular text-sm text-black py-2 flex ">
                      <span className="flex items-center justify-center mr-1">
                        <RiRoadMapLine className="text-primary"/>
                      </span>
                      Москва, ул. Юных Ленинцев, д.99
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    <a className="font-regular text-sm text-black py-2 inline-block">
                      Условия гарантии
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
