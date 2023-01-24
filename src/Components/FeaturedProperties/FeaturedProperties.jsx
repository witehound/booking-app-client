import React from "react";
import "./FeaturedProperties.css";
import { houseTwo, houseOne } from "../../assets";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpitem">
        <img src={houseTwo} alt="house" className="fpimg" />
        <span className="fpname">Name</span>
        <span className="fpcity">city</span>
        <span className="fpprice">Starting from $3000</span>
        <div className="fprating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpitem">
        <img src={houseOne} alt="house" className="fpimg" />
        <span className="fpname">Name</span>
        <span className="fpcity">city</span>
        <span className="fpprice">Starting from $3000</span>
        <div className="fprating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpitem">
        <img src={houseTwo} alt="house" className="fpimg" />
        <span className="fpname">Name</span>
        <span className="fpcity">city</span>
        <span className="fpprice">Starting from $3000</span>
        <div className="fprating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
