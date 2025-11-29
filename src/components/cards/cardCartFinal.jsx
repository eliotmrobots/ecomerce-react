import "./cardCartFinal.css";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary.jsx";
import { ShoppingCart } from "lucide-react";
import { useContext, useState } from "react";
import { CartContext } from "../Context/cartContext.jsx";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../../firebase/config";

function CardCartFinal() {
  const { cart, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);

  // Calcular el total de productos
  const totalQuantity = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  // Calcular el precio total
  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const handleFinalizePurchase = async () => {
    try {
      const order = {
        buyer: {
          name: "Cliente",
          email: "cliente@ejemplo.com",
          phone: "+123456789",
        },
        items: cart.map((product) => ({
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: product.quantity,
        })),
        total: totalPrice,
        date: Timestamp.now(),
      };

      const ordersCollection = collection(db, "orders");
      const docRef = await addDoc(ordersCollection, order);

      // mensaje detallado de compra al usuario
      const itemsList = cart
        .map((p) => `${p.name} (x${p.quantity})`)
        .join(", ");
      const message = `¡Compra exitosa!
        Numer de orden: ${docRef.id}
        Productos comprados: ${itemsList}
        Total pagado: $${totalPrice.toFixed(2)}
        
        Gracias por tu compra.`;

      setOrderId(docRef.id);
      clearCart();
      alert(message);
    } catch (error) {
      console.error("Error al procesar la compra:", error);
      alert("Error al procesar la compra. Por favor intenta nuevamente.");
    }
  };

  return (
    <div className="card-cart-final-container">
      <h2 className="card-cart-final-title">Resumen de tu compra</h2>

      <div className="card-cart-final-summary">
        <div className="summary-row">
          <span>Total de productos:</span>
          <strong>{totalQuantity}</strong>
        </div>

        <div className="summary-row">
          <span>Subtotal:</span>
          <strong>${totalPrice.toFixed(2)}</strong>
        </div>

        <div className="summary-row">
          <span>Envío:</span>
          <strong>Gratis</strong>
        </div>

        <div className="summary-row total">
          <span>Total a pagar:</span>
          <strong>${totalPrice.toFixed(2)}</strong>
        </div>
      </div>

      <ButtonPrimary
        className="card-cart-final-button"
        onClick={handleFinalizePurchase}
      >
        <ShoppingCart />
        Finalizar compra
      </ButtonPrimary>
    </div>
  );
}

export default CardCartFinal;
