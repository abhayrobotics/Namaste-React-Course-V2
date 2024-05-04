import { Link } from "react-router-dom";
// import  logo from "../asset/logo.jpg"
import { useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";




const Header = () => {
    const [loginBtn, setLoginBtn] = useState("Login");

    const onlineStatus = useOnlineStatus()
    
    // console.log("header render")
    // subscribing to selector
        const cartItems = useSelector((store)=> store.cart.items);

        // console.log(cartItems)

    return (
        <div className=" px-3 py-2 flex justify-between items-center  bg-main-color text-white">
            <div className="w-20">
                {/* <Link to="/"><img src={logo} alt="" /></Link> */}
                {/* <Link to="/"><img src={require("../asset/logo.png")} alt="" /></Link> */}
            </div>
            <div className="">
                <ul className="flex text-xl">
                    <li className="menu mx-2 hover:text-second-color hover:cursor-pointer">Offers</li>
                    <li className="menu  mx-2 hover:text-second-color hover:cursor-pointer"><Link to="/contact">Contact</Link></li>
                    <li className="menu  mx-2 hover:text-second-color hover:cursor-pointer"><Link to="/about" > About</Link></li>
                    <li className="menu mx-2 hover:text-second-color hover:cursor-pointer"><Link to="/grocery" > Grocery</Link></li>
                    <li className="menu  mx-2 hover:text-second-color hover:cursor-pointer "><Link to="/cart">Cart-({cartItems.length } items)</Link></li>
                    <li className="login  mx-2 hover:text-second-color hover:cursor-pointer" onClick={() => {
                     
                            
                            
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
    )
}

export default Header;