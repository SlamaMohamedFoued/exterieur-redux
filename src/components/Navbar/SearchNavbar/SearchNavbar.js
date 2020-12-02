import React from "react";
import loop from "../../../images/loop.png";

const SearchNavbar = () => {
  return (
    <div className="search">
      <img src={loop} alt="" className="loop_search_left" />
      <input type="text" className="search_input" placeholder="Rechercher" />
      <img src={loop} alt="" className="loop_search_right" />
    </div>
  );
};

export default SearchNavbar;
