import { useDispatch } from "react-redux"
import { addItem } from "../utils/cartSlice"

const ItemList = ({ data }) => {

    const dispatch = useDispatch()
    const addHandler1 =(item) =>{

        dispatch(addItem(item))
    }
    return (
        <>
            { data.map((item) => {
                return (   
                    
                        
                    <div key={item?.card?.info?.id} className="w-full">
                        {/* food Description */}
                        <li className=" flex   justify-between   my-2  duration-200 transition-all">
                            <div className="text ">
                                <h4 className="text-sm xs:text-md text-gray-800 font-bold">{item?.card?.info?.name}  </h4>
                                <h4 className="text-xs xs:text-sm">Rs. {item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}</h4>
                                <p className="text-slate-500 text-xs xs:text-sm text-clip overflow-hidden max-h-[3lh] w-10/12">{item?.card?.info?.description}</p>
                                 
                            </div>


                            {/* food image */}
                            <div className="relative ">
                                <div className="w-28 h-24 xs:w-40 xs:h-36 rounded-md">
                                <img className=" object-cover  w-full h-full rounded-md overflow-hidden " src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" + item.card.info.imageId} alt="" />

                                </div>
                                <span className="absolute  bottom-0 right-0 px-2 py-1 text-sm rounded text-green-500 bg-white  border-1 border-black shadow-lg cursor-pointer font-bold" onClick={() => addHandler1(item)}>Add+</span>
                            </div>
                        </li>
                        <hr className="my-4"/>
                    </div>
                    

                )
            })
            }
        </>
    )
}

export default ItemList