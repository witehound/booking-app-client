import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendar,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { formatDate } from "../../lib/date";

const Header = ({ type }) => {
  const navigate = useNavigate();

  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "Selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adults: 1,
    children: 0,
    roomNumber: 1,
  });

  const [destination, setDestination] = useState("");
  const handdleOption = (option, op) => {
    setOptions((prev) => {
      return {
        ...prev,
        [option]:
          op === "i"
            ? options[option] + 1
            : options[option] > 1
            ? options[option] - 1
            : 0,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", {
      state: {
        date,
        destination,
        options,
      },
    });
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headercontainer listmode" : "headercontainer"
        }
      >
        <div className="headerlist">
          <div className="headerlistitem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerlistitem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerlistitem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerlistitem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerlistitem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
          </div>
        </div>

        {type != "list" ? (
          <>
            <h1 className="headerTttle">
              A Life Time Of Discounts? It's Genius
            </h1>
            <p className="headerdesc">
              Get Rewards For Your Travels - Unlock Instant Savings of 10% or
              More With A Free Wingedbookn Account
            </p>
            <button className="headerbutton">Sign In / Register</button>
            <div className="headersearch">
              <div className="headersearchitem">
                <FontAwesomeIcon icon={faBed} className="heeadericon" />
                <input
                  type="text"
                  placeholder="where are you going?"
                  className="headersearchinput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="headersearchitem">
                <FontAwesomeIcon icon={faCalendar} className="heeadericon" />
                <span
                  className="headersearchtext"
                  onClick={() => {
                    setOpenDate(!openDate);
                  }}
                >
                  {`${formatDate(date[0].startDate)}  to  ${formatDate(
                    date[0].endDate
                  )}`}
                </span>
                {openDate ? (
                  <DateRange
                    editableDateInputs={true}
                    moveRangeOnFirstSelection={false}
                    onChange={(item) => setDate([item.Selection])}
                    ranges={date}
                    minDate={new Date()}
                    className="headerdaterange"
                  />
                ) : null}
              </div>
              <div className="headersearchitem">
                <FontAwesomeIcon icon={faPerson} className="heeadericon" />
                <span
                  className="headersearchtext"
                  onClick={() => setOpenOptions(!openOptions)}
                >
                  {`${options.adults} ${
                    options.adults > 1 ? `adults` : `adult`
                  }`}{" "}
                  {`${options.children} ${
                    options.children > 1 ? `children ` : `child `
                  }`}
                  {`${options.roomNumber}`} room
                </span>
                {openOptions ? (
                  <div className="options">
                    <div className="optionitem">
                      <span className="optiontext">Adult</span>
                      <div className="optionscontrol">
                        <button
                          className="optioncounterbutton"
                          onClick={() => handdleOption("adults", "d")}
                        >
                          -
                        </button>
                        <span className="optiontextspan">{options.adults}</span>
                        <button
                          className="optioncounterbutton"
                          onClick={() => handdleOption("adults", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionitem">
                      <span className="optiontext">Children</span>
                      <div className="optionscontrol">
                        <button
                          className="optioncounterbutton"
                          onClick={() => handdleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optiontextspan">
                          {options.children}
                        </span>
                        <button
                          className="optioncounterbutton"
                          onClick={() => handdleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionitem">
                      <span className="optiontext">Room</span>
                      <div className="optionscontrol">
                        <button
                          className="optioncounterbutton"
                          onClick={() => handdleOption("roomNumber", "d")}
                        >
                          -
                        </button>
                        <span className="optiontextspan">
                          {options.roomNumber}
                        </span>
                        <button
                          className="optioncounterbutton"
                          onClick={() => handdleOption("roomNumber", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="headersearchitem">
                <button className="headerbutton" onClick={() => handleSearch()}>
                  Search
                </button>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
