import { useEffect, useState } from "react";

function Home() {
  const [meals, setMeals] = useState([]);
  function fetchMeal() {
    const URL = `https://themealdb.com/api/json/v1/1/search.php?s=`;
    fetch(URL)
      .then((res) => res.json())
      .then((meal) => setMeals(meal.meals));
  }

  useEffect(() => {
    fetchMeal();
  }, []);

  // function fetchName(naame) {
  //   const search = document.querySelector(".search");
  //   search.addEventListener("input", function () {
  //     search.vale = naame;
  //   });
  // }

  return (
    <section id="home">
      <div className="container">
        <div className="hero">
          <div className="heroTitle">
            <h1>Creative Front-end Final Exam</h1>
            <div className="inputGroup">
              <input type="text" placeholder="Search food" className="search" />
              <input type="submit" value="Search" />
            </div>
          </div>
          <div className="allFoods">
            {meals.map((meal) => (
              <div className="foodItem">
                <h4>{meal.idMeal}</h4>
                <div>
                  <img src={meal.strMealThumb} alt={meal.strMeal} />
                </div>
                <h2>{meal.strMeal}</h2>
                <h5>{meal.strCategory}</h5>
                <p>{meal.strInstructions.slice(0, 100)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Home;
