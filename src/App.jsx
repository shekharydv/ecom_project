import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";


function App() {
  const [cartCount, setCartCount] = useState(() => {
    const savedCartCount = localStorage.getItem("cartCount");
    return savedCartCount ? parseInt(savedCartCount, 10) : 0;
  });

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return !!localStorage.getItem("token");
  });

  const [username, setUsername] = useState(() => {
    return localStorage.getItem("username");
  });

  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartCount", cartCount);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartCount, cartItems]);

  const handleAddToCart = (productId, navigate) => {
    if (isLoggedIn) {
      if (!cartItems.includes(productId)) {
        setCartItems((prevItems) => [...prevItems, productId]);
        setCartCount((prevCount) => prevCount + 1);
      } else {
        alert("Product already in the cart.");
      }
    } else {
      navigate("/login");
    }
  };

  const handleLogin = (username, navigate) => {
    setIsLoggedIn(true);
    setUsername(username);
    localStorage.setItem("token", "user-token");
    localStorage.setItem("username", username);
    navigate("/");
  };

  const handleLogout = (navigate) => {
    setIsLoggedIn(false);
    setUsername("");
    setCartCount(0);
    setCartItems([]);
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.setItem("cartCount", "0");
    localStorage.setItem("cartItems", "[]");
    navigate("/");
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout
              username={username}
              cartCount={cartCount}
              onLogout={handleLogout}
              onAddToCart={handleAddToCart}
              onLogin={handleLogin}
            />
          }
        >
          <Route index element={<Product />} />
          <Route path="login" element={<Login onLogin={handleLogin} />} />
          <Route path="register" element={<Register />} />
          <Route path="cart" element={<Cart/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
