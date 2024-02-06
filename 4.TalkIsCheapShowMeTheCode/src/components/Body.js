import { useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Body = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
      const jsonData = await data.json();
      setRestaurantData(
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurant(
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      (error) => console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1 style={{ marginTop: "100px" }}>
        Looks like you are offline! please check your internet connection
      </h1>
    );

  //whenever the state variable update react triggers a reconciliation cycle
  //it re-render the component

  return (
    <div className="body-container">
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search a restaurant you want..."
        />
        <button
          onClick={() => {
            //filter the restraunt cards and update the ui
            //searchText
            console.log(searchText);
            const filteredRestaurant = restaurantData?.filter((res) =>
              res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filteredRestaurant);
          }}
          className="search-btn"
        >
          Search
        </button>
      </div>
      {restaurantData?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-list">
          {filteredRestaurant?.map((restaurant) => {
            return (
              <Link to={"/restaurants/" + restaurant.info.id}>
                {" "}
                <RestaurantCard key={restaurant.info.id} {...restaurant} />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Body;
