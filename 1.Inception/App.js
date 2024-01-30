const heading = React.createElement(
  "h1",
  { id: "heading" },
  "hello world from react"
);

console.log(heading); //object

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

console.log(parent);

//ReactElement is an object => HTML (broswer understand)
