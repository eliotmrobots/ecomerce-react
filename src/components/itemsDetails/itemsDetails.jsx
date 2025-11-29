import "./itemsDetails.css";
import CardsProducts from "../Cards/CardsProducts.jsx";



function ItemsDetails({ product }) {
  return (
    <>
    <CardsProducts product={product} />
    </>
  );
}

export default ItemsDetails;