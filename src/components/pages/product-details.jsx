import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config.js";
import CardDetail from "../Cards/CardDetail.jsx";


 function ProductDetails() {
   const { id } = useParams();
   const [product, setProduct] = useState(null);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
   const fetchProduct = async () => {
      try {
        console.log("Buscando producto con ID:", id);
        // Buscar el producto por el campo 'id' dentro del documento
        const productsRef = collection(db, "products");
        const q = query(productsRef, where("id", "==", parseInt(id)));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0];
          const productData = { firebaseId: doc.id, ...doc.data() };
          console.log("Producto encontrado:", productData);
          setProduct(productData);
        } else {
          console.log("Producto no encontrado con ID:", id);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener el producto:", error);
        setLoading(false);
      }
   };
   fetchProduct();
 }, [id]);
   
   if (loading) {
     return <div>Loading...</div>;
   }
   if (!product) {
     return <div>Producto no encontrado</div>;
   }
   return (
     <CardDetail product={product} />
   )
 }

    export default ProductDetails;