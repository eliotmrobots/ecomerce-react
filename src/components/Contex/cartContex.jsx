import { createContext,useState } from "react";

const CartContext = createContext();

export default function CartProvider({ children }) {
   
    const [cart, setCart] = useState([]);

  const addCartProduct = (newProduct) => {
    const exists = cart.some(product => product.id === newProduct.id);
    if (exists) {
      setCart(cart.map(product => {
        if (product.id === newProduct.id) {
          return {
            ...product,
            quantity: product.quantity + newProduct.quantity
          };
        }
        return product;
      }));
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

    return (
        <CartContext.Provider value={{ cart, addCartProduct, deteleProduct, updateQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext };