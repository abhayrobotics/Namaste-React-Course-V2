import { useState } from "react";
import ItemList from "./ItemList";

const FoodCategory = ({ data }) => {
  const resFood = data;
  const [showIndex, setShowIndex] = useState(1);

  // filtering food categories from all data
  const FilteredCategory = resFood?.filter((eachItem) => {
    return (
      eachItem?.card?.card["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  });
  // console.log(FilteredCategory)

  return (
    <>
      {FilteredCategory?.map((foodCategory, index) => {
        // changing the index to the item it is clicked
        handleClick = () => {
          // console.log("clicked")
          setShowIndex(index);

          // if clicked on open categories it wil close
          if (index == showIndex) {
            setShowIndex(null);
          }
        };

        return (
          // restaurant Name
          <div
            className="shadow-sm my-4 p-2 rounded-lg w-full "
            key={foodCategory.card.card.title}
          >
            <div
              className="flex justify-between cursor-pointer"
              onClick={(handleClick = () => setShowIndex(index))}
            >
              <div className="font-bold text-md xs:text-lg text-gray-800 ">
                {foodCategory.card.card.title} (
                {foodCategory.card.card.itemCards.length})
              </div>
              <div className="font-extrabold w-4 h-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                </svg>
              </div>
            </div>

            {/* showing each Food in that category*/}
            <ul className=" flex flex-col  justify-center  ">
              {/* {console.log(showIndex, index)} */}
              {(index === showIndex ? true : false) && (
                <ItemList data={foodCategory.card.card.itemCards} />
              )}
            </ul>
            {/* <hr /> */}
          </div>
        );
      })}
    </>
  );
};

export default FoodCategory;
