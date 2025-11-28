import { BrowserRouter , Routes,Route } from "react-router";
import Inicio from './components/pages/inicio.jsx'
import Productos from './components/pages/productos.jsx'
import Contacto from './components/pages/contacto.jsx'
import './App.css'
import Container from './components/Container/Container.jsx'
import ProductDetails from './components/pages/product-details.jsx'
import CartDetails from './components/pages/cart-details.jsx'
import NavBar from './components/Navbar/NavBar.jsx'
import CartProvider from "./components/Contex/cartContex.jsx";
import { importProductsToFirebase } from './utils/importProducts';

function App() {
  // Botón temporal para importar productos a Firebase
  const handleImport = () => {
    importProductsToFirebase();
  };

   return (
     <>
      <CartProvider>
      <BrowserRouter>
        <NavBar />
       
        <Routes>
          <Route path="/container" element={<Container />} />
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
          <Route path="/cart-details" element={<CartDetails />} />
        </Routes>
      </BrowserRouter>
      </CartProvider>
     </>
   )
  }
   export default App;