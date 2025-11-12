import { ShoppingBasket } from 'lucide-react';
import ItemCount from "../itemCount/itemCount.jsx";
import ButtonPrimary from "../buttonPrimary/buttonPrimary.jsx";
import { useNavigate } from "react-router";

function CardsProducts({ product }) {
 const navigate = useNavigate();
 const navigateProductDetails = () => {
   navigate(`/product-details/${product.id}`);
 };
    return (
        <div className="item-card">
      <div className="item-image-container">
      <img src={product.img} alt={product.name}  />
      <h2 className="name-image">{product.name}</h2>
      <span className="price">${product.price}</span>
      <ItemCount stock={product.stock} />
      <div className="item-buttons-container">
        <ButtonPrimary>
          <ShoppingBasket className="basket-icon" />
          Agregar al carrito
        </ButtonPrimary>
        <ButtonPrimary onClick={navigateProductDetails}>
          Detalle del producto
        </ButtonPrimary>
        </div>
      </div>
    </div>
    )
}

export default CardsProducts;