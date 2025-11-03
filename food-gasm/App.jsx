import React from "react";
import ReactDOM from "react-dom/client";

import logo from "/assets/images/logo.avif";
import restaurantLogoKfc from "/assets/images/restaurant-logo-kfc.avif";

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

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="image-container">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home🏠</li>
          <li>About🪧</li>
          <li>Contact US🤙</li>
          <li>Cart 🛒</li>
        </ul>
      </div>
    </div>
  );
};
const RestaurantCardComponent = () => {
  return (
    <article className="restaurant-card">
      <div className="media">
        <img className="restaurant-logo" src={restaurantLogoKfc} alt="McDonald's" />
        <div className="ribbon">ITEMS AT ₹117</div>
      </div>
      <div className="restaurant-info">
        <h3>McDonald's</h3>
        <div className="meta-row">
          <span className="rating-pill">★ 4.4</span>
          <span className="dot"></span>
          <span className="meta-time">30–40 mins</span>
        </div>
        <p className="cuisines">American</p>
        <p className="locality">Hazratganj</p>
      </div>
    </article>
  );
};
const BodyComponent = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="restaurants-container">
        <RestaurantCardComponent />
        <RestaurantCardComponent />
        <RestaurantCardComponent />
        <RestaurantCardComponent />
        <RestaurantCardComponent />
        <RestaurantCardComponent />
        <RestaurantCardComponent />
        <RestaurantCardComponent />
        <RestaurantCardComponent />
        <RestaurantCardComponent />
        <RestaurantCardComponent />
        <RestaurantCardComponent />
      </div>
    </div>
  );
};
const AppLayoutComponent = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <BodyComponent />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayoutComponent />);
