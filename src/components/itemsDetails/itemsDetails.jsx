import "./itemsDetails.css";
import CardsProducts from "../cards/cards-products.jsx";



function ItemsDetails({ product }) {
  return (
    <>
    <CardsProducts product={product} />
    </>
  );
}

export default ItemsDetails;