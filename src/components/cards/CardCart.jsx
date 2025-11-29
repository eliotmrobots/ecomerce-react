import "./CardCart.css";
import { CircleX, CircleArrowLeft } from "lucide-react";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary.jsx";
import ItemCount from "../itemCount/itemCount.jsx";
import { useContext } from "react";
import { CartContext } from "../Context/cartContext.jsx";
import { useNavigate } from "react-router";

function CardCart({ product }) {
  const { updateQuantity, deteleProduct } = useContext(CartContext);
  const navigate = useNavigate();

  const less = () => {
    if (product.quantity > 1) {
      updateQuantity(product.id, product.quantity - 1);
    }
  };

  const add = () => {
    if (!product.stock || product.quantity < product.stock) {
      updateQuantity(product.id, product.quantity + 1);
    }
  };

  const handleDelete = () => {
    deteleProduct(product.id);
  };

  const handleBackStore = () => {
    navigate("/productos");
  };

  // Validación para evitar errores
  if (!product || !product.img) {
    return (
      <div className="card-cart-container">
        <p>Producto sin información completa (ID: {product?.id})</p>
      </div>
    );
  }

  return (
    <div className="card-cart-container">
      <div className="card-cart-image">
        <img src={product.img} alt={product.name} />
      </div>
      <div>
        <h2 className="card-cart-title">{product.name}</h2>
        <span className="card-cart-price">${product.price}</span>
        <p className="card-cart-stock">Stock disponible: {product.stock}</p>
        <ItemCount count={product.quantity} less={less} add={add} />
        <span className="card-cart-quantity">
          Subtotal: ${(product.price * product.quantity).toFixed(2)}
        </span>
        <ButtonPrimary
          onClick={handleDelete}
          className="card-cart-delete-button"
        >
          <CircleX />
          borrar del carrito
        </ButtonPrimary>
        <ButtonPrimary
          onClick={handleBackStore}
          className="card-cart-delete-button"
        >
          <CircleArrowLeft />
          Seguir comprando
        </ButtonPrimary>
      </div>
    </div>
  );
}

export default CardCart;
