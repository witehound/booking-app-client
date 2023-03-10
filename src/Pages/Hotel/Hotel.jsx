import React, { useState } from "react";
import { Navbar, Header, MailList, Footer, Slider } from "../../Components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { houseOne, houseTwo } from "../../assets";
import "./Hotel.css";
const Hotel = () => {
  const [slide, setSlide] = useState(0);
  const [slideOpen, setSlideOpen] = useState(false);
  const data = [houseOne, houseTwo, houseOne, houseTwo, houseOne, houseTwo];

  const handleSlideOpen = (s) => {
    setSlide(s);
    setSlideOpen(true);
  };
  return (
    <>
      <Navbar />
      <Header type={"list"} />
      {slideOpen ? (
        <Slider
          data={data}
          setSlideOpen={setSlideOpen}
          setSlide={setSlide}
          ln={data.length}
          slide={slide}
        />
      ) : null}
      <div className="hotelcontainer">
        <div className="hotelWrappeer">
          <button className="booknow">Reserve or Book NoW!</button>
          <h1 className="hoteltitle">Grand Hotel</h1>
          <div className="hoteladdress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>elon st 125 ny</span>
          </div>
          <span className="hoteldistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelpricehighlight">
            Book a stay over $144 at this property and get a free airport taxi
          </span>
          <div className="hotelimages">
            {data.map((hotel, i) => (
              <div className="hotelimageswrapper">
                <img
                  src={hotel}
                  alt="hotelimage"
                  className="htimage"
                  onClick={() => handleSlideOpen(i)}
                />
              </div>
            ))}
          </div>
          <div className="hoteldetails">
            <div className="hoteldetailstext">
              <h1 className="hoteltitle">Stay in thee heart of new york</h1>
              <p className="hoteldesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                nihil neque consequuntur magnam in impedit dolorum corrupti
                porro dolore. Consequatur quae labore accusamus obcaecati odit
                deleniti neque! Ratione, sed ullam.
              </p>
            </div>
            <div className="hoteldetailsprice">
              <h1>Perfect for 9 nights stay</h1>
              <span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea,
                cumque harum alias molestias neque nesciunt aut consequatur
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reseerve or book now!</button>
            </div>
          </div>
        </div>
      </div>
      <MailList />
      <Footer />
    </>
  );
};

export default Hotel;
