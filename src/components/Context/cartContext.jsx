import { createContext,useState } from "react";

const CartContext = createContext();

export default function CartProvider({ children }) {
   
    const [cart, setCart] = useState([]);

    const addCartProduct = (newProduct) => {
    const exists = cart.find(product => product.id === newProduct.id);
    
    if (exists) {
      const newQuantity = exists.quantity + newProduct.quantity;
      
      // Validar que no exceda el stock
      if (newQuantity > newProduct.stock) {
        alert(`No puedes agregar más de ${newProduct.stock} unidades de ${newProduct.name}`);
        return;
      }
      
      setCart(cart.map(product => {
        if (product.id === newProduct.id) {
          return {
            ...product,
            quantity: newQuantity
          };
        }
        return product;
      }));
      return;
    }
    
    // Si es nuevo, validar que la cantidad no exceda el stock
    if (newProduct.quantity > newProduct.stock) {
      alert(`Solo hay ${newProduct.stock} unidades disponibles`);
      return;
    }
    
    setCart([...cart, newProduct]);
  }

  
  const deteleProduct = (productId) => {
    setCart(cart.filter(product => product.id !== productId));
  }

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(cart.map(product => {
      if (product.id === productId) {
        return { ...product, quantity: newQuantity };
      }
      return product;
    }));
  }

  const clearCart = () => {
    setCart([]);
  }

    return (
        <CartContext.Provider value={{ cart, addCartProduct, deteleProduct, updateQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext };