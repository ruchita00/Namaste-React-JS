import { IMG_CDN_URL, LOGO_URL } from "../Utils/constants";
import { MenuShimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestraurantMenu from "../Utils/useRestraurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestraurantMenu(resId);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(
  //     `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.923142382992081&lng=77.61762198060751&restaurantId=${resId}`
  //   );
  //   const json = await data.json();
  //   setResInfo(json.data);
  // };
  // console.log(resInfo);

  return resInfo === null ? (
    <MenuShimmer />
  ) : (
    <div className="restaurant-menu">
      <div className="restaurant-summary">
        <img
          className="restaurant-img"
          src={
            IMG_CDN_URL + resInfo?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
          alt={resInfo?.cards[0]?.card?.card?.info?.name}
        />
        <div className="restaurant-summary-details">
          <h2 className="restaurant-title">
            {resInfo?.cards[0]?.card?.card?.info?.name}
          </h2>
          <p className="restaurant-tags">
            {resInfo?.cards[0]?.card?.card?.info?.cuisines?.join(", ")}
          </p>
          <div className="restaurant-details">
            <div
              className="restaurant-rating"
              style={
                resInfo?.cards[0]?.card?.card?.info?.avgRating < 4
                  ? { backgroundColor: "var(--light-red)" }
                  : resInfo?.cards[0]?.card?.card?.info?.avgRating === "--"
                  ? { backgroundColor: "white", color: "black" }
                  : { color: "white" }
              }
            >
              <i className="fa-solid fa-star"></i>
              <span>{resInfo?.cards[0]?.card?.card?.info?.avgRating}</span>
            </div>
            <div className="restaurant-rating-slash">|</div>
            <div>
              {resInfo?.cards[0]?.card?.card?.info?.sla?.lastMileTravelString}
            </div>
            <div className="restaurant-rating-slash">|</div>
            <div>{resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}</div>
          </div>
        </div>
      </div>

      <div className="restaurant-menu-content">
        <div className="menu-items-container">
          <div className="menu-title-wrap">
            <h3 className="menu-title">Recommended</h3>
            <p className="menu-count">
              {
                resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
                  ?.card?.card?.itemCards?.length
              }{" "}
              ITEMS
            </p>{" "}
          </div>
          <div className="menu-items-list">
            {resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map(
              (item) => (
                <div className="menu-item" key={item?.card?.info?.id}>
                  <div className="menu-item-details">
                    <h3 className="item-title">{item?.card?.info?.name}</h3>
                    <p className="item-cost">
                      {item?.card?.info?.price > 0
                        ? new Intl.NumberFormat("en-IN", {
                            style: "currency",
                            currency: "INR",
                          }).format(item?.card?.info?.price / 100)
                        : " "}
                    </p>
                    <p className="item-desc">{item?.card?.info?.description}</p>
                  </div>
                  <div className="menu-img-wrapper">
                    {item?.card?.info?.imageId && (
                      <img
                        className="menu-item-img"
                        src={LOGO_URL + item?.card?.info?.imageId}
                        alt={item?.card?.info?.name}
                      />
                    )}
                    <button className="add-btn"> ADD +</button>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
