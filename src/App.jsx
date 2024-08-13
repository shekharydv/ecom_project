import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Register from "./pages/Register";


function App() {
  const [cartCount, setCartCount] = useState(() => {
    const savedCartCount = localStorage.getItem("cartCount");
    return savedCartCount ? parseInt(savedCartCount, 10) : 0;
  });

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return !!localStorage.getItem("token");
  });

  const [username, setUsername] = useState(() => {
    return localStorage.getItem("username") || "";
  });

  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartCount", cartCount);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartCount, cartItems]);

  const handleAddToCart = (productId) => {
    if (isLoggedIn) {
      if (!cartItems.includes(productId)) {
        setCartItems((prevItems) => [...prevItems, productId]);
        setCartCount((prevCount) => prevCount + 1);
      } else {
        alert("Product Cart ME hai.");
      }
    } else {
      window.location.href = "/login";
    }
  };

  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
    localStorage.setItem("token", "user-token");
    localStorage.setItem("username", username);
    window.location.href = "/";
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setCartCount(0);
    setCartItems([]);
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.setItem("cartCount", "0");
    localStorage.setItem("cartItems", "[]");
    window.location.href = "/";
  };

  return (
    <Router>
      <Header
        cartCount={cartCount}
        username={username}
        onLogout={handleLogout} // Pass handleLogout to the Header component
      />
      <Routes>
        <Route path="/" element={<Product onAddToCart={handleAddToCart} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </Router>
  );
}

export default App;
