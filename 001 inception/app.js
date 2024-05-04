import React from'react';
import  ReactDOM  from 'react-dom/client';

const heading = React.createElement(
    'h1',
     {id:"heading", xyz:"abhay"},
      "Hello React from React!"
      );

console.log(heading); 
// object

const root2 = ReactDOM.createRoot(document.getElementById('root2'));

console.log(root2)

//?  EX-1after render the CreateElement Object is converted to h1 tag
// root2.render(heading);


// ? create a nested element with child and siblings
{/* <div id= "parent">
    <div id="child">
        <h1>I am an H1 tag</h1>
        <h2>I am an H2 tag</h2>
    </div>
</div> */}

const parent2 = React.createElement('div',{id: 'parent'},
                    React.createElement('div',{id: 'child'},
                    [   React.createElement('h1',{},"Iam an H1 tag"),
                        React.createElement('h2',{},"Iam an H2 tag")
                    ]
        
                    )
                );

root2.render(parent2)