import { Link } from "react-router-dom";
import  logo from "../asset/swiggy.png";
import { useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";




const Header = () => {
    // const [loginBtn, setLoginBtn] = useState("Login");

    // const onlineStatus = useOnlineStatus()
    
    // console.log("header render")
    // subscribing to selector
        const cartItems = useSelector((store)=> store.cart.items);

        // console.log(cartItems)

    return (
        <div className="  shadow-2xl shadow-[#8d8d9026] ">
            <div className="pl-1 pr-4 py-4 flex justify-between items-center   shadow-2xl shadow-[#e2e2e626]  w-11/12 md:w-10/12 m-auto   ">
                <div className=" w-14 sm:w-20  px-0 mx-0 ">
                    
                    <Link to="/"><img src={logo}  alt="" className=" scale-110 hover:scale-125 duration-150"/></Link>
                    {/* <Link to="/"><img src={require("../asset/swiggy.png")} alt="" /></Link> */}
                </div>
                <div className="w-fit">
                    <ul className="flex text-base sm:text-xl   ">
                        {/* <li className="menu  mx-2 hover:text-second-color hover:cursor-pointer"><Link to="/">Home</Link></li> */}
                        <li className="menu  hidden xs:block mx-4 hover:text-second-color hover:cursor-pointer">Offers</li>
                        <li className="menu  hidden xs:block mx-4 hover:text-second-color hover:cursor-pointer"><Link to="/contact">Contact</Link></li>
                        <li className="menu hidden xs:block mx-2 hover:text-second-color hover:cursor-pointer"><Link to="/about" > About</Link></li>
                        {/* <li className="menu mx-4 hover:text-second-color hover:cursor-pointer"><Link to="/grocery" > Grocery</Link></li> */}
                        <li className="menu  mx-4 hover:text-second-color w-[50px] hover:cursor-pointer "><Link to="/cart">
                            <div className="flex flex-row ">
                                <svg className=" p-2 w-8 sm:w-16" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                            <div>{cartItems.length }</div>
                            </div>
                            </Link></li>
                        <li className="login  mx-2 hover:text-second-color hover:cursor-pointer w-4 " onClick={() => {
                        
                                
                                
                            loginBtn == "Login" ?
                                setLoginBtn("Logout") :
                                setLoginBtn("Login");
                            // console.log(loginBtn)

                        }} >{loginBtn}
                        </li>
                        {/* <li>{onlineStatus? "✅": "🔴"}</li> */}
                    
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Header;