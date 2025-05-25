import ProductGallery from "../../components/gallery/ProductGallery";

const products = [
  {
    name: "Silvia",
    description: "Product Owner",
    image: "http://picsum.photos/200/300?random=1",
  },
  {
    name: "Luis",
    description: "UX/UI Designer",
    image: "http://picsum.photos/200/300?random=2",
  },
  {
    name: "Matías",
    description: "Developer",
    image: "http://picsum.photos/200/300?random=3",
  },
  {
    name: "Joaquín",
    description: "Developer",
    image: "http://picsum.photos/200/300?random=4",
  },
  {
    name: "Joaquín",
    description: "Developer",
    image: "http://picsum.photos/200/300?random=5",
  },
  {
    name: "Joaquín",
    description: "Developer",
    image: "http://picsum.photos/200/300?random=6",
  },
  {
    name: "Joaquín",
    description: "Developer",
    image: "http://picsum.photos/200/300?random=7",
  },
  {
    name: "Joaquín",
    description: "Developer",
    image: "http://picsum.photos/200/300?random=8",
  },
  {
    name: "Joaquín",
    description: "Developer",
    image: "http://picsum.photos/200/300?random=9",
  },
];

function Ecommerce() {
  return (
    <>
      <ProductGallery products={products} />
    </>
  );
}

export default Ecommerce;
