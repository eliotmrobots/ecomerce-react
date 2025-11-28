
import { useContext } from "react";
import { CartContext } from '../Contex/cartContex.jsx';
import CardCart from "../cards/CardCart.jsx";
import CardCartPage from "../cards/cardCartPage.jsx";
import CardCartFinal from "../cards/cardCartFinal.jsx";


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