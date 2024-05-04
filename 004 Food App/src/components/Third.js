import React from "react"

class Third extends React.Component {
    constructor(props) {
        super(props)
        // console.log(props)
       
        console.log(this.props.name  +"child constructor")

    }
    componentDidMount(){
        console.log(this.props.name  + " child omponent did mount")
    }

    render() {
        //? props can be destructured as well
        const { location } = this.props
       console.log(this.props.name  + "child render")
        // console.log(this.props)
        return (
            <div className="user-card">
                <h3>2.1</h3>
                
              
            </div>
        )

    }

}
export default Third;