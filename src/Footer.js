import React from "react";
import Logo from "./Logo";
const Footer = () => {
  const liens = [
    "Configurateur",
    "Notre magasin",
    "Notice et installation",
    "Livraison Transport",
  ];
  const contacts = [
    {
      contact_title: "Adress",
      contact_content:
        "3 rue du champ de verger \n Allonnes, Pays de la Loire, France ",
    },
    {
      contact_title: "Telephone",
      contact_content: "+33 2 43 57 00 87 ",
    },
  ];
  return (
    <div className="footer">
      <Logo />
      <div>
        <h5 className="footer_headers">Lien Utiles</h5>
        {liens.map((el) => (
          <p className="footer_infos">{el}</p>
        ))}
      </div>
      <div>
        <h5 className="footer_headers">Nous contacter</h5>
        {contacts.map((el) => (
          <div>
            <p className="contact_title">{el.contact_title} :</p>
            <p className="footer_infos_contact ">{el.contact_content}</p>
          </div>
        ))}
      </div>
      <div>
        <h5 className="footer_headers">Horaires</h5>
        <p className="days">Lundi à Vendredi</p>
        <div className="horaires">
          <svg
            className="clock"
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 19 19"
          >
            <path
              id="time"
              d="M161.961,159.843l2.439,1.408a.5.5,0,0,1,.181.682.494.494,0,0,1-.681.184l-2.48-1.432a1.5,1.5,0,1,1-1.419-2.6V153.5a.5.5,0,1,1,1,0v4.582a1.5,1.5,0,0,1,.961,1.758ZM160.5,169a9.5,9.5,0,1,0-9.5-9.5A9.5,9.5,0,0,0,160.5,169Zm0-1a8.5,8.5,0,1,0-8.5-8.5A8.5,8.5,0,0,0,160.5,168Z"
              transform="translate(-151 -150)"
              fill="#6f6c6c"
              fill-rule="evenodd"
            />
          </svg>
          <p>7:30 - 12:00</p>
        </div>
        <div className="horaires">
          <svg
            className="clock"
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 19 19"
          >
            <path
              id="time"
              d="M161.961,159.843l2.439,1.408a.5.5,0,0,1,.181.682.494.494,0,0,1-.681.184l-2.48-1.432a1.5,1.5,0,1,1-1.419-2.6V153.5a.5.5,0,1,1,1,0v4.582a1.5,1.5,0,0,1,.961,1.758ZM160.5,169a9.5,9.5,0,1,0-9.5-9.5A9.5,9.5,0,0,0,160.5,169Zm0-1a8.5,8.5,0,1,0-8.5-8.5A8.5,8.5,0,0,0,160.5,168Z"
              transform="translate(-151 -150)"
              fill="#6f6c6c"
              fill-rule="evenodd"
            />
          </svg>
          <p>13:30 - 18:00</p>
        </div>
        <p className="days">
          Samedi <br />{" "}
          <span className="additional_info">
            {" "}
            (Fermé les samedis de janvier et février)
          </span>
        </p>
        <div className="horaires">
          <svg
            className="clock"
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 19 19"
          >
            <path
              id="time"
              d="M161.961,159.843l2.439,1.408a.5.5,0,0,1,.181.682.494.494,0,0,1-.681.184l-2.48-1.432a1.5,1.5,0,1,1-1.419-2.6V153.5a.5.5,0,1,1,1,0v4.582a1.5,1.5,0,0,1,.961,1.758ZM160.5,169a9.5,9.5,0,1,0-9.5-9.5A9.5,9.5,0,0,0,160.5,169Zm0-1a8.5,8.5,0,1,0-8.5-8.5A8.5,8.5,0,0,0,160.5,168Z"
              transform="translate(-151 -150)"
              fill="#6f6c6c"
              fill-rule="evenodd"
            />
          </svg>
          <p>9:00 - 12:00</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
