import { React, useState } from "react";
import "./App.css";
import Food from "./Food";
import data from "./data";

function App() {
  const [meal, setMeal] = useState(data);

  const filterMeal = function (category) {
    if (category === "all") {
      setMeal(data);

      return;
    }
    const newMeal = meal.filter((meal) => meal.category === category);
    setMeal(newMeal);
  };

  return (
    <main className="container">
      <header>
        <h3>Meal plan</h3>
        <button onClick={() => filterMeal("all")}>all</button>
        <button onClick={() => filterMeal("breakfast")}>breakfast</button>
      </header>
      <section>
        <Food meal={meal} />
      </section>
    </main>
  );
}

export default App;
