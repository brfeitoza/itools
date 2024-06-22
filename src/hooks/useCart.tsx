// create a context and hook for handling the cart

import { createContext, useContext, useState } from 'react';
import { Product } from '../services/catalogApi';

type CartContextType = {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

type CartProviderProps = {
  children: React.ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setProducts((prev) => [...prev, product]);
  };

  const removeFromCart = (productId: string) => {
    setProducts((prev) => prev.filter((product) => product.id !== productId));
  };

  const clearCart = () => {
    setProducts([]);
  };

  const value = {
    cart: products,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
