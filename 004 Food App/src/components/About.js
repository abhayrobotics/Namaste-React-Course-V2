
import User from "./User";
import UserClass from './UserClass'
import Third from './Third'
import React from 'react'

class About extends React.Component {
    constructor(props){
        super(props);
        // console.log("Parent contructor")
    }

    componentDidMount(){
        // console.log("Parent did Mount")
    }
    render() {

        // console.log("Parent render")
        return (
            <div>

                <h2>About Us</h2>
                <UserClass name={"frist"} location={" Dhanbad"} />
                {/* <UserClass name={"second"} location={" Dhanbad"} /> */}
                
                
                {/* <User name={"Abhay Kumar Gupta "} location={" Dhanbad"} /> */}

            </div>
        )
    }
}

export default About;