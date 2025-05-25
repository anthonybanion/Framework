import ProductGallery from "../../components/gallery/ProductGallery";
import Cart from "../../components/gallery/cart";
import BootstrapNav from "../../components/navbar/BootstrapNav";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useState } from "react";
const products = [
  {
    id: 1,
    name: "Silvia",
    description: "Product Owner",
    image: "http://picsum.photos/200/300?random=1",
    price: 100,
  },
  {
    id: 2,
    name: "Luis",
    description: "UX/UI Designer",
    image: "http://picsum.photos/200/300?random=2",
    price: 200,
  },
  {
    id: 3,
    name: "Matías",
    description: "Developer",
    image: "http://picsum.photos/200/300?random=3",
    price: 300,
  },
  {
    id: 4,
    name: "Joaquín",
    description: "Developer",
    image: "http://picsum.photos/200/300?random=4",
    price: 400,
  },
  {
    id: 5,
    name: "Joaquín",
    description: "Developer",
    image: "http://picsum.photos/200/300?random=5",
    price: 500,
  },
  {
    id: 6,
    name: "Joaquín",
    description: "Developer",
    image: "http://picsum.photos/200/300?random=6",
    price: 600,
  },
  {
    id: 7,
    name: "Joaquín",
    description: "Developer",
    image: "http://picsum.photos/200/300?random=7",
    price: 700,
  },
  {
    id: 8,
    name: "Joaquín",
    description: "Developer",
    image: "http://picsum.photos/200/300?random=8",
    price: 800,
  },
  {
    id: 9,
    name: "Joaquín",
    description: "Developer",
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
  const direct = () => {
    switch (seccion) {
      case "Product Gallery":
        return <ProductGallery products={products} />;
      case "Cart":
        return <Cart products={products} />;
      default:
        return <ProductGallery products={products} />;
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
