import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./pages/Header";
import Product from "./pages/Product";
import Login from "./pages/Login";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAddToCart = () => {
    if (isLoggedIn) {
      setCartCount((prevCount) => prevCount + 1);
    } else {
      window.location.href = "/login";
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(true);

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
