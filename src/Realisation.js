import React from "react";
import garden from "./images/garden.png";
import eStraight from "./images/eStraight.png";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import FiberManualRecordOutlinedIcon from "@material-ui/icons/FiberManualRecordOutlined";
const Realisation = () => {
  return (
    <div className="realisation">
      <h2 className="realisation_title">Nos réalisations</h2>

      <div className="reali_image_container">
        <img src={garden} alt="" className="garden_img" />
        <img src={eStraight} alt="" className="eStraight" />
      </div>
      <div className="realisation_desciption">
        <h2 className="realisation_desciption_title"> Panneau bois</h2>
        <p className="realisation_desciption_text">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
        </p>
        <div className="realisation_functionalities">
          <div className="next_previous_rea">
            <svg
              id="arrow-left-line"
              xmlns="http://www.w3.org/2000/svg"
              width="31.183"
              height="31.183"
              viewBox="0 0 31.183 31.183"
            >
              <path
                id="Tracé_19"
                data-name="Tracé 19"
                d="M0,0H31.183V31.183H0Z"
                fill="none"
              />
              <path
                id="Tracé_20"
                data-name="Tracé 20"
                d="M8.974,13.029H24.789v2.6H8.974L15.943,22.6l-1.837,1.837L4,14.328,14.106,4.222l1.837,1.837Z"
                transform="translate(1.197 1.264)"
                fill="#000"
              />
            </svg>
          </div>
          <div className="dots_rea">
            <FiberManualRecordIcon
              style={{
                color: "#7daf3f",
                fontSize: "1rem",
                margin: "0px 3px 0 3px",
              }}
              className="dot_green"
            />
            <FiberManualRecordOutlinedIcon
              className="dot_grey"
              style={{
                color: "#b7b7b7",
                fontSize: "1rem",
                margin: "0px 3px 0 3px",
              }}
            />
            <FiberManualRecordOutlinedIcon
              className="dot_grey"
              style={{
                color: "#b7b7b7",
                fontSize: "1rem",
                margin: "0px 3px 0 3px",
              }}
            />
            <FiberManualRecordOutlinedIcon
              className="dot_grey"
              style={{
                color: "#b7b7b7",
                fontSize: "1rem",
                margin: "0px 3px 0 3px",
              }}
            />
          </div>
          <div className="next_previous_rea">
            <svg
              id="arrow-left-line"
              xmlns="http://www.w3.org/2000/svg"
              width="31.183"
              height="31.183"
              viewBox="0 0 31.183 31.183"
            >
              <path
                id="Tracé_19"
                data-name="Tracé 19"
                d="M31.183,0H0V31.183H31.183Z"
                fill="none"
              />
              <path
                id="Tracé_20"
                data-name="Tracé 20"
                d="M19.815,13.029H4v2.6H19.815L12.846,22.6l1.837,1.837L24.789,14.328,14.683,4.222,12.846,6.059Z"
                transform="translate(1.197 1.264)"
                fill="#1f1f1f"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Realisation;
