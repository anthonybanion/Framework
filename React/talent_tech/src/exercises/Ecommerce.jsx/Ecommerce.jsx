import ProductGallery from "../../components/gallery/ProductGallery";
import Cart from "../../components/gallery/cart";
import BootstrapNav from "../../components/navbar/BootstrapNav";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useState } from "react";
const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    description:
      "Smooth and responsive wireless mouse with ergonomic design and long battery life.",
    image: "http://picsum.photos/200/300?random=1",
    price: 100,
  },
  {
    id: 2,
    name: "Keyboard",
    description:
      "RGB-backlit keyboard with tactile switches, ideal for gaming and productivity.",
    image: "http://picsum.photos/200/300?random=2",
    price: 200,
  },
  {
    id: 3,
    name: "HD Webcam",
    description:
      "Full HD webcam with built-in microphone, perfect for video calls and streaming.",
    image: "http://picsum.photos/200/300?random=3",
    price: 300,
  },
  {
    id: 4,
    name: "Headphones",
    description:
      "Noise-isolating over-ear headphones with Bluetooth 5.0 and 20-hour battery life.",
    image: "http://picsum.photos/200/300?random=4",
    price: 400,
  },
  {
    id: 5,
    name: "Portable SSD (1TB)",
    description:
      "Ultra-fast external solid-state drive with USB-C connectivity and compact size.",
    image: "http://picsum.photos/200/300?random=5",
    price: 500,
  },
  {
    id: 6,
    name: "USB-C Hub",
    description:
      "Multi-port USB-C hub with HDMI, USB 3.0, SD card reader, and power delivery.",
    image: "http://picsum.photos/200/300?random=6",
    price: 600,
  },
  {
    id: 7,
    name: "Smartwatch",
    description:
      "Fitness-focused smartwatch with heart rate monitoring, GPS, and water resistance.",
    image: "http://picsum.photos/200/300?random=7",
    price: 700,
  },
  {
    id: 8,
    name: "Laptop Stand ",
    description:
      "Adjustable aluminum laptop stand for better ergonomics and cooling.",
    image: "http://picsum.photos/200/300?random=8",
    price: 800,
  },
  {
    id: 9,
    name: "Netbook",
    description:
      'Lightweight netbook with 11.6" screen, 64GB storage, and Windows 11 pre-installed.',
    image: "http://picsum.photos/200/300?random=9",
    price: 900,
  },
];

const navItems = [
  { id: 1, label: "Products Gallery" },
  { id: 2, label: "Cart" },
];

function Ecommerce() {
  const [seccion, setSeccion] = useState("Product Gallery");
  const [cartItems, setCartItems] = useState([]);

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

export default Ecommerce;
