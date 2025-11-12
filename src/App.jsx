import { BrowserRouter , Routes,Route } from "react-router";
import './App.css'
import Container from './components/Container/Container.jsx'
import ProductDetails from './components/pages/product-details.jsx'
import CartDetails from './components/pages/cart-details.jsx'

function App() {
   return (
     <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Container />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
          <Route path="/cart-details" element={<CartDetails />} />
        </Routes>
      </BrowserRouter>
     </>
   )
  }
   export default App;