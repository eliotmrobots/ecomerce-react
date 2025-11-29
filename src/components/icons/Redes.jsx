import "./rede.css";
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

function Redes() {
    return (
        <div className="redes-container">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="redes-link">
                <Facebook className="redes-icon" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="redes-link">
                <Instagram className="redes-icon" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="redes-link">
                <Twitter className="redes-icon" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="redes-link">
                <Youtube className="redes-icon" />
            </a>
        </div>
    );
}

export default Redes;