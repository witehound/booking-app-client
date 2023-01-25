import React from "react";
import "./ListResults.css";
import { SearchItem } from "../index";

const ListResults = () => {
  return (
    <div className="listresult">
      <SearchItem />
      <SearchItem />
      <SearchItem />
      <SearchItem />
    </div>
  );
};

export default ListResults;
