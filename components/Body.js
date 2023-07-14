import RestCard from "./RestCard";
import ShimmerUi from "./ShimmerUi";
import { useEffect, useState } from "react";

const Body = () => {
  // state variable = super powerful variable
  const [listOfResturant, setlistOfResturant] = useState([]);
  const [filterdResturant, setfilterdResturant] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetchData();
    console.log("useEffect render")
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // optional chaining

    setlistOfResturant(json?.data?.cards[2]?.data?.data?.cards);
    setfilterdResturant(json?.data?.cards[2]?.data?.data?.cards);
  };

  return listOfResturant.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div className="body">
      <div className="filterBar">
        <div className="search">
          <input
            type="text"
            className="search-btn"
            placeholder="search..."
            value={searchInput}
            onChange={(event) => {
              setSearchInput(event.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log(searchInput);
              const filterdResturant = listOfResturant.filter(
                (res) => res.data.name.toLowerCase().includes(searchInput.toLowerCase())
              );

              setfilterdResturant(filterdResturant);
            }}
          >
            search
          </button>
        </div>
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = filterdResturant.filter(
                (res) => res.data.avgRating > 4
              );
              setfilterdResturant(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="restcontainer">
        {filterdResturant.map((restaurant) => (
          <RestCard key={restaurant.data.id} restData={restaurant} />
        ))}
        {console.log("Body render")}
      </div>
    </div>
  );
};
export default Body;
