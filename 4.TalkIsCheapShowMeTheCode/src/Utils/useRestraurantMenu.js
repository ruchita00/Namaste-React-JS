import { useEffect, useState } from "react";

const useRestraurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  //fetch data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.923142382992081&lng=77.61762198060751&restaurantId=${resId}`
    );
    const json = await data.json();
    setResInfo(json.datan);
  };
  return resInfo;
};

export default useRestraurantMenu;
