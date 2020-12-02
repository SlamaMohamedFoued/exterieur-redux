import React from "react";
import bgAccueil from "../../images/bg.svg";
const BgMain = () => {
  return (
    <div
      className="bg_main"
      style={{ backgroundImage: `url(${bgAccueil})` }}
    ></div>
  );
};

export default BgMain;
