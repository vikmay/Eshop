// Header.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Search from "../../components/search/Search";
import { GiShoppingCart } from "react-icons/gi";
import { useRouter } from "next/router";
import CartBtn from "../../components/elements/CartBtn";

const Header = () => {
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const handleSearch = (query) => {
    // handle the search query here
  };

  return (
    <>
      <div className="header_wrapper">
        <header className="flex justify-between items-center py-2">
          <Link href="/">
            <h1 className={router.pathname === "/" ? "active" : ""}>eSHOP</h1>
          </Link>
          <Search onSearch={handleSearch} products={products} />
          <nav className="flex flex-wrap gap-5">
            <ul className="flex flex-wrap gap-5 items-center mb-0">
              <li className={router.pathname === "/catalog" ? "active" : ""}>
                <Link href="/catalog">Каталог</Link>
              </li>
              <li className={router.pathname === "/delivery" ? "active" : ""}>
                <Link href="/delivery">Доставка</Link>
              </li>
              <li className={router.pathname === "/payment" ? "active" : ""}>
                <Link href="/payment">Оплата</Link>
              </li>
            </ul>

            <div className="relative cursor-pointer">
              <Link href="/cart">
                <CartBtn />
              </Link>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Header;
