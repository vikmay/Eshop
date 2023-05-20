import React, { useState } from "react";
import Products from "@/components/products";
import Sort from "@/components/sort";
import Search from "@/components/search/Search";

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState({ label: "Всі Товари", value: "all" });

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div className="grid grid-cols-4 mt-6">
        <div className="col-span-1">
          <Sort onCategorySelect={handleCategorySelect} />
        </div>
        <div className="col-span-3 grid-cols-3">
          <h1 className="text-3xl font-bold mb-6 col-span-3">{selectedCategory.label}</h1>
          <Products category={selectedCategory.value} />
        </div>
      </div>
    </>
  );
};

export default Catalog;
