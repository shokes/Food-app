import React from "react";
import "./index.css";

const Food = ({ meal }) => {
  return (
    <main className="grid">
      {meal.map((m) => {
        const { id, title, meal, price, img, desc } = m;

        return (
          <section key={id}>
            <img src={img} alt={title} />
            <h3>{price}</h3>
            <p>{desc}</p>
          </section>
        );
      })}
    </main>
  );
};

export default Food;
