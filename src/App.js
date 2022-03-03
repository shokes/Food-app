import React, { useState } from "react";
import "./index.css";

import Food from "./Food";
import meals from "./data";
import Button from "./Button";
const cat = ["all", ...new Set(meals.map((m) => m.category))];

function App() {
  const [meal, setMeal] = useState(meals);
  const [button, setButton] = useState(cat);

  const filterMeal = (category) => {
    if (category === "all") {
      setMeal(meals);

      return;
    }
    const newMeal = meals.filter((m) => m.category === category);
    console.log(newMeal);
    setMeal(newMeal);
  };

  return (
    <main className="container">
      <header>
        <h2>Meal plan</h2>
      </header>
      <section>
        <Button button={button} filterMeal={filterMeal} />
        <div>
          <Food meal={meal} />
        </div>
      </section>
    </main>
  );
}

export default App;
