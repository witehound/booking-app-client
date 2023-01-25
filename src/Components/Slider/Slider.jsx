import {
  faCircleLeft,
  faCircleRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "./Slider.css";

const Slider = ({ data, setSlideOpen, setSlide, ln, slide }) => {
  const [temp, setTemp] = useState(slide);
  const handleSetSlide = (move) => {
    let newNum;
    if (move === "d") {
      temp === 0 ? (newNum = ln - 1) : (newNum = temp - 1);
    } else if (move === "i") {
      temp === ln - 1 ? (newNum = 0) : (newNum = temp + 1);
    }

    setTemp(newNum);
  };

  useEffect(() => {}, [slide]);

  return (
    <div className="slider">
      <FontAwesomeIcon
        icon={faCircleXmark}
        className="close"
        onClick={() => setSlideOpen(false)}
      />
      <FontAwesomeIcon
        icon={faCircleLeft}
        className="arrow"
        onClick={() => handleSetSlide("d")}
      />
      <div className="sliderwapper">
        <img src={data[temp]} alt="slider image" className="sliderimg" />
      </div>
      <FontAwesomeIcon
        icon={faCircleRight}
        className="arrow"
        onClick={() => handleSetSlide("i")}
      />
    </div>
  );
};

export default Slider;
