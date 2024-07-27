[![Netlify Status](https://api.netlify.com/api/v1/badges/4294dfe8-e750-4645-beaf-690e591fbd89/deploy-status)](https://swiggy-abhay.netlify.app/)
# Basic Setup Required to run the above repository
- cd  <folder> (in the specified directory preffered in 004 Food App)
- npm install 
- npm install --only=dev 

# Inception

## creating first program

<!-- ?  ********************************** Using HTML*************************** -->

    <div>
        <h1>Hello React! using HTML</h1>
    </div>

    <div id="root"></div>
    <div id="root2"></div>

    <!-- ?  ********************************** Using JS*************************** -->
    <script>
        const h1 = document.createElement("h1");
        const root = document.getElementById('root')
        h1.innerHTML = "Hello React using JS";
        root.appendChild(h1)

        </script>

<!-- ?  ********************************** Using React*************************** -->

  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>

    const heading = React.createElement(
    'h1',
     {id:"heading", xyz:"abhay"},
      "Hello React from React!"
      );

console.log(heading);

## Step to Set up React Project using parcel

- npm init
- npm install react
- npm install react-dom
- npm install -D parcel
- npm parcel -version
- create index.html file
    <body>
      <div id="root">Replace with original content (not to be rendered)</div>
      <script type="module" src="./app.js"></script>
    </body>

- create app.js file
    import React from "react";
    import ReactDOM from 'react-dom';

    //Method-1
    const heading =React.createElement('h1',{},"Hello React using react installation");
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(heading)

    // *Method-2
    const root = ReactDOM.createRoot(document.getElementById('root'));
    const jsxHeading = <h1>Hello react using JSX syntax</h1>
    root.render(jsxHeading)

- npx parcel index.html


## Redux Toolkit
- npm install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to the app
- Slice(cartslice)
- dispatch(action)
- selector

# React testing:
npm i -D @testing-library/react
npm i -D jest
npm install --save-dev babel-jest @babel/core @babel/preset-env
- 	create a babel.config.js

module.exports = {
    presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
  };

-	Since, parcel also has babel installed, To disable Babel transpilation in Parcel, override the default Parcel config for JavaScript
•	Create a .parcelrc file in root

{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.{js,mjs,jsx,cjs,ts,tsx}": [
      "@parcel/transformer-js",
      "@parcel/transformer-react-refresh-wrap"
    ]
  }
}
-  
- npx jest --init
- install jsdom library
  npm install --save-dev jest-environment-jsdom
- install @babel/preset-react -to make the JSX work in test cases
- include @babel/preset-react inside my babel.config.js
      module.exports = {
      presets: [
        ["@babel/preset-env", { targets: { node: "current" } }],
        ["@babel/preset-react",{runtime: "automatic"}]
      ],
    };
- npm i -D install @testing-library/jest-dom
