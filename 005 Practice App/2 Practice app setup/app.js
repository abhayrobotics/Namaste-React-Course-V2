import React from "react";
import ReactDOM from "react-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

//* Method-1
// const heading =React.createElement('h1',{},"Hello React using react installation");
// root.render(heading)

// *Method-2

// const jsxHeading = <h1>Hello react using JSX syntax</h1>
// root.render(jsxHeading)

// 3. functional component

const Header = () => {
  return <h2> I am Header Component</h2>;
};

const Body = () => {
  return (
    <>
      <Header />
      <h2>I am Body Component</h2>
    </>
  );
};

root.render(<Body />)