import RestCard from "./RestCard";
import restList from "../utils/mockdata";
import { useState } from "react";

const Body = () => {
  // state variable = super powerful variable
  const [listOfResturant, setlistOfResturant] = useState(restList);

  // normal js variable
  let listOfResturant2 = [
    {
      data: {
        id: "333573",
        name: "macD",
        totalRatingsString: "5000+ ratings",
        cloudinaryImageId: "zh3pxwfzbvkovh3j7pg4",
        cuisines: [
          "Chinese",
          "Thai",
          "Seafood",
          "Asian",
          "Healthy Food",
          "Beverages",
        ],
        costForTwo: 35000,
        costForTwoString: "₹350 FOR TWO",
        deliveryTime: 29,
        avgRating: "3.9",
      },
    },
    {
      data: {
        id: "333574",
        name: "kfc",
        totalRatingsString: "5000+ ratings",
        cloudinaryImageId: "zh3pxwfzbvkovh3j7pg4",
        cuisines: [
          "Chinese",
          "Thai",
          "Seafood",
          "Asian",
          "Healthy Food",
          "Beverages",
        ],
        costForTwo: 35000,
        costForTwoString: "₹350 FOR TWO",
        deliveryTime: 29,
        avgRating: "4.2",
      },
    },
    {
      data: {
        id: "333575",
        name: "Chopstick",
        totalRatingsString: "5000+ ratings",
        cloudinaryImageId: "zh3pxwfzbvkovh3j7pg4",
        cuisines: [
          "Chinese",
          "Thai",
          "Seafood",
          "Asian",
          "Healthy Food",
          "Beverages",
        ],
        costForTwo: 35000,
        costForTwoString: "₹350 FOR TWO",
        deliveryTime: 29,
        avgRating: "4.5",
      },
    },
  ];

  return (
    <div className="body">
      <div className="filterBar">
        <div className="search">
          <input className="search-btn"></input>
          <button>search</button>
        </div>
        <div className="filter">
          
          <button
            className="filter-btn"
            onClick={() => {
              setlistOfResturant(filteredList = listOfResturant.filter(
                (res) => res.data.avgRating > 4
              ));

              
            
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
