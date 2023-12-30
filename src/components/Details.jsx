function Details() {
  const UrlName = `https://themealdb.com/api/json/v1/1/search.php?s=Arrabiata`;

  function fetchName() {
    fetch(UrlName)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
  fetchName();

  return (
    <div>
      <div className="detailsWrapper">
        <div className="detailItem">details</div>
      </div>
    </div>
  );
}
export default Details;
