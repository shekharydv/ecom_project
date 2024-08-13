import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import Product from "./pages/Product";
import Login from "./pages/Login";

function App() {
  // Initialize the cart count and items from localStorage if they exist
  const [cartCount, setCartCount] = useState(() => {
    const savedCartCount = localStorage.getItem("cartCount");
    return savedCartCount ? parseInt(savedCartCount, 10) : 0;
  });

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return !!localStorage.getItem("token");
  });

  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  useEffect(() => {
    // Save cart count to localStorage whenever it changes
    localStorage.setItem("cartCount", cartCount);

    // Save cart items to localStorage whenever they change
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartCount, cartItems]);

  const handleAddToCart = (productId) => {
    if (isLoggedIn) {
      if (!cartItems.includes(productId)) {
        setCartItems((prevItems) => [...prevItems, productId]);
        setCartCount((prevCount) => prevCount + 1);
      } else {
        alert("This product is already in the cart.");
      }
    } else {
      window.location.href = "/login";
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    // Save the login state to localStorage
    localStorage.setItem("token", "user-token");
    window.location.href = "/";
  };

  return (
    <Router>
      <Header cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<Product onAddToCart={handleAddToCart} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
      </Routes>
    </Router>
  );
}

export default App;
