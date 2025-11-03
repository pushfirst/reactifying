import React, { useEffect, useState } from "react";


export const RestaurantCardComponent = ({ data }) => {
  if (!data) return null;
  const IMG_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
  const {
    name,
    cuisines,
    locality,
    areaName,
    avgRating,
    sla,
    cloudinaryImageId,
    costForTwoMessage,
    aggregatedDiscountInfoV3,
  } = data;
  return (
    <article className="restaurant-card">
      <div className="media">
        <img
          className="restaurant-logo"
          src={IMG_URL + cloudinaryImageId}
          alt="McDonald's"
        />
        <div className="ribbon">
          {aggregatedDiscountInfoV3?.header +
            aggregatedDiscountInfoV3?.subHeader}
        </div>
      </div>
      <div className="restaurant-info">
        <h3>{name}</h3>
        <div className="meta-row">
          <span className="cost-for-two">{costForTwoMessage}</span>
          <span className="rating-pill">{avgRating}</span>
          <span className="dot"></span>
          <span className="meta-time">{sla.slaString}</span>
        </div>
        {cuisines.map((cuisine) => {
          return (
            <span key={cuisine} className="cuisines">
              {`${cuisine}💠`}
            </span>
          );
        })}

        <p className="locality">{locality}</p>
        <span className="dot"></span>
        <p className="locality">{areaName}</p>
      </div>
    </article>
  );
};