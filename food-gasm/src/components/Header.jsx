import React, { useState } from "react";

import logo from "/assets/images/logo.avif";
import { Link } from "react-router-dom";
import useNetworkStatus from "../utilities/useNetworkStatus";

const HeaderComponent = () => {
  // let buttonName = "Login";
  const [buttonName, setButtonName] = useState("Login");
  const onlineStatus = useNetworkStatus();
  return (
    <div className="header">
      <div className="image-container">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>{onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home🏠</Link>
          </li>
          <li>
            <Link to="/about">About🪧</Link>
          </li>
          <li>
            <Link to="/contact">Contact US🤙</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery🤙</Link>
          </li>
          <li>Cart 🛒</li>
          <button
            className="login-button"
            onClick={() => {
              buttonName === "Login"
                ? setButtonName("Logout")
                : setButtonName("Login");
            }}
          >
            {buttonName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
