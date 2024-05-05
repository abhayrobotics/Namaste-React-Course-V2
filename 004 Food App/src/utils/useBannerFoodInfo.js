
// "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9966085&lng=77.5920743&collection=83649&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"

import { useEffect } from "react";

// takes input as food id and returns a list of restauant with the food 

const useFoodState =()=>{

 useEffect(()=>{
    fetchBannerFood()
 });

 const fetchBannerFood = async ()=>{
    const data  = await fetch(BANNER_URL)

    const bannerdata = await data.json();
    

 }




    return bannerFoodInfo
}

export default  useFoodState;
