import { useEffect, useState } from "react";

import ResCard, { WithPromoted, isVeg } from "./ResCard";
import { Link } from "react-router-dom";
import ShimmerBody from "./ShimmerBody";
import useOnlineStatus from "../utils/useOnlineStatus";
import FoodChoice from "./FoodChoice";

const Body = () => {
  // ? list of Restuarants , variable
  // original copy- remains inatct
  let [ListofRestuarant, setListofRestuarant] = useState([]);
  // filtered copy
  const [filteredRestaurant, setFilterRestaurant] = useState([]);

  // ? search text variable
  const [searchText, setSearchText] = useState("");

  //?  Higher Order Function
  const RestCardVeg = isVeg(ResCard);

  // console.log(" body console")
  const onlineStatus = useOnlineStatus();

  //? use effect, use effect works after the body rendering is complete
  useEffect(() => {
    // console.log("use effect called");
    fetchData();
  }, []);

  // ? async function -data fetching
  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();
      // console.log(json.data );
      // console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants );
      // ? optional chaining
      const filterApiData =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      // console.log(filterApiData);

      setListofRestuarant(filterApiData);

      setFilterRestaurant(filterApiData);
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(ListofRestuarant);

  //?  Time for loading , shimmer UI
  // ?conditional
  if (onlineStatus === false) {
    return (
      <h1 className="m-auto p-10">Looks Like you're Offline. Check Your internet Connection !!</h1>
    );
  }
  // console.log(ListofRestuarant)
  if (ListofRestuarant?.length == 0) {
    return <ShimmerBody />;
  }
  return (
    <div className="body ">
      
      {/*  New component Food Choice */}
      <FoodChoice />
      <div className=" flex flex-col xs:flex-row items-start xs:items-center mt-2 w-11/12 md:w-10/12 m-auto ">
        <div className="search  py-2  ">
          <input
            data-testid="searchInput"
            className="border-[1px] border-gray-600 px-2 py-1 mx-2 rounded-md  text-xs sm:text-sm"
            type="text"
            value={searchText}
            onChange={(e) => {
              // ? updating the search text state variabel as it is binded with input tag
              setSearchText(e.target.value);
            }}
            id="searchInput"
          />

          <button
            className=" x-btn text-xs sm:text-sm"
            onClick={() => {
              // ? search new restaurant based on search

              let filteredSearch = ListofRestuarant.filter((item) => {
                return item.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilterRestaurant(filteredSearch);
              // console.log(filteredSearch)
            }}
          >
            <p>Search</p>{" "}
          </button>
        </div>
        <div>

          
          <button
            className=" x-btn  text-xs sm:text-sm "
            onClick={() => {
              //? filter logic
              // console.log("button clikced")
              let filteredlist = ListofRestuarant.filter(
                (item) => item.info.avgRating > 4
              );
              // console.log(filteredlist)

              setFilterRestaurant(filteredlist);
            }}
          >
            <p className=""> Top Rated Restaurant </p>
          </button>
          <button
            className=" x-btn text-xs sm:text-sm"
            onClick={() => {
              setFilterRestaurant(ListofRestuarant);
            }}
          >
            <p>All</p>
          </button>
        </div>
      </div>

      

      <div className="m-auto my-2 font-semibold  text-xl sm:text-2xl w-11/12 md:w-10/12  px-4 ">
        Top Restaurants in Town :
      </div>

      <div className="flex flex-wrap  w-11/12 justify-center sm:justify-evenly  md:w-10/12 m-auto  items-center ">
        {filteredRestaurant?.map((item) => {
          // console.log(item.info.id)
          return (
            <div key={item.info.id}>
              <Link to={"restaurant/" + item.info.id}>
                {item.info.veg ? (
                  <RestCardVeg resData={item} />
                ) : (
                  <ResCard resData={item} />
                )}
              </Link>
              <div data-testid="resCard"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
