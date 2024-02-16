import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="about-container-main" style={{ marginTop: "30px" }}>
      <div className="about-profile-container">
        {/* used ternary condition to Show my profile and Hide my Profile and using nested routing */}
      </div>
      <div className="about-container">
        <div className="about-left">
          <h1>
            Welcome to <br /> The world of <br />
            <span>Tasty & Fresh Food</span>
          </h1>
          <h4>
            "Better you will feel if you eat a <span>Food</span> healthy meal"
          </h4>
        </div>
        <div className="about-right">
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfpZB0_3qGRT0vx7Jlw662goIgQc9en4esg&usqp=CAU"
            }
            alt="Food Image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
