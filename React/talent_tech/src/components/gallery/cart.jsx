import ProductCard from "../card/ProductCard";

function Cart({ products }) {
  return (
    <section className="d-flex flex-wrap justify-content-center gap-3">
      {products.map((product) => (
        <div key={product.id}>
          <ProductCard products={product} />
        </div>
      ))}
    </section>
  );
}
export default Cart;
