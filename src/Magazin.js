import React from "react";
import glass from "./images/glass.svg";
import working from "./images/working.svg";
import eStraight from "./images/eStraight.png";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import FiberManualRecordOutlinedIcon from "@material-ui/icons/FiberManualRecordOutlined";
const Magazin = () => {
  return (
    <div className="magazin_informations">
      <div className="magazin_informations_container">
        <div className="magazin_image_container">
          <img src={glass} alt="" className="glass_img" />
          <img src={eStraight} alt="" className="eStraight" />
        </div>
        <div className="magazin_desciption">
          <div>
            <img
              src={working}
              alt=""
              className="img_working"
              style={{ width: "100%" }}
            />
          </div>

          <div className="magazin_desciption_text">
            <p>
              Dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr.
            </p>
            <div className="magazin_description_savoir_plus">
              <p className="magazin_savoir_plus">EN SAVOIR PLUS</p>
              <svg
                className="next_img"
                xmlns="http://www.w3.org/2000/svg"
                width="15.958"
                height="15.515"
                viewBox="0 0 15.958 15.515"
                style={{ fill: "#7daf3f" }}
              >
                <path
                  id="Tracé_20"
                  data-name="Tracé 20"
                  d="M16.14,10.982H4v1.995H16.14l-5.35,5.35,1.41,1.41,7.758-7.758L12.2,4.222l-1.41,1.41Z"
                  transform="translate(-4 -4.222)"
                />
              </svg>
            </div>
          </div>
          {/* <h2 className="realisation_desciption_title"> Panneau bois</h2>
        <p className="realisation_desciption_text">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
        </p> */}
        </div>
        <h2 className="magazin_title">Notre magasin</h2>
      </div>

      <div className="green_bar"></div>
    </div>
  );
};

export default Magazin;
