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

  // scroll functionality
  const bannerSlider = document.getElementById("banner-slider");

  const leftScroll = () => {
    bannerSlider.scrollLeft = bannerSlider.scrollLeft - 500;
    // console.log(i)
  };

  const rightScroll = () => {
    // const bannerSlider = document.getElementById("banner-slider")
    bannerSlider.scrollLeft = bannerSlider.scrollLeft + 500;
  };
  return (
    <>
      <div className="  w-9/12 m-auto  ">
        <div className="  flex pt-4 justify-between">
          <div className="font-bold text-2xl mb-2 leading-6">
            What's on your mind ?
          </div>
          {/* Banner Food Choice */}
          <div className="flex">
            <div
              className="w-8 mr-2  rounded-3xl bg-slate-200 p-2 cursor-pointer"
              onClick={leftScroll}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z" />
              </svg>
            </div>
            <div
              className="w-8 rounded-3xl bg-slate-200 p-2 cursor-pointer"
              onClick={rightScroll}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
              </svg>
            </div>
          </div>
        </div>
        {/* scroll Banner */}
        <div
          className=" flex  overflow-scroll overflow-y-hidden   scroll-smooth __bannerScroll"
          id="banner-slider"
        >
          {foodList?.map((item) => {
            // getting the id and biriyani tag for URL by splitting

            let foodCategory = item.action.link;
            foodCategory = foodCategory.split("collection_id=");
            // console.log(foodCategory)
            foodCategory = foodCategory[1].split("&tags")[0];

            const foodCategoryId = item.action.text;

            // console.log(foodCategoryId)
            return (
              <Link
                to={"/foodInMind/" + foodCategoryId + "_" + foodCategory}
                key={item.id}
              >
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
