import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navcontainer">
        <span className="logo">WingedBooking</span>
        <div className="navitems">
          <button className="navbutton">Register</button>
          <button className="navbutton">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
