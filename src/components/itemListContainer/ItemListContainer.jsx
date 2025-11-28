
import "./itemListContainer.css";
import ItemsDetails from "../itemsDetails/itemsDetails.jsx";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config.js";


function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try{
        
       const productsFireCollection = collection(db, "products");

       const productsSnapshop = await getDocs(productsFireCollection);

       const productsData = productsSnapshop.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
       }));

        setProducts(productsData);
        setLoading(false);

      } catch (error) {
        console.error("Error fetching products: ", error);
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (loading) {
    return <div>Cargando productos ...</div>;
    }
      
    
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