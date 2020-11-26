import React from "react";
import eBanner from "./images/e-banner.svg";
import toolbox from "./images/toolbox.svg";
import arrowRight from "./images/arrowRight.svg";

function Banner() {
  return (
    <div className="banner_container">
      <img src={toolbox} alt="" style={{ marginBottom: "30px" }} />
      <p className="configurer">Configurez votre espace</p>
      <p className="configurer_desc">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidu.
      </p>
      <img src={eBanner} alt="" className="e_banner" />
      <img src={arrowRight} alt="" className="arrow_right" />
    </div>
  );
}

export default Banner;
