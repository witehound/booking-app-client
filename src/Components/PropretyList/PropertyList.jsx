import React from "react";
import "./PropertyList.css";
import { houseTwo, houseOne } from "../../assets";

const PropertyList = () => {
  return (
    <div className="plist">
      <div className="plistitem">
        <img src={houseTwo} alt="house" className="plistimg" />
        <h1>Hotels</h1>
        <h2>223 Hotels</h2>
      </div>
      <div className="plistitem">
        <img src={houseOne} alt="house" className="plistimg" />
        <h1>Hotels</h1>
        <h2>223 Hotels</h2>
      </div>
      <div className="plistitem">
        <img src={houseTwo} alt="house" className="plistimg" />
        <h1>Hotels</h1>
        <h2>223 Hotels</h2>
      </div>
      <div className="plistitem">
        <img src={houseOne} alt="house" className="plistimg" />
        <h1>Hotels</h1>
        <h2>223 Hotels</h2>
      </div>
      <div className="plistitem">
        <img src={houseTwo} alt="house" className="plistimg" />
        <h1>Hotels</h1>
        <h2>223 Hotels</h2>
      </div>
    </div>
  );
};

export default PropertyList;
