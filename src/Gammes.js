import React, { useRef } from "react";
import img from "./images/gamme1.png";
import gamme2 from "./images/gamme2.png";
import gamme3 from "./images/gamme3.png";
import gamme4 from "./images/gamme4.png";
import gamme5 from "./images/gamme5.png";

const Gammes = () => {
  const gammes = [
    {
      name: "Lame commposite",
      img: img,
    },
    {
      name: "Lame en bois",
      img: gamme2,
    },
    {
      name: "Panneau bois",
      img: gamme3,
    },
    {
      name: "Grille rigide",
      img: gamme4,
    },
    {
      name: "Gabion",
      img: gamme5,
    },
  ];

  return (
    <div className="gammes">
      <div className="list_gammes">
        {gammes.map((el) => (
          <div className="gamme">
            <div className="gamme_block">
              <div
                style={{
                  backgroundColor: "#f8f8f8",
                  minHeight: "12px",
                  width: "100%",
                  zIndex: "10",
                }}
              ></div>
              <div
                style={{ backgroundImage: `url(${el.img})` }}
                className="gamme_img_contnaier"
              ></div>
              <p className="gamme_title">{el.name}</p>
            </div>
            <p>{el.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gammes;
