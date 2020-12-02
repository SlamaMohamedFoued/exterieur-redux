import React, { useState } from "react";
import LogoNavbar from "./LogoNavbar/LogoNavbar";
import SearchNavbar from "./SearchNavbar/SearchNavbar";
import Localisation from "./Localisation/Localisation";
import BoutiqueNavbar from "./BoutiqueNavbar/BoutiqueNavbar";
import ContactNavbar from "./ContactNavbar/ContactNavbar";
import ConfigurateurNavbar from "./ConfigurateurNavbar/ConfigurateurNavbar";

const NavBar = () => {
  return (
    <div className="navbar">
      <LogoNavbar />
      <SearchNavbar />
      <Localisation />
      <p className="accueil">Accueil</p>
      <BoutiqueNavbar />
      <p className="rea">Nos réalisations</p>
      <ContactNavbar />
      <ConfigurateurNavbar />
    </div>
  );
};

export default NavBar;
