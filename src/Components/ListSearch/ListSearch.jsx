import React from "react";
import "./ListSearch.css";
import { formatDate } from "../../lib";
import { DateRange } from "react-date-range";

const ListSearch = ({ destination, date, options, openDate, setOpenDate }) => {
  return (
    <div className="listsearch">
      <h1 className="lstitle">Search</h1>
      <div className="lsitem">
        <label>Destination</label>
        <input type="text" placeholder={destination} />
      </div>
      <div className="lsitem">
        <label>Check-In Date</label>
        <span onClick={() => setOpenDate(!openDate)}>
          {" "}
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
            className="lsdaterange"
          />
        ) : null}
      </div>
      <div className="lsitem">
        <label>Options</label>
        <div className="lsoptions">
          <div className="lsoptionitem">
            <span className="lsoptiontext">
              Min Price <small>per night</small>
            </span>
            <input type="number" className="lsoptioninput" />
          </div>
          <div className="lsoptionitem">
            <span className="lsoptiontext">
              Max Price <small>per night</small>
            </span>
            <input type="number" className="lsoptioninput" />
          </div>
          <div className="lsoptionitem">
            <span className="lsoptiontext">Adult</span>
            <input
              type="number"
              className="lsoptioninput"
              placeholder={options.adults}
              min={1}
            />
          </div>
          <div className="lsoptionitem">
            <span className="lsoptiontext">Children</span>
            <input
              type="number"
              className="lsoptioninput"
              placeholder={options.children}
              min={0}
            />
          </div>
          <div className="lsoptionitem">
            <span className="lsoptiontext">Room</span>
            <input
              type="number"
              className="lsoptioninput"
              placeholder={options.roomNumber}
              min={1}
            />
          </div>
        </div>
      </div>
      <div className="lsbuttoncontainner">
        <button className="lsbutton">Search</button>
      </div>
    </div>
  );
};

export default ListSearch;
