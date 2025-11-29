import { BrowserRouter , Routes,Route } from "react-router";
import Inicio from './components/pages/inicio.jsx'
import Productos from './components/pages/productos.jsx'
import Contacto from './components/Pages/contacto-page.jsx'
import './App.css'
import ProductDetails from './components/pages/product-details.jsx'
import CartDetails from './components/pages/cart-details.jsx'
import NavBar from './components/Navbar/NavBar.jsx'
import Footer from './components/Footer/Footer.jsx'
import CartProvider from "./components/Context/cartContext.jsx";


function App() {
   return (
     <>
   
      <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
          <Route path="/cart-details" element={<CartDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </CartProvider>
     </>
   )
  }
   export default App;