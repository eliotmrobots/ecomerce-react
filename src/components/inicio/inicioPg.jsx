import './inicio.css';
import logo from '../../assets/img/logo.png';
import { useNavigate } from 'react-router';


function InicioPg () {
    const navigate = useNavigate();

   

    const handleImageClick = () => {
        navigate('/productos');
    };

    return (
        <div className="inicio-container">
            <h1 className="inicio-title">bienvenido depptechno</h1>
            <p className='inicio-p'>la mejor tienda para studio de grabacion</p>
            <img 
                className='inicio-image' 
                src={logo} 
                alt="Logo" 
                onClick={handleImageClick}
            />
           
                 <p className='inicio-p'>explorar productos</p>
        
        </div>
    )
}

export default InicioPg;