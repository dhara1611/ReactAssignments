import RestCard from "./RestCard";
import restList from "../utils/mockdata";
import { useState } from "react";

const Body = () => {
  // state variable = super powerful variable
  const [listOfResturant, setlistOfResturant] = useState(restList);
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="body">
      <div className="filterBar">
        <div className="search">
          <input
            type="text"
            className="search-btn"
            placeholder="search..."
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
              if (searchInput.length > 1) {
                const filteredList = restList.filter((res) =>
                  res.data.name
                    .toLowerCase()
                    .includes(searchInput.toLowerCase())
                );
                console.log(filteredList);
                setlistOfResturant(filteredList);
              } else {
                setlistOfResturant(restList);
              }
            }}
          />
          <button
            onClick={() => {
              const filteredList = restList.filter((res) =>
                res.data.name.toLowerCase().includes(searchInput.toLowerCase())
              );
              setlistOfResturant(filteredList);

              if (searchInput === "") {
                setlistOfResturant(restList);
              }
            }}
          >
            search
          </button>
        </div>
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              setlistOfResturant(
                (filteredList = listOfResturant.filter(
                  (res) => res.data.avgRating > 4
                ))
              );
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="restcontainer">
        {listOfResturant.map((restaurant) => (
          <RestCard key={restaurant.data.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
