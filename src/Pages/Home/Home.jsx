import React from "react";
import "./Home.css";
import {
  Navbar,
  Header,
  Featured,
  PropertyList,
  FeaturedProperties,
} from "../../Components";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <div className="hometitle">Browse By Property Type</div>
        <PropertyList />
        <div className="hometitle">Homes guest Love</div>
        <FeaturedProperties />
      </div>
    </>
  );
};

export default Home;
