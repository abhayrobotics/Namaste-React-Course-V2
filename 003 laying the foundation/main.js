import React from "react";
import ReactDOM from "react-dom/client";


// ? React Element
const jsxHeading =
    (<h1 className="heading">
        Namaste React using JSX
    </h1>)


const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(jsxHeading)

// ? React Component
// 1.Functional Based component ( new)
// 2. class  Based component ( old )

// ? Functional Based component

const Title = () => {
    return <h1 className="title" >Title - Namaste</h1>
};

const number = 100;
// ? Function composition- functional ocmponent inside another
const Header = () => (

         <div className="header">

                    <Title />
                    <Title></Title>
                    {Title()}
                    

                    {/* any js code can be written using cirly backet  */}
                    {number}
                    {number + 100}
                    {console.log("even console can be doen in jsx")}
                    <h2>{ 200}</h2>
                    <h3>{ "JSX protect us from cross site maliciosus data like a  bad malicious api"}</h3>

                    {jsxHeading}
                    {setTimeout(function(){console.log("timeout")},2000)}

                    <h1 className="heading" >Hello Namaste 1</h1>
                   
                </div>

);
root.render(<Header />)
