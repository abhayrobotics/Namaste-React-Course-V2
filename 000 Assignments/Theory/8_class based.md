# Class bAsed Component

## 1. How do you create nested Router react-router-dom  configurations ?
    import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
        
    const newRouter = createBrowserRouter([
        {
            path:'/',
            element:<AppRoute />,
            errorElement: <Error />,
            children:[
                {
                    path:'/',
                    element:<Body />
                },
                {
                    path:"/about",
                    element:<About />
                },
                {
                    path:"/contact",
                    element:<Contact />
                },
                {
                    path:"/restaurant/:resid",
                    element:<RestaurantMenu />
                }
            ]
        },
        
    ])

    root.render(<RouterProvider router={newRouter} />)

## 2. craeteHashRouter and createMemoryRouter ?
- 

## 3. what is the order of life cycle method in class based component ?
- parent Constructor
- parent render
- child constructor
- child render
- component didMount
- parent componentDidmount

## 4.why do we use component did mount ?
- component did mount is used when we want to render something after the main render is complete
- like Api call
- in this way the main page is loaded and dont have to wait for fetching api which takes a longer time and may harm user experience

## 5. why do we use component Will MOunt ? examples.
- Component will mount is used to remove or clear the processing which is not required when the component is not shown.
- since we have a single page applicatio our page never reloads and hence component may keep using the memory and processing even when it is not rendering currently.
- ex    
    componentDidMount(){
        this.timer = setInterval(()=>{
            console.log("time")
        },1000)
    }

    componentWillUnMount(){
        clearInterval(this.timer)
    }

- when the page or when the compoent is rendering in current display, we want to stop our Setinterval, as it is class based component, every time page is renredered the a new instance is instantiated so, our interval will be displayed, 2-3 times ,(no. of time pages is switched back)
- to clear this probelm we unmount te interval when we let the page or component.

## 6. why do we use Super(props) in constructor ?
     constructor(props){
        super(props)
        // code
    }
- when ever we want to use this.props/ this.method  or the argument/method which points to the same class we are in.
- we have to super(props) as per react.

## 7. Why cant we have callback function of useEffect async ?
- useeffect function does not return anything or returns a cleanup function
- the whole purpose of callig async funtion is to get some data , hence we use a different approah we call another asyc function from our use effect

    useEffect(){

        fetchData();
    }
    const fetchData = async ()=>{
        const data = await fetch(APi cll)
        const json = await data.json()
        setVariable(json)
    }