import React, { useState } from "react";
import ground from "../../../images/ground.png";
import { Link } from "react-router-dom";
const BoutiqueNavbar = () => {
  const [boutique_links, setBoutiqueLinks] = useState([
    {
      text: "Lame commposite",
      etat: false,
    },
    {
      text: "Lame en bois",
      etat: false,
    },
    {
      text: "Panneau bois",
      etat: true,
    },
    {
      text: "Grille rigide",
      etat: false,
    },
    {
      text: "Gabion",
      etat: false,
    },
  ]);
  return (
    <div className="boutique">
      <div
        style={{
          background: `url(${ground})`,
        }}
        className="boutique_sub_menu"
      >
        <ul className="boutique_links">
          {boutique_links.map((el, i) => (
            <li
              key={i}
              className={el.etat ? "boutique_link hovered" : "boutique_link"}
            >
              {el.text}
            </li>
          ))}
        </ul>
        <button className="boutique_button">
          <Link className="boutique_button_link" to="/store">
            Boutique
          </Link>
        </button>
      </div>
    </div>
  );
};

export default BoutiqueNavbar;
