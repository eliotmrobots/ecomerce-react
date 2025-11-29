
import { useContext } from "react";
import { CartContext } from '../Context/cartContext.jsx';
import CardCart from "../Cards/CardCart.jsx";
import CardCartPage from "../Cards/CardCartPage.jsx";
import CardCartFinal from "../Cards/CardCartFinal.jsx";


function CartDetails() {
    const { cart } = useContext(CartContext);
    console.log(cart);

    return (
      <div>
        {cart.length === 0 ? (
          // Si el carrito está vacío, muestra CardCartPage
          <CardCartPage />
        ) : (
          // Si el carrito tiene productos, muestra las tarjetas de productos
          <>
            {cart.map((product) => (
              <CardCart key={product.id} product={product} />
            ))}
            <CardCartFinal />
          </>
        )}
      </div>
    )
}
export default CartDetails;