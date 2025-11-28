import './inicio.css';
import logo from '../../assets/img/logo.png';
import { useNavigate } from 'react-router';


function InicioPg () {
    const navigate = useNavigate();

    const handleExploreProducts = () => {
        navigate('/productos');
    };
    return (
        <div className="inicio-container">
            <h1 className="inicio-title">bienvenido depptechno</h1>
            <p className='inicio-p'>la mejor tienda de tecnologia</p>
             <img className='inicio-image' src={logo} alt="Logo" />
            <button
            className="inicio-button" onClick={handleExploreProducts}>
                explorar productos</button>
        </div>
    )
}

export default InicioPg;