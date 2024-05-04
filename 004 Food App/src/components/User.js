
import { useState } from "react";

const User = (props)=>{
    const [count]= useState(0)
    const [count2]= useState(1)
    return (
        <div className="user-card">
            <h3>Function based components</h3>
            <h3>Count: {count}</h3>
            <h3>Count2: {count2}</h3>
            <h3>Name: {props.name}</h3>
            <h3>Location: {props.location}</h3>
            <h3>Github: abhayrobotics</h3>
        </div>
    )
}

export default User;