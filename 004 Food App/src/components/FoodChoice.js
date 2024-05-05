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
      <div className=" w-9/12 m-auto ">
        <div className="  font-bold text-2xl mb-2">What's on your mind ?</div>
        {/* Banner Food Choice */}
        <div className=" flex  overflow-scroll overflow-y-hidden  ">
          {foodList?.map((item) => {

            // getting the id and biriyani tag for URL by splitting
            let foodCategory = item.action.link;

            foodCategory =foodCategory.split("collection_id=")
            // console.log(foodCategory)

            foodCategory =foodCategory[1].split("&tags")[0]

            const foodCategoryId =item.action.text

            console.log(foodCategoryId)
            return (
              <Link to={"/foodInMind/"+foodCategoryId+"_"+foodCategory} key={item.id}>
                {/* {console.log(item)} */}
               
                <div className=" w-36 h-44 mx-2 ">
                  <img
                    className="w-36 h-44 object-cover"
                    src={IMG_URL + item?.imageId}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FoodChoice;
