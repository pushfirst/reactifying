import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import {RestaurantCardComponent} from "./RestaurantCard";
import { fetchRestaurants } from "../../swiggy-live-api-call";
import dummyData from "../../dummy-feed.json";

const restaurants = JSON.parse(JSON.stringify(dummyData.restaurants));

export const BodyComponent = () => {
//   const [restaurants, setRestaurants] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   useEffect(() => {
//     (async () => {
//       try {
//         const data = await fetchRestaurants("26.83730", "80.91650");
//         setRestaurants(data);
//       } catch (err) {
//         console.error("Fetch failed:", err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     })();
//   }, []);
  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="restaurants-container">
        {restaurants.map((data) => {
          return (
            <RestaurantCardComponent key={data.info.id} data={data.info} />
          );
        })}
      </div>
    </div>
  );
};