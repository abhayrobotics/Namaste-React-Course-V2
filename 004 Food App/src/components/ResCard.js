import { IMG_URL } from "../utils/constant";

const ResCard = (props) => {
  // console.log(props);
  const { resData } = props;
  const { name, avgRating, cuisines, areaName, costForTwo, cloudinaryImageId } =
    resData?.info;
  // console.log(resData.info);
  // console.log(name);
  return (
    <div
      data-testid="resCard"
      className=" w-[352px] h-40 xs:w-[220px] xs:h-[300px] mx-4 my-4  flex  flex-row xs:flex-col  rounded-xl shadow-lg bg-slate-100  border-[1px] transition hover:border-black hover:bg-slate-200 hover:scale-110 hover:shadow-xl"
    >
      <div className="h-40 w-44   xs:h-40 xs:w-[220px] overflow-hidden   rounded-l-xl xs:rounded-t-xl ">
        <img
          className=" xs:object-contain"
          src={IMG_URL + cloudinaryImageId}
          alt=""
        />
      </div>
      <div className="w-44">
        <div className="my-1 px-2 font-medium text-sm xs:text-base line-clamp-1">
          <h3>{name}</h3>
        </div>
        <div className="py-1 xs:py-0  px-2 flex flex-col justify-around text-xs xs:text-sm ">
          <h4 className=" line-clamp-2">{cuisines.join(", ")} </h4>
          <h4  className="py-1 xs:py-0">{avgRating} ⭐</h4>
          <h4 className="py-1 xs:py-0">{areaName}</h4>
          <h4 className="py-1 xs:py-0">{costForTwo}</h4>
        </div>
      </div>
    </div>
  );
};

// higher order components
export const isVeg = (ResCard) => {
  return (props) => {
    return (
      <div>
        <label className="bg-green-700 text-white absolute my-2 px-2 py-1 rounded-md text-sm">
          Veg
        </label>
        <ResCard {...props} />
      </div>
    );
  };
};

export default ResCard;
