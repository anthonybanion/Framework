import Message from "../../hooks/use_effect/Message";
import Products from "../../hooks/use_effect/Products";
import ProductsFetch from "../../hooks/use_effect/ProductsFetch";

function UseEffectPage() {
  return (
    <>
      <Message />
      <Products />
      <ProductsFetch />
    </>
  );
}

export default UseEffectPage;
