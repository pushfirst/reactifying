import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ShimmerCard from "./ShimmerCard";
import useRestaurantMenu from "../utilities/useRestaurantMenu";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();
 const restaurantInfo = useRestaurantMenu(restaurantId);

  if (restaurantInfo === null) return <ShimmerCard />;

  const { name, cuisines, costForTwoMessage } =
    restaurantInfo?.info || {};
  const { dishes } =
    restaurantInfo?.categories[0] || {};
  console.log(dishes);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")||''} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {dishes.map((dish) => (
          <li key={dish.id}>
            {dish.name} - {dish.defaultPrice || dish.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
