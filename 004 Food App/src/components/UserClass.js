import React from "react"
import Third from "./Third"

class UserClass extends React.Component {

    constructor(props) {
        super(props)
        // console.log(props)
        this.state = {
            // count: 0,
            // count2: 2,
            userInfo :{
                name: "Dummy",
                location:"dummy"
            }
        }
        // console.log(this.props.name + "child constructor")

    }
    async componentDidMount() {
        // console.log(this.props.name + " child omponent did mount")
        // const response = await fetch("https://api.github.com/users/abhayrobotics");
        // const datajson = await  response.json()
        // console.log(datajson)

        // this.setState({
        //     userInfo:datajson
        // })
        this.timer =setInterval(()=>{
            console.log("update timer")
        },1000)
        
    }
    //? used when state varible changes.
    componentDidUpdate(){
        console.log("component Did Update")
      
    }
    // ? clearing dependencies
    componentWillUnmount(){
        // console.log("unmount")
        clearInterval(this.timer)
    }

    render() {
        //? props can be destructured as well
        const {name,location,avatar_url,login,bio} =this.state.userInfo
        // const { location } = this.props
        // console.log(this.props.name + "child render")
        // console.log(this.props.userInfo)
        return (
            <div className="user-card">
                <h3>Class Based components</h3>
                <h3>Count: {this.state.count}</h3>
                <button onClick={() => {
                    this.setState({

                        count: this.state.count + 1
                    })
                }} >Increment Count</button>
                {/* <h3>Count2: {this.state.count2}</h3> */}
                {/* <h3>Name: {this.props.name}</h3> */}

                <img className="user__img" src={avatar_url}  alt="" />
                <h3>Name: {name}</h3>
                <h3>Bio: {bio}</h3>
                <h3>Location: {location}</h3>
                <h3>Github: {login}</h3>

                {
                    this.props.name == "second" ?
                        <Third name={"2.1 "} location={" Dhanbad"} /> :
                        <></>
                }

            </div>
        )

    }

}
export default UserClass;