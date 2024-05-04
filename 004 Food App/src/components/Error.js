import Header from "./Header"
import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const err = useRouteError() 
    console.log(err)
    return(
        <div>
            <Header />
            <h2> Ooops...</h2>
            <h4>Something went wrong...</h4>
        <br />
            <h1>{err.status}</h1>
            <h1>{err.statusText}</h1>
            
        </div>
    )
}
export default Error;