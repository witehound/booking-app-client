import React from "react";
import "./PropertyList.css";
import {
  houseTwo,
  houseOne,
  houseFour,
  houseThree,
  houseFive,
} from "../../assets";
import { useFetch } from "../../hooks";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const PropertyList = () => {
  const { data, loading, error } = useFetch(
    `${API_BASE_URL}/hotel/countByType`
  );
  const imageType = [houseOne, houseTwo, houseThree, houseFour, houseFive];
  return (
    <div className="plist">
      {loading ? (
        <>Loading..</>
      ) : (
        <>
          {data.map(({ type, count }, index) => (
            <div className="plistitem">
              <img src={imageType[index]} alt="house" className="plistimg" />
              <h1>{type}</h1>
              <h2>{count}</h2>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
