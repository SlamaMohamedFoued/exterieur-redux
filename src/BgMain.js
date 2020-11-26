import React from "react";
import bgAccueil from "./images/bg.svg";
import back from "./images/back.png";
import forward from "./images/forward.png";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import FiberManualRecordOutlinedIcon from "@material-ui/icons/FiberManualRecordOutlined";

const BgMain = () => {
  return (
    <div
      className="carousel_main"
      style={{ backgroundImage: `url(${bgAccueil})` }}
    ></div>
  );
};

export default BgMain;
