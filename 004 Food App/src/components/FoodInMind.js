import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import ResCard from "../components/ResCard";
import ResCard from "./ResCard";

const FoodInMind = () => {
  // importing the id from link (parent)
  const { foodid } = useParams();
  const Ids = foodid.split("_");
  //   const BANNER_URL =
  ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9966085&lng=77.5920743&collection=83649&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
  const BANNER_URL =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9966085&lng=77.5920743&collection=" +
    Ids[1] +
    "&tags=layout_CCS_" +
    Ids[0] +
    "&sortBy=&filters=&type=rcv2&offset=0&page_type=null";

  console.log(foodid);

  const [bannerFoodMenu, setBannerFoodMenu] = useState([]);

  // to call the fetch after normal page loads(one time)
  useEffect(() => {
    fetchBannerFood();
  }, []);

  const fetchBannerFood = async () => {
    const data = await fetch(BANNER_URL);
    const bannerdata = await data.json();
    console.log(bannerdata);
    const usableData = bannerdata.data.cards.filter(
      (x) =>
        x.card.card["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    );

    console.log(usableData);
    setBannerFoodMenu(usableData);
  };

  return (
    <>
      <div className="flex flex-col w-9/12 m-auto">
        
        <div className="text-3xl bold p-4">{Ids[0]}</div>
        <div className="flex  flex-wrap m-auto ">
          {bannerFoodMenu.map((x) => {
            return (
              <>
                {/* Restaurant card with specific dish */}
                <ResCard
                  resData={x?.card?.card}
                  key={x?.card?.card?.info?.id}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FoodInMind;
