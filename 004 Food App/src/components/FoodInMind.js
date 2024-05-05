import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import ResCard from "../components/ResCard";
import ResCard from "./ResCard";
import { Link } from "react-router-dom";

const FoodInMind = () => {
  // importing the id from link (parent)
  const { foodid } = useParams();
  const Ids = foodid.split("_");
  //   const BANNER_URL =

  const BANNER_URL =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9966085&lng=77.5920743&collection=" +
    Ids[1] +
    "&tags=layout_CCS_" +
    Ids[0] +
    "&sortBy=&filters=&type=rcv2&offset=0&page_type=null";

//   console.log(foodid);

  const [bannerFoodMenu, setBannerFoodMenu] = useState([]);
  //   Raw data
  const [rawMenu, setRawMenu] = useState([]);

  // to call the fetch after normal page loads(one time)
  useEffect(() => {
    fetchBannerFood();
  }, []);

  const fetchBannerFood = async () => {
    const data = await fetch(BANNER_URL);
    const bannerdata = await data.json();

    setRawMenu(bannerdata);
    // console.log(bannerdata);
    const usableData = bannerdata?.data?.cards?.filter(
      (x) =>
        x.card.card["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    );

    setBannerFoodMenu(usableData);
    console.log(usableData);
  };

  return (
    <>
      <div className="flex flex-col w-10/12 m-auto">
        <div className="text-3xl font-bold p-4 pb-1">{Ids[0]}</div>
        <div className="text-lg text-slate-500  px-4 pb-4">
          {rawMenu?.data?.cards[0]?.card?.card?.description}
          
        </div >
        <div className="text-2xl font-bold p-4 pb-1">Restaurants to explore</div>
        <div className="flex  flex-wrap m-auto ">
          {bannerFoodMenu.map((x) => {
            console.log(x)
            return (
              <>
                {/* Restaurant card with specific dish */}
                <Link to={"/restaurant/" + x?.card?.card?.info?.id} >
                <ResCard
                  resData={x?.card?.card}
                  key={x?.card?.card?.info?.id}
                />
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FoodInMind;
