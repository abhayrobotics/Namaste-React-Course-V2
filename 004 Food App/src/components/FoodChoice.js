// import { useEffect } from "react";
import { useEffect, useState } from "react";
import { IMG_URL, MAIN_API_CAll } from "../utils/constant";
import { Link } from "react-router-dom";

const FoodChoice = () => {
  const [foodList, setFoodList] = useState([]);

  // Needs to be  asynchrounously  called once the main page loads
  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const mainAPI = await fetch(MAIN_API_CAll);

    const mainJson = await mainAPI.json();

    // console.log(mainJson);
    const foodChoiceList =
      mainJson?.data?.cards[0]?.card?.card?.imageGridCards?.info;

    setFoodList(foodChoiceList);
    console.log(foodChoiceList);
  };

  return (
    <>
      <div className=" w-9/12 m-auto  ">
        <div className="font-bold text-2xl mb-2">What's on your mind ?</div>
        {/* Banner Food Choice */}
        <div className=" flex w-  ">
          {foodList?.map((item) => {
            return (
              <div className="w-32 ">
                <Link to="/foodInMind" key={item.id}>
                  <img className=" mx-2" src={IMG_URL + item?.imageId} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FoodChoice;
