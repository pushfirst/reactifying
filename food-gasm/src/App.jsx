import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body";
import ContactUSComponent from "./components/ContactUS";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import ShimmerCard from "./components/ShimmerCard";

/**
 * Header
 * - Logo
 * - Nav Bar (Home, About, Contact, Cart)
 * Body
 * - Search bar
 * - Restaurant Container
 *   - Restaurant Card (many cards)
 *     - Image
 *     - Name
 *     - Cuisines
 *     - Ratings
 * Footer
 * - Copyright Info
 * - Address
 * - Contact Info
 * - Links
 */

const Grocery = lazy(() => import("./components/Grocery"));
const AboutComponent = lazy(() => import("./components/AboutComponent"));
const AppLayoutComponent = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayoutComponent />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<ShimmerCard/>}>
            <AboutComponent />,
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <ContactUSComponent />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<ShimmerCard />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:restaurantId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
