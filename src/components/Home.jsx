/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Home() {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");

  const URL = `https://themealdb.com/api/json/v1/1/search.php?s=${search}`;
  const fetchMeal = async () => {
    const res = await fetch(URL);
    const meals = await res.json();
    setMeals(meals.meals);
  };

  useEffect(() => {
    fetchMeal();
  }, []);

  return (
    <section id="home">
      <div className="container">
        <div className="hero">
          <div className="heroTitle">
            <h1>Creative Front-end Final Exam</h1>
            <div className="inputGroup">
              <input
                type="text"
                placeholder="e.g Beef"
                onChange={(e) => setSearch(e.target.value)}
              />
              <input
                type="button"
                value="Search"
                onClick={() => {
                  fetchMeal(search);
                }}
              />
            </div>
          </div>
          <div className="allFoods">
            {meals.map((meal) => (
              <div className="foodItem" key={meal.idMeal}>
                <div>
                  <img src={meal.strMealThumb} alt={meal.strMeal} />
                </div>
                <h2>{meal.strMeal.slice(0, 20)}</h2>
                <h5>{meal.strCategory}</h5>
                <p>{meal.strInstructions.slice(0, 100)}</p>
                <div className="detailBtn">
                  <Link>Details</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Home;
