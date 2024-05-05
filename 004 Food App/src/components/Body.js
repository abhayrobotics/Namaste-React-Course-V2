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
      console.log(filterApiData);

      setListofRestuarant(filterApiData);

      setFilterRestaurant(filterApiData);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(ListofRestuarant);

  //?  Time for loading , shimmer UI
  // ?conditional
  if (onlineStatus === false) {
    return (
      <h1>Looks Like you're Offline. Check Your internet Connection !!</h1>
    );
  }
  // console.log(ListofRestuarant)
  if (ListofRestuarant?.length == 0) {
    return <ShimmerBody />;
  }
  return (
    <div className="body">
     
      <div className=" flex items-center mt-2">
        <div className="search px-3 py-2  ">
          <input
            data-testid="searchInput"
            className="border-[1px] border-gray-600 px-2 py-1 mx-2 rounded-md "
            type="text"
            value={searchText}
            onChange={(e) => {
              // ? updating the search text state variabel as it is binded with input tag
              setSearchText(e.target.value);
            }}
            id="searchInput"
          />

          <button
            className=" x-btn"
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
        <button
          className=" x-btn "
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
          className=" x-btn"
          onClick={() => {
            setFilterRestaurant(ListofRestuarant);
          }}
        >
          <p>All</p>
        </button>
      </div>

      {/*  New component Food Choice */}
      <FoodChoice />

      <div className="mx-4 font-semibold text-2xl">
        Top Restaurants in Town :
      </div>

      <div className="flex flex-wrap mx-20 border-4 justify-center items-center">
        {filteredRestaurant?.map((item) => {
          // console.log(item.info.id)
          return (
            <div key={item.info.id}>
              <Link to={"restaurant/" + item.info.id} >
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
