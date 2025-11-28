import './cardCartFinal.css';
import ButtonPrimary from "../buttonPrimary/buttonPrimary.jsx";
import { ShoppingCart } from 'lucide-react';
import { useContext } from 'react';
import { CartContext } from '../Contex/cartContex.jsx';

function CardCartFinal() {
    const { cart } = useContext(CartContext);
    
    // Calcular el total de productos
    const totalQuantity = cart.reduce((total, product) => total + product.quantity, 0);
    
    // Calcular el precio total
    const totalPrice = cart.reduce((total, product) => total + (product.price * product.quantity), 0);

    const handleFinalizePurchase = () => {
        // Aquí puedes agregar la lógica para procesar la compra
        alert('¡Gracias por tu compra! Total: $' + totalPrice.toFixed(2));
        // Podrías también limpiar el carrito o navegar a una página de confirmación
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