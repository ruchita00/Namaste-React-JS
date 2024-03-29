import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "hello world from react"
);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am hi tag"),
    React.createElement("h1", {}, "i am hi tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am hi tag"),
    React.createElement("h1", {}, "i am hi tag"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

export default App;
