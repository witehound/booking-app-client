import React from "react";
import "./Featured.css";
import { houseOne } from "../../assets";
import { useFetch } from "../../hooks";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Featured = () => {
  const { data, loading, error } = useFetch(
    `${API_BASE_URL}/hotel/countByCity?cities=berlin,london,madrid`
  );

  return (
    <div className="featured">
      {loading ? (
        <>loading....</>
      ) : (
        <>
          <div className="featuredItem">
            <img src={houseOne} alt="house" className="featuredimg" />
            <div className="featuredtitles">
              <h1>Berlin</h1>
              <h1>{data[0]} properties</h1>
            </div>
          </div>
          <div className="featuredItem">
            <img src={houseOne} alt="house" className="featuredimg" />
            <div className="featuredtitles">
              <h1>London</h1>
              <h1>{data[1]} properties</h1>
            </div>
          </div>
          <div className="featuredItem">
            <img src={houseOne} alt="house" className="featuredimg" />
            <div className="featuredtitles">
              <h1>Madrid</h1>
              <h1>{data[2]} properties</h1>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
