# Router and path

## 1. What are various ways of adding images to our app ?
-1. though web link
    <img src= "htts://www.google.com/...">

- 2: adding through local file
    import logo from "../asset/logo.png";
    <img src={logo} alt="" />

- 3: Using require.
    <img src={require("../asset/logo.png")} alt="" />


## 2.what would happen if we do console.log(useState())?
- 

## 3. How will useEffect , if we dont use a dependcy array?
- if depedendcy array is not used, the use effect hook will be called eveytime the component re- render
- if depending array is empty ie [], then the array will called only after the first render.
- if dependency array has a variable inside, then it will rerender everytime the depepdent variable changes.

## 4. what is SPA>
- SPA stands fro single page application. they are fast
- website build on React are SPA, as page never reloads only the components changes to fill the content
- even for different pages like contact , about pages, we use <Link > component provided by react- router -dom that lets to switch to about component witout refresh.

## 5. What is difference between Client Side Routing and Server side Routing?
- when we server side is used to route  our pages it is called server side rendending done using <a> tag
- when we Client side is used to route  our pages withou refreshing or loading from server  it is called Client side rendending done using <Link> component