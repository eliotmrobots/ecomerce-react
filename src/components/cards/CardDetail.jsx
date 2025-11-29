import { ShoppingBasket } from "lucide-react";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary.jsx";
import "./CardDetail.css";
import { useContext } from "react";
import { CartContext } from "../Context/cartContext.jsx";
import { useNavigate } from "react-router";

function CardDetail({ product }) {
  const { addCartProduct } = useContext(CartContext);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    const newCartProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
      img: product.img,
      stock: product.stock,
      quantity: 1,
    };
    addCartProduct(newCartProduct);

    navigate("/cart-details");
  };

  return (
    <div className="card-detail">
      <div className="card-detail-image">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="card-detail-info">
        <h2 className="card-detail-title">{product.name}</h2>
        <p className="card-detail-description">{product.description}</p>
        <span className="card-detail-price">${product.price}</span>
        <ButtonPrimary onClick={handleAddToCart}>
          <ShoppingBasket />
          Agregar al carrito
        </ButtonPrimary>
      </div>
    </div>
  );
}

export default CardDetail;
