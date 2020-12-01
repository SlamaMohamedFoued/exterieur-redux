import React from "react";
import ProductsBanner from "../ProductsBanner/ProductsBanner";
import Categories from "../Categories/categories";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import Footer from "../Footer/Footer";
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
