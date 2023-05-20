import React, { useState, useEffect, useRef } from "react";
import s from "./Search.module.scss";
import Link from "next/link";
import { createPortal } from "react-dom";
import AddToCartBtn from "../elements/addToCart/AddToCart";

const Search = ({ onSearch, products }) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const searchRef = useRef(null);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropdownVisible(false);
        setSearchInput("");
      }
    }

    // Here we are using 'click' instead of 'mousedown'
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isDropdownVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isDropdownVisible]);

  const handleInputChange = (event) => {
    console.log("Input value changed");
    setSearchInput(event.target.value);

    if (event.target.value) {
      const results = products.filter((product) =>
        product.title.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
    setIsDropdownVisible(event.target.value !== "");
  };

  const handleSearchClick = () => {
    onSearch(searchInput);
    setSearchResults([]);
    setIsDropdownVisible(false);
  };

  const handleCloseClick = () => {
    setIsDropdownVisible(false);
    setSearchInput("");
  };

  return (
    <>
      <div className={s.search} ref={searchRef}>
        <div className={s.search_input_wrapper}>
          <input
            ref={inputRef}
            className={s.search_input}
            type="text"
            placeholder="Пошук"
            value={searchInput}
            onChange={handleInputChange}
            onMouseDown={(e) => {}}
          />

          {searchInput && (
            <button className={s.closeButton} onClick={handleCloseClick}>
              X
            </button>
          )}
        </div>
        {isDropdownVisible &&
          createPortal(
            <div className={s.overlay}>
              <div className={s.dropdown} ref={dropdownRef}>
                {searchResults.length > 0 ? (
                  searchResults.map((product) => (
                    <Link href={`/product/${product.id}`} key={product.id}>
                      <div
                        className="flex h-25"
                        
                      >
                        <img
                          src={product.image}
                          alt={product.title}
                          width={100}
                          onClick={() => {
                            setIsDropdownVisible(false); // Hide dropdown when link is clicked
                          }}
                        />
                        <div className="ms-12 my-2 w-2-3 grid">
                          <span className="font-bold">{product.title}</span>
                          <span className="text-green-600 text-2xl font-extrabold">
                            {product.price + " USD"}
                          </span>
                          <div className="flex w-2">
                            <AddToCartBtn product={product} />
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className={s.noResults}>No products found</div>
                )}
              </div>
            </div>,
            document.body
          )}
        <button className={s.search_button} onClick={handleSearchClick}>
          Шукати
        </button>
      </div>
    </>
  );
};

export default Search;
