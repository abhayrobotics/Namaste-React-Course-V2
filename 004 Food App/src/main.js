import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart1 from "./components/Cart1"
import FoodInMind from "./components/FoodInMind";
// import Grocery from "./components/Grocery";

// redux
import { Provider } from "react-redux";
import appStore from "./utils/appStore";



const root = ReactDOM.createRoot(document.getElementById("root"));

const AppRoute = () => {
  return (
    <Provider store={appStore}>
      <Header />
      <Outlet />
    </Provider>
  );
};
// small budle use lazy loading
const Grocery = lazy(() => import("./components/Grocery"));

const newRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppRoute />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h2> fallback loading ...</h2>}>
            {/* <Grocery /> */}
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resid",
        element: <RestaurantMenu />,
      },
      {
        path:"/cart",
        element:<Cart1 />
      },
      {
      path:"/foodInMind/:foodid",
      element:<FoodInMind />
    }
    ],
  },
]);

// root.render(<h1>chekc</h1>)
root.render(<RouterProvider router={newRouter} />);
