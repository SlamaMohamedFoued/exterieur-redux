import React, { useState, useEffect } from "react";
import LogoNavbar from "./LogoNavbar/LogoNavbar";
import SearchNavbar from "./SearchNavbar/SearchNavbar";
import Localisation from "./Localisation/Localisation";
import BoutiqueNavbar from "./BoutiqueNavbar/BoutiqueNavbar";
import ContactNavbar from "./ContactNavbar/ContactNavbar";
import ConfigurateurNavbar from "./ConfigurateurNavbar/ConfigurateurNavbar";
import NavbarHamb from "./NavbarHamb/NavbarHamb";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [dimensions, setDimensions] = useState({
    width: 40000,
    height: 40000,
  });
  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <div className="navbar">
      {dimensions.width > 555 ? (
        <>
          <LogoNavbar />
          <SearchNavbar />
          <Localisation />
          <p className="accueil">Accueil</p>
          <BoutiqueNavbar />
          <p className="rea">
            <Link to="/users" className="rea_link">
              Nos réalisations
            </Link>
          </p>
          <ContactNavbar />
          <ConfigurateurNavbar />
        </>
      ) : (
        <NavbarHamb />
      )}
    </div>
  );
};

export default NavBar;
