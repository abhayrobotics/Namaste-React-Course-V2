import User from "./User";
import UserClass from "./UserClass";
import Third from "./Third";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent contructor")
  }

  componentDidMount() {
    // console.log("Parent did Mount")
  }
  render() {
    // console.log("Parent render")
    return (
      <div>
        {/* <h2>About Us</h2> */}
        {/* <UserClass name={"frist"} location={" Dhanbad"} /> */}
        {/* <UserClass name={"second"} location={" Dhanbad"} /> */}

        {/* <User name={"Abhay Kumar Gupta "} location={" Dhanbad"} /> */}

        <div className="w-10/12 m-auto">
          <h2 className="text-2xl m-2 ml-0 ">About</h2>
          <div className="mt-4  mb-2 text-md ">
            Swiggy is an Indian online food ordering and delivery platform that
            has disrupted the dining experience for millions of people.<br/>
            Here’s a glimpse into what Swiggy is all about:
            <ol className="ml-2 ">
                    <li >1. Swiggy offers an online ordering platform for a variety of neighborhood partner restaurants.</li>
                    <li>2. Users can access Swiggy through Android and iOS devices or the user-friendly website.</li>
                    <li>3. With a wide network of partnered restaurants, Swiggy provides convenient access to an extensive variety of delicious dishes from diverse cuisines.</li>
                    
                
                </ol> 
          </div>
        </div>
      </div>
    );
  }
}

export default About;
