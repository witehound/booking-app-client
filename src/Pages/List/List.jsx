import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Navbar,
  Header,
  Footer,
  ListSearch,
  SearchItem,
} from "../../Components";
import "./List.css";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);
  return (
    <>
      <Navbar />
      <Header type={"list"} />
      <div className="listcontainer">
        <div className="listwrapper">
          <ListSearch
            destination={destination}
            date={date}
            options={options}
            openDate={openDate}
            setOpenDate={setOpenDate}
          />
          <SearchItem />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default List;
