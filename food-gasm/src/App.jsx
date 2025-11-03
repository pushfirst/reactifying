import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import { HeaderComponent } from "./components/Header";
import { BodyComponent } from "./components/Body";
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
