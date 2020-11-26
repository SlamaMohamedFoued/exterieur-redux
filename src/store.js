import React from "react";
import ProductsBanner from "./ProductsBanner";
import Categories from "./categories";
import Banner from "./Banner";
import Products from "./Products";
import Footer from "./Footer";
const Store = () => {
  return (
    <div>
      <ProductsBanner />

      <div className="store_container">
        <div>
          <Categories />
          <Banner />
        </div>
        <Products />
      </div>
      <Footer />
    </div>
  );
};

export default Store;
