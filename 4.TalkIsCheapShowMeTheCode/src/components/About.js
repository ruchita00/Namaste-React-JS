import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor() {
    super();
    console.log("parent constructor ");
  }

  componentDidMount() {
    console.log("parent componeny did mount");
  }
  
  render() {
    console.log("parent render");
    return (
      <div>
        <h1>About</h1>
        <UserClass name={"First "} location={"banglore"} />{" "}
      </div>
    );
  }
}

export default About;
