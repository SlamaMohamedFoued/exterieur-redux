import React from "react";

const Categories = () => {
  const menuItems = [
    "Lame Bois",
    "Lame Composite",
    "Panneau Bois",
    "Grille Rigide",
    "Gabion",
  ];
  return (
    <div className="categories_contanier">
      <div className="categories_title_container">
        <p className="categories_title">CATÉGORIES </p>
      </div>

      {menuItems.map((el) => (
        <div
          className={
            el === "Gabion"
              ? "menu_item_container_condition "
              : el === "Lame Bois"
              ? "menu_item_container menu_item_container_active "
              : "menu_item_container"
          }
        >
          <p className="menu_item">{el}</p>
        </div>
      ))}
    </div>
  );
};

export default Categories;
