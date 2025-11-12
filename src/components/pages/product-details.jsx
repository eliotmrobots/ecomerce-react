import { useParams } from "react-router";
import { useEffect, useState } from "react";
import CardDetail from "../cards/CardDetail.jsx";


 function ProductDetails() {
   const { id } = useParams();
   const [product, setProduct] = useState(null);
   useEffect(() => {
   const fetchProduct = async () => {
     const response = await fetch("/src/components/jsons/products.json");
     const data = await response.json();

     const foundProduct = data.find(item => item.id === parseInt(id));
     setProduct(foundProduct);
   };
   fetchProduct();
 }, [id]);
   
   if (!product) {
     return <div>Loading...</div>;
   }
   return (
     <CardDetail product={product} />
   )
 }

    export default ProductDetails;