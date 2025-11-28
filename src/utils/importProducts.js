import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import products from "../components/jsons/products.json";

export const importProductsToFirebase = async () => {
  try {
    console.log("Iniciando importación de productos...");
    const productsCollection = collection(db, "products");
    
    for (const product of products) {
      await addDoc(productsCollection, product);
      console.log(`✓ Producto agregado: ${product.name}`);
    }
    
    console.log("✓ Todos los productos fueron importados exitosamente a Firebase");
    alert("Productos importados correctamente a Firebase");
  } catch (error) {
    console.error("Error al importar productos:", error);
    alert("Error al importar productos. Revisa la consola para más detalles.");
  }
};
