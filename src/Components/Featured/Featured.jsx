import React from "react";
import "./Featured.css";
import { houseOne } from "../../assets";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src={houseOne} alt="house" className="featuredimg" />
        <div className="featuredtitles">
          <h1>Dublin</h1>
          <h1>123 properties</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img src={houseOne} alt="house" className="featuredimg" />
        <div className="featuredtitles">
          <h1>Dublin</h1>
          <h1>123 properties</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img src={houseOne} alt="house" className="featuredimg" />
        <div className="featuredtitles">
          <h1>Dublin</h1>
          <h1>123 properties</h1>
        </div>
      </div>
    </div>
  );
};

export default Featured;
