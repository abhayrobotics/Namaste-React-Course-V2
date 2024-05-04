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
                    
                        
                    <div key={item?.card?.info?.id}>
                        {/* food Description */}
                        <li className=" flex   justify-between   my-2  duration-200 transition-all">
                            <div className="text ">
                                <h4 className="text-md text-gray-800 font-bold">{item?.card?.info?.name}  </h4>
                                <h4>Rs. {item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}</h4>
                                <p className="text-slate-500 text-sm">{item?.card?.info?.description}</p>

                            </div>


                            {/* food image */}
                            <div className="relative">

                                <img className="  w-32 rounded-md object-cover " src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" + item.card.info.imageId} alt="" />
                                <span className="absolute  bottom-0 right-0 px-2 py-1 text-sm rounded text-green-500 bg-white  border-1 border-black shadow-lg cursor-pointer font-bold" onClick={() => addHandler1(item)}>Add+</span>
                            </div>
                        </li>
                        <hr />
                    </div>
                    

                )
            })
            }
        </>
    )
}

export default ItemList