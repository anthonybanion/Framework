// ==========================================
//
// Component that fetches and displays a list
// of products from an API.
//
// File: Products.jsx
// Author: Anthony Bañon
// Created: 2025-05-20
// Last Updated: 2025-05-25
// ==========================================

import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          // Check if the response is OK
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Parse the JSON response
        const data = await response.json();
        // Set the products state with the fetched data
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    // Call the fetchProducts function to initiate the API request
    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}
export default Products;
