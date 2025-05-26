import ProductGallery from "../../components/gallery/ProductGallery";
import Cart from "../../components/gallery/cart";
import BootstrapNav from "../../components/navbar/BootstrapNav";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useState } from "react";
import { useEffect } from "react";

const navItems = [
  { id: 1, label: "Products Gallery" },
  { id: 2, label: "Cart" },
];

function PreDelivery() {
  const [seccion, setSeccion] = useState("Product Gallery");
  const [cartItems, setCartItems] = useState([]);
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

  const addToCart = (product) => {
    // Check if the product is already in the cart
    const existingProduct = cartItems.find((item) => item.id === product.id);
    if (existingProduct) {
      // If it exists, update the quantity
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        )
      );
    } else {
      // If it doesn't exist, add it to the cart with quantity 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const direct = () => {
    switch (seccion) {
      case "Product Gallery":
        return <ProductGallery products={products} onAddToCart={addToCart} />;
      case "Cart":
        return <Cart products={cartItems} />;
      default:
        return <ProductGallery products={products} onAddToCart={addToCart} />;
    }
  };

  return (
    <>
      <Header />
      <BootstrapNav items={navItems} onSelection={setSeccion} />
      {direct()}
      <Footer />
    </>
  );
}

export default PreDelivery;
