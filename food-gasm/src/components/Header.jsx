import React, { useEffect, useState } from "react";

import logo from "/assets/images/logo.avif";

export const HeaderComponent = () => {
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