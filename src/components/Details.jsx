import { useEffect } from "react";
import { useParams } from "react-router-dom";

const uel = `https://themealdb.com/api/json/v1/1/search.php?s=`;

function Details() {
  const params = useParams();
  console.log(params.id);
  //   const [details, setDetails] = useState([]);

  const detailPage = async () => {
    const res = await fetch(uel);
    const data = res.json();
    console.log(data);
  };

  useEffect(() => {
    detailPage();
  });
  return (
    <section id="fail">
      <div className="container">
        <h2>{params.id}</h2>
      </div>
    </section>
  );
}
export default Details;
