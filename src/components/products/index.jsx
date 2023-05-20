import React, { useEffect, useState } from "react";
import s from "./index.module.scss";
import Link from "next/link";
import AddToCartBtn from "../elements/addToCart/AddToCart";
import axios from "@/utils/axios";


const Products = ({ limit, columns, category }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/products");
        setProducts(response.data.slice(0, limit));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [limit]);

  useEffect(() => {
    let updatedProducts = products;

    // Filter by category
    if (category && category !== "all") {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === category
      );
    }

    setFilteredProducts(updatedProducts);
  }, [category, products]);

  const gridColumns = `grid-cols-${columns || 3}`;

  return (
    <>
      <div className={`grid ${gridColumns} gap-24`}>
        {filteredProducts.map((product) => (
          <div
            className="flex flex-col items-center justify-end"
            key={product.id}
          >
            <Link href={`/product/${product.id}`}>
              <div className="flex flex-col items-center">
                <img
                  src={product.image}
                  alt={product.title}
                  width="150"
                  height="150"
                />
                <span className="text-xs font-bold text-center w-3/5 my-2">
                  {product.title}
                </span>
              </div>
            </Link>
            <p className="text-green-600 font-bold">{product.price} USD</p>
            <AddToCartBtn className={`${s.btncolor} text-white w-48 font-bold py-2 px-4 rounded`} product={product} />
          </div>
        ))}
      </div>
    </>
  );
};



export default Products;