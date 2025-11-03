import React from "react";
import ReactDOM from "react-dom/client";

const number = 1;
const TitleElement = (
  <h1 className="tile" tabIndex="1">
    I am a title functional component {number}
  </h1>
);
// component composition
const HeadingComponent = () => {
  return (
    <div id="container">
      <TitleComponent />
      <h1 className="head" tabIndex="1">
        I am h1 heading functional component
      </h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
