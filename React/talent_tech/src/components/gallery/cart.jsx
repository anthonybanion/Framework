import CartCard from "../card/CartCard";

function Cart({ products }) {
  return (
    <section className="container d-flex flex-column align-items-center gap-3">
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="w-100 d-flex justify-content-center">
            <CartCard products={product} />
          </div>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
    </section>
  );
}
export default Cart;
