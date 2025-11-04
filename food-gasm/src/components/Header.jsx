import React, { useEffect, useState } from "react";

import logo from "/assets/images/logo.avif";

const HeaderComponent = () => {
  // let buttonName = "Login";
  const [buttonName, setButtonName] = useState("Login");
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
          <button className="login-button" onClick={(() => {
            buttonName === "Login" ? setButtonName("Logout") : setButtonName("Login");
            })}>{buttonName}</button>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;