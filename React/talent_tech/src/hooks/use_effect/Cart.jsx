import CartCard from "./CartCard";  

function Cart({productsCart}){
    console.log(productsCart);

    const total =productCart.reduce(
        (subTotal, product)=> subTotal + product.price * product.amount, 0
    );

    console.log(total);

    return(
        <div callName="cart-conteiner">
            {productCart.length > 0 ? product.Cart.map(product)=>(
                <CartCar></CartCar>

            )

            }
        </div>
    )
}