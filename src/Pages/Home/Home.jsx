import React from "react";
import "./Home.css";
import { Navbar, Header, Featured } from "../../Components";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <div className="hometitle">Browse By Property Type</div>
      </div>
    </>
  );
};

export default Home;
