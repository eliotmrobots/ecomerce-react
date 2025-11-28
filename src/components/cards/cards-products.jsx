import { ShoppingBasket } from 'lucide-react';
import ButtonPrimary from "../buttonPrimary/buttonPrimary.jsx";
import { useNavigate } from "react-router";
import { useContext } from 'react';
import { CartContext } from '../Contex/cartContex.jsx';

function CardsProducts({ product }) {
 const navigate = useNavigate();
 const {addCartProduct} = useContext (CartContext);

 const navigateProductDetails = () => {
   navigate(`/product-details/${product.id}`);
 };

const handleAddToCart = () => {
  const newCartProduct = {
    id: product.id,
    name: product.name,
    price: product.price,
    img: product.img,
    quantity: 1
  }
   addCartProduct (newCartProduct)
}





    return (
        <div className="item-card">
      <div className="item-image-container">
      <img src={product.img} alt={product.name}  />
      <h2 className="name-image">{product.name}</h2>
      <span className="price">${product.price}</span>
      <div className="item-buttons-container">
        <ButtonPrimary onClick={handleAddToCart}>
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