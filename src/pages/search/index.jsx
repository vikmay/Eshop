import axios from "@/utils/axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const SearchPage = () => {
  // State to hold products data
  const [products, setProducts] = useState([]);

  const router = useRouter(); // Initialize router
  const query = router.query.q; // Get the search query from the URL

  // Effect to fetch the search results when the page loads or when the query changes
  useEffect(() => {
    if (query) {
      axios
        .get(`/products/category/${query}`)

        .then((response) => setProducts(response.data));
    }

    // Cleanup the previous search results when the query changes
  }, [query]);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
};

export default SearchPage;
