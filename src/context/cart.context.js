import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [addedToCart, setAddedToCart] = useState(() => {
    return JSON.parse(localStorage.getItem('addedToCart') || '[]');
  });

  useEffect(() => {
      localStorage.setItem('addedToCart', JSON.stringify(addedToCart));
    }, [addedToCart]);

  return (
    <CartContext.Provider value={[addedToCart, setAddedToCart]}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart=()=>useContext(CartContext);