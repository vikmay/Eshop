import React, { useState } from "react";
import s from "./index.module.scss";

const Sort = ({ onCategorySelect }) => {
  const [activeCategory, setActiveCategory] = useState("all");
  const categories = [
    { label: "Всі Товари", value: "all" },
    { label: "Jewelry", value: "jewelery" },
    { label: "Men's clothing", value: "men's clothing" },
    { label: "Electronics", value: "electronics" },
  ];

  const handleSelectCategory = (category) => {
    setActiveCategory(category.value);
    onCategorySelect(category);
  }

  return (
    <>
      <div className={s.menu_wrapper}>
        <h5 className={s.menu_title}>Товари за категоріями</h5>
        <ul className="flex flex-col gap-2 mt-12">
          {categories.map((category) => (
            <li className="flex" key={category.value}>
              <button 
                onClick={() => handleSelectCategory(category)}
                className={category.value === activeCategory ? "font-extrabold" : ""}
              >
                {category.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sort;
