import React from "react";

const Button = ({ button, filterMeal }) => {
  return (
    <div>
      {button.map((but, index) => {
        return (
          <button
            className="btn"
            type="button"
            key={index}
            onClick={() => filterMeal(but)}
          >
            {but}
          </button>
        );
      })}
    </div>
  );
};

export default Button;
