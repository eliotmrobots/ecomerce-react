import './CardCartPage.css';
import { useNavigate } from 'react-router';
function CardCartPage() {
    const navigate = useNavigate();

    const handleReturnToStore = () => {
        navigate('/productos');
    }


    return (
        <div className="card-cart-page-container">  
            <h1 className="card-cart-page-title">TU CARRITO ESTA VACIO</h1>
            <button onClick={handleReturnToStore}>Volver a la tienda</button>
        </div>
    )
}

export default CardCartPage;
