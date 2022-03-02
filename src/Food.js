const Food = function ({ meal }) {
  return (
    <main>
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
