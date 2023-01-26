import React from "react";
import "./PropertyList.css";
import { houseTwo, houseOne } from "../../assets";
import { useFetch } from "../../hooks";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const PropertyList = () => {
  const { data, loading, error } = useFetch(
    `${API_BASE_URL}/hotel/countByType`
  );
  return (
    <div className="plist">
      {loading ? (
        <>Loading..</>
      ) : (
        <>
          <div className="plistitem">
            <img src={houseTwo} alt="house" className="plistimg" />
            <h1>{data[0].type}</h1>
            <h2>{data[0].count}</h2>
          </div>
          <div className="plistitem">
            <img src={houseOne} alt="house" className="plistimg" />
            <h1>{data[1].type}</h1>
            <h2>{data[1].count}</h2>
          </div>
          <div className="plistitem">
            <img src={houseTwo} alt="house" className="plistimg" />
            <h1>{data[2].type}</h1>
            <h2>{data[2].count}</h2>
          </div>
          <div className="plistitem">
            <img src={houseOne} alt="house" className="plistimg" />
            <h1>{data[3].type}</h1>
            <h2>{data[3].count}</h2>
          </div>
          <div className="plistitem">
            <img src={houseTwo} alt="house" className="plistimg" />
            <h1>{data[4].type}</h1>
            <h2>{data[4].count}</h2>
          </div>
        </>
      )}
    </div>
  );
};

export default PropertyList;
