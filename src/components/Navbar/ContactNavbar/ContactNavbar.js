import React from "react";
import ground from "../../../images/ground.png";
const ContactNavbar = () => {
  return (
    <div className="contact">
      <p className="contactez_nous">Contactez-nous</p>
      <div className="contact_content">
        <div>
          <img src={ground} alt="" style={{ width: "100%" }} />
        </div>
        <div className="form_text">
          <p>
            Hey! Pour toute informations ou suggestions, Merci de remplir le
            formulaire suivant
          </p>
          <div className="form_contact">
            <input
              type="text"
              className="form_inputs"
              placeholder="Nom & Prénom"
            />
            <input type="text" className="form_inputs" placeholder="E-mail" />

            <label className="textarea_label">Message</label>
            <br />
            <textarea name="" id=""></textarea>
          </div>
        </div>
        <button className="send_button">Envoyez</button>
      </div>
    </div>
  );
};

export default ContactNavbar;
