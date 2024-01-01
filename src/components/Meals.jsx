/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
function Meals() {
  const url = `https://themealdb.com/api/json/v1/1/search.php?s=`;

  const [details, setDetails] = useState([]);

  const fetchDetails = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.meals);
    setDetails(data.meals);
  };
  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <section id="detail">
      <div className="container">
        <div className="detailsWrapper">
          <div className="detailItem">
            {details.map((detail) => (
              <div className="eachItem" key={"meals.idMeal"}>
                <div>
                  <img src={detail.strMealThumb} alt={detail.strMeal} />
                </div>
                <h4>{detail.idMeal}</h4>
                <h2>{detail.strMeal}</h2>
                <h5>{detail.strCategory}</h5>
                <p>{detail.strInstructions}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Meals;
