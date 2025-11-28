import "./CartWidget.css";
import { ShoppingCart } from 'lucide-react';
import { Link } from "react-router";
import { useContext } from 'react';
import { CartContext } from '../Contex/cartContex.jsx';

function CartWidget() {
  const { cart } = useContext(CartContext);
  
  // Calcula el total de productos sumando todas las cantidades
  const totalQuantity = cart.reduce((total, product) => total + product.quantity, 0);

  return (
    <>
      <Link to="/cart-details" className="cart-widget">
        <ShoppingCart className="cart-icon" />
        {totalQuantity > 0 && (
          <span className="cart-count">{totalQuantity}</span>
        )}
      </Link>
    </>
  )
}

export default CartWidget;