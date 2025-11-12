import { ShoppingBasket } from 'lucide-react';
import ItemCount from "../itemCount/itemCount.jsx";
import ButtonPrimary from "../buttonPrimary/buttonPrimary.jsx";
import "./CardDetail.css"; 

function CardDetail({ product }) {
  return (
    <div className="card-detail"> 
      <div className="card-detail-image">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="card-detail-info">
        <h2 className="card-detail-title">{product.name}</h2>
        <p className="card-detail-description">{product.description}</p>
        <span className="card-detail-price">${product.price}</span>
        <ItemCount stock={product.stock} />
        <ButtonPrimary>
          <ShoppingBasket />
          Agregar al carrito
        </ButtonPrimary>
      </div>
    </div>
  );
}

export default CardDetail;