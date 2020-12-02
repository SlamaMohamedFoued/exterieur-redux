import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import LogoNavbar from "../LogoNavbar/LogoNavbar";
import SearchNavbar from "../SearchNavbar/SearchNavbar";
import { Link } from "react-router-dom";
import BoutiqueNavbar from "../BoutiqueNavbar/BoutiqueNavbar";
const NavbarHamb = () => {
  const [show, setShow] = useState(false);

  return (
    <nav>
      <div className="navbar_hamburger">
        <LogoNavbar />
        <span>
          <FontAwesomeIcon icon={faBars} onClick={() => setShow(!show)} />
        </span>
      </div>
      <SearchNavbar />

      {show && (
        <div className="hamburger_menu">
          <p
            className="accueil_hamburger_menu  hamburger_menu_item"
            onClick={() => setShow(!show)}
          >
            <Link to="/" className="accueil_hamburger_menu_link">
              Accueil
            </Link>
          </p>
          <p
            className="boutique_hamburger_menu hamburger_menu_item"
            onClick={() => setShow(!show)}
          >
            <Link to="/store" className="accueil_hamburger_menu_link">
              Boutique
            </Link>
          </p>
          <p
            className="config_hamburger_menu hamburger_menu_item"
            onClick={() => setShow(!show)}
          >
            Configurateur
          </p>
          <p
            className="realisation_hamburger_menu hamburger_menu_item"
            onClick={() => setShow(!show)}
          >
            Nos Réalisations
          </p>
          <p
            className="magazin_hamburger_menu hamburger_menu_item"
            onClick={() => setShow(!show)}
          >
            Notre Magazin
          </p>
          <p
            className="contact_hamburger_menu hamburger_menu_item"
            onClick={() => setShow(!show)}
          >
            Contactez-nous
          </p>
        </div>
      )}
    </nav>
  );
};

export default NavbarHamb;
