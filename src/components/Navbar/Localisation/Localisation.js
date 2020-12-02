import React from "react";
import map from "../../../images/map.png";
const Localisation = () => {
  return (
    <div className="localisation">
      <div style={{ display: "flex" }}>
        <img src={map} alt="" className="map" />
        <p className="magazin">Notre magazin</p>
      </div>
      <img src={map} alt="" className="map_2" />
    </div>
  );
};

export default Localisation;
