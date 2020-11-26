import React, { useEffect, useState } from "react";
import axios from "axios";
const Products = () => {
  const [dataP, setData] = useState(null);
  useEffect(() => {
    axios.get("https://api.mocki.io/v1/af37df01").then((res) => {
      console.log(res);
      setData(res.data);
    });
  }, []);
  return (
    <div className="product_container">
      <div className="filter_products">
        <span className="filter_values filter_values_active ">Nouveautés </span>
        <span className="filter_values"> Populaire </span>
        <span className="filter_values">Meilleures Ventes</span>
      </div>
      <div className="all_products">
        {dataP &&
          dataP.map((el) => (
            <div className="product">
              <div className="product_img_container">
                {/* <img src={el.picture} alt="" className="product_img" /> */}
                <div
                  style={{
                    backgroundImage: `url("${el.picture}")`,
                  }}
                  className="product_img"
                ></div>
              </div>
              <div className="product_desciption_text">
                <p>Lame terrasse bois Pin Sylvestre traité classe 4</p>
                <p
                  style={{
                    color: "#B7B7B7",
                    fontWeight: "700",
                    fontSize: "23px",
                  }}
                >
                  {el.price} ML
                </p>
                <div className="product_description_savoir_plus">
                  <p className="product_savoir_plus">voir détails</p>
                  <svg
                    className="next_img"
                    xmlns="http://www.w3.org/2000/svg"
                    width="15.958"
                    height="15.515"
                    viewBox="0 0 15.958 15.515"
                    style={{ fill: "#7daf3f" }}
                  >
                    <path
                      id="Tracé_20"
                      data-name="Tracé 20"
                      d="M16.14,10.982H4v1.995H16.14l-5.35,5.35,1.41,1.41,7.758-7.758L12.2,4.222l-1.41,1.41Z"
                      transform="translate(-4 -4.222)"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="green_bar"></div>
    </div>
  );
};

export default Products;
