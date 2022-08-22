import React from "react";
import { Form, LinkCards, Menu } from "../components";
import pizza from "../constants/pizza";
import sushi from "../constants/sushi";
import snacks from "../constants/snacks";
import desserts from "../constants/desserts";
import drinks from "../constants/drinks";
import sauce from "../constants/sauce";
import combo from "../constants/combo";

export default function Home() {
  return (
    <section id="home">
      <LinkCards />
      <Form />
      <Menu title={`Пицца`} filter={true} cards={pizza} />
      <Menu title={`Cуши`} filter={true} cards={sushi} />
      <Menu title={`Закуски`} filter={false} cards={snacks} />
      <Menu title={`Десерты`} filter={false} cards={desserts} />
      <Menu title={`Напитки`} filter={false} cards={drinks} />
      <Menu title={`Соусы`} filter={false} cards={sauce} />
      <Menu title={`Комбо`} filter={false} cards={combo} />
      <h1 className="text-3xl font-bold underline">Хеллоу беби!</h1>
    </section>
  );
}
