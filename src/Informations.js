import React from "react";
import conseil from "./images/conseil.png";
import floor from "./images/floor.svg";
import tools from "./images/tools.svg";
import stairs from "./images/stairs.svg";
import manfloor from "./images/manfloor.svg";
import otherstairs from "./images/otherstar.svg";
import eStraight from "./images/eStraight.png";

const Informations = () => {
  const data = [
    {
      text: "Conseil pour votre projet",
      image: floor,
      className: "conseil info_commun",
    },
    {
      text: "Livraison & transport",
      image: tools,
      className: "livraison info_commun",
    },
    {
      text: "Notre magazin",
      image: stairs,
      className: "magazin_info info_commun",
    },
    {
      text: "Livraison & transport",
      image: manfloor,
      className: "livraison info_commun",
    },
    {
      text: "Notre magazin",
      image: otherstairs,
      className: "magazin_info info_commun",
    },
  ];
  return (
    <div className="infos">
      <div className="notice">
        <div className="notice_content">
          <h2>
            Notice <br /> & Installation
          </h2>
          <p>
            Avant de commencer, calculez la quantité de bois, de béton et de
            quincaillerie dont vous aurez besoin.
          </p>
        </div>
        <div className="savoir_plus">
          <p>EN SAVOIR PLUS </p>
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
              fill="#fff"
            />
          </svg>
        </div>
      </div>
      {data.map((el) => (
        <div className={el.className}>
          <div
            style={{ backgroundImage: `url(${el.image})` }}
            className="info_img_container"
          ></div>
          <div className="content_info">
            <img src={eStraight} alt="" className="content_info_img" />
            {/* <h2>{el.text}</h2> */}
          </div>
          {/* <svg
            className="content_info_arrow"
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
              fill="#fff"
            />
          </svg> */}
        </div>
      ))}
    </div>
  );
};

export default Informations;
