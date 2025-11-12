
import "./itemListContainer.css";
import ItemsDetails from "../itemsDetails/itemsDetails.jsx";
import { useEffect, useState } from "react";

function ItemListContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("src/components/jsons/products.json");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    })();
  }, []);

  return (
    <div className="item-list-container">
      <h1 className="item-list-container-title">Bienvenidos a nuestra tienda</h1>
      <div className="products-grid">
        {products.map((product) => (
          <ItemsDetails key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;