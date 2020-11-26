import React from "react";
import fans from "./images/fans.svg";
import e from "./images/e.png";

import forward from "./images/forward.png";
const Espace = () => {
  return (
    <div className="espace">
      <div className="espace_content">
        <div className="brown_bg"></div>
        <div className="green_bg"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="e_img"
          width="810"
          height="170"
          viewBox="0 0 810 170"
        >
          <defs>
            <linearGradient
              id="linear-gradient"
              x1="0.462"
              x2="0.5"
              y2="1"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stop-color="#4d302b" />
              <stop offset="1" stop-color="#653d36" />
            </linearGradient>
            <clipPath id="clip-path">
              <rect
                id="Rectangle_44"
                data-name="Rectangle 44"
                width="810"
                height="170"
                fill="url(#linear-gradient)"
              />
            </clipPath>
          </defs>
          <g
            id="Groupe_de_masques_2"
            data-name="Groupe de masques 2"
            clip-path="url(#clip-path)"
          >
            <g
              id="Groupe_23"
              data-name="Groupe 23"
              transform="translate(-34.992 8.552) rotate(-16)"
            >
              <path
                className="e_img_top"
                id="Tracé_58"
                data-name="Tracé 58"
                d="M127.352,34.378V0H0V34.378Z"
                transform="translate(0.001 0)"
                fill="#7daf3f"
              />
              <path
                className="e_img_bottom"
                id="Tracé_59"
                data-name="Tracé 59"
                d="M127.354,77.478H36.8V32.444h90.553V0H0V111.859H127.354Z"
                transform="translate(0 77.96)"
                fill="#7daf3f"
              />
            </g>
          </g>
        </svg>

        <img
          src={fans}
          style={{ width: "71px", height: "47px", zIndex: "2" }}
          alt=""
          className="toolbox_espace"
        />
        <div className="espace_content_text">
          <h2>Configurez votre espace</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidu.
          </p>
        </div>
        <svg
          className="next_img"
          xmlns="http://www.w3.org/2000/svg"
          width="15.958"
          height="15.515"
          viewBox="0 0 15.958 15.515"
        >
          <path
            id="Tracé_20"
            data-name="Tracé 20"
            d="M16.14,10.982H4v1.995H16.14l-5.35,5.35,1.41,1.41,7.758-7.758L12.2,4.222l-1.41,1.41Z"
            transform="translate(-4 -4.222)"
            fill="#fff"
          />
        </svg>
        {/* 
        <img src={forward} alt="" /> */}
      </div>
    </div>
  );
};

export default Espace;
