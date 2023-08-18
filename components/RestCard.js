import { LOGO_URL } from "../utils/constant.js"
const RestCard = (props) => {
    const {cloudinaryImageId, name, cuisines, avgRating, deliveryTime, costForTwo} = props.restData;
    return (
      <div className="restcard">
        <div className="restlogo">
          <img
            src={
              LOGO_URL +
              cloudinaryImageId
            }
          ></img>
        </div>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} Star</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime} min</h4>
      </div>
    );
  };
  export default RestCard;