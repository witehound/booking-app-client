import React from "react";
import "./SearchItem.css";
import { houseOne } from "../../assets";

const SearchItem = () => {
  return (
    <>
      <div className="si">
        <img src={houseOne} alt="house" className="siimage" />
        <div className="sidesc">
          <h2 className="sititle">Tower streets apartment</h2>
          <span className="sidistance">500m from center</span>
          <span className="sitaxiop">Free Airport taxi</span>
          <span className="sisubtitle">
            Studio apartmenet with air conditioner
          </span>
          <span className="sifeatures">
            Entire studio | 1 bathroom | 21m 1 full bed
          </span>
          <span className="sicancelop">Free Cancellation</span>
          <span className="sicancelopsub">
            You can cancel later, so lock in the great price today!
          </span>
        </div>
        <div className="sidetails">
          <div className="sirating">
            <span>Excellent</span>
            <button>8.9</button>
          </div>
          <div className="detailstext">
            <span className="siprice">$ 3000</span>
            <span className="sitaxop">Includes taxs and fees</span>
            <button className="siavalability">See availability</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchItem;
