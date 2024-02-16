import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import ErrorComponent from "./src/components/ErrorComponent";
import RestaurantMenu from "./src/components/RestaurantMenu";
// import Grocery from "./src/components/Grocery";
import { Provider } from "react-redux";
import appStore from "./src/Utils/appStore";
import Cart from "./src/components/Cart";
import Footer from "./src/components/Footer";

const Grocery = lazy(() => import("./src/components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  //authentication
  useEffect(() => {
    //make an api call and send username and password
    const data = {
      name: "Ruchita Sagalgile",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <div className="app">
        <Header />
        {/* if path / */}
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
};

//creating configuration
//RouterProvider is provider router to the app

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },

      {
        path: "/grocery",
        element: (
          <Suspense
            fallback={<h1 style={{ marginTop: "100px" }}>Loading...</h1>}
          >
            {" "}
            <Grocery />
          </Suspense>
        ),
      },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
      { path: "/cart", element: <Cart /> },
    ],
    errorElement: <ErrorComponent />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
