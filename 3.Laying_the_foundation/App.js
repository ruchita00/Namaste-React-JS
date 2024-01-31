import React from "react";
import ReactDOM from "react-dom/client";

const ele = <span> element of react</span>;

const Title = () => (
  <h1>
    hello title
    {ele}
  </h1>
);

const number = 100;

const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      <h2>{number}</h2>
      <h1 className="heading">React functional comonent</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
