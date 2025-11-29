import Redes from "../icons/redes.jsx";
import "./contacto.css";

function Contacto () {
    return (
        <div className="contacto-container">
            <h1 className="contacto-title">Contacto</h1>
            <p className="contacto-text">Para consultas y soporte, por favor envíanos un correo a: contacto@ejemplo.com</p>
            <p className="contacto-text">También puedes llamarnos al teléfono: +123 456 7890</p>
            <p className="contacto-text">Estamos ubicados en Calle Falsa 123, Ciudad Ejemplo</p>
            <Redes />
        </div>
    )
}

export default Contacto;