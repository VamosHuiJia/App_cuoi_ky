import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [cart, setCart] = useState([]); // [{product, quantity}]
  const [favorites, setFavorites] = useState([]); // [productId]

  // Cart
  const addToCart = (product) => {
    setCart(prev => {
      const found = prev.find(item => item.product.id === product.id);
      if (found) {
        return prev.map(item => item.product.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { product, qty: 1 }];
    });
  };
  const removeFromCart = (productId) => setCart(prev => prev.filter(item => item.product.id !== productId));
  const updateCartQty = (productId, qty) => setCart(prev => prev.map(item => item.product.id === productId ? { ...item, qty } : item));

  // Favorites
  const addToFavorite = (productId) => setFavorites(prev => prev.includes(productId) ? prev : [...prev, productId]);
  const removeFromFavorite = (productId) => setFavorites(prev => prev.filter(id => id !== productId));

  return (
    <AppContext.Provider value={{ cart, favorites, addToCart, removeFromCart, updateCartQty, addToFavorite, removeFromFavorite }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext); 