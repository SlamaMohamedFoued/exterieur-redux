import React from "react";
import "./App.css";
import BgMain from "./BgMain";
import Gammes from "./Gammes";
import Espace from "./Espace";
import Realisation from "./Realisation";
import Informations from "./Informations";
import Footer from "./Footer";
import Magazin from "./Magazin";
function App() {
  return (
    <div className="App">
      <BgMain />
      <Gammes />
      <Espace />
      <Realisation />
      <Informations />
      <Magazin />
      <Footer />
    </div>
  );
}

export default App;
