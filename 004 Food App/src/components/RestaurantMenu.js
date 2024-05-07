import ShimmerBody from "./ShimmerBody";
import { useParams } from "react-router-dom";

// Custom hook
import useRestaurantInfo from "../utils/useRestaurantInfo";
import FoodCategory from "./FoodCategory";

const RestaurantMenu = () => {

    const { resid } = useParams()

    // ? Custom Hook 
    const [resMenu, resFood] = useRestaurantInfo(resid)
    // console.log(resid)
    // console.log(resMenu)

    if (resMenu === null) {
        return <ShimmerBody />
    }
    return (
        <div className="flex justify-center my-2 ">
            <div className="flex self-center jutify-center w-11/12 md:w-10/12  border">

                <div className="items-center p-2 min-w-full" >


                    <h3 className="font-semibold text-2xl">{resMenu.name}</h3>

                    <p>{resMenu.cuisines.join(", ")}</p>
                    <p>{resMenu.areaName + ", " + resMenu.city}</p>
                    <br />
                    <hr />

                    {/* showing each category for indivisual restuarant */}
                    <FoodCategory data={resFood}  />

                </div>
            </div>
        </div>
    )
}

export default RestaurantMenu;