import React, { useState, useEffect, useContext } from "react";
import { LOGO_COMPANY } from "../Utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  //if no dependency array= useeffect is called on every render
  //if the dependecy array is empty=[]=> then useeffect is called on initial render
  //when the component render at the first time
  //if the dependeccy array is [btnName]= called everytime is updated
  //href reloading whole page so you can used link
  //link is just refresh the component

  /**
   * 2 types of routing the web page
   * clinet side routing: only component getting interchange
   * server side routing:
   */

  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);

  return (
    <div className="header">
      <div className="logo-container">
        <img
          style={{ paddingLeft: "10px", width: "150px" }}
          src={LOGO_COMPANY}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {/* <li>
            <Link to="/grocery">Grocery</Link>
          </li> */}
          <li>
            <i class="fa-solid fa-cart-shopping"></i>
          </li>
          <li>
            <div style={{ display: "flex" }}>
              <button
                onClick={() => {
                  btnName === "Login"
                    ? setBtnName("Logout")
                    : setBtnName("Login");
                }}
                className="login-btn"
              >
                {btnName}
              </button>
              {onlineStatus ? (
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    background: "green",
                    borderRadius: "50%",
                    marginTop: "6px",
                    marginLeft: "5px",
                  }}
                ></div>
              ) : (
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    background: "red",
                    borderRadius: "50%",
                    marginTop: "6px",
                    marginLeft: "5px",
                  }}
                ></div>
              )}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
