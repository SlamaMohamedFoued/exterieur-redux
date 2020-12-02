import React from "react";
import fans from "../../../images/fans.svg";
const ConfigurateurNavbar = () => {
  return (
    <div className="configurateur">
      <div style={{ display: "flex" }}>
        <img src={fans} alt="" className="fans" />
        <p className="configurateur_text"> Configurateur</p>
      </div>

      <img src={fans} alt="" className="fans2" />
    </div>
  );
};

export default ConfigurateurNavbar;
