import Input from "postcss/lib/input";
import FoodChoice from "./FoodChoice";

const Contact = () => {
  return (
    <div className="w-10/12 m-auto"> 
      <h2 className="text-2xl m-2 ">Contact</h2>
      <form>
        <input
          type="text"
          className="p-2 m-2 rounded border border-blue-500"
          placeholder="Name"
        />
        <input
          type="text"
          className="p-2 m-2 rounded border border-blue-500"
          placeholder="Your Message"
        />
        <button className="p-2 m-2 rounded border border-blue-500">
          Submit
        </button>
      </form>
      <div className="mx-4">
        <h2 className="text-lg font-semibold">FAQ's</h2>
        <ul>
            <li  className="mt-4  mb-2 text-md font-semibold">How do I place an order?</li>
                <ol className="ml-2">
                    <li >1. Visit our website or mobile app</li>
                    <li>2. Log in or sign up.</li>
                    <li>3. Enter your location to see available restaurants.</li>
                    <li>4. Browse menus, select items, and add them to your cart.</li>
                    <li>5. Proceed to checkout and make payment..</li>
                    <li>6. Sit back and wait for your delicious meal to arrive!</li>
                
                </ol>
            
        
            <li  className="mt-4  mb-2 text-md font-semibold">What if I need to cancel my order?</li>
            <ol className="ml-2">
                <li >You can cancel your order before it’s confirmed by the restaurant. After confirmation, contact our customer support for assistance.</li>
            </ol>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          
        </ul>
      </div>
    </div>
  );
};

export default Contact;
