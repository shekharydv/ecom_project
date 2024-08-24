import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import ProductDetails from "./pages/ProductDetails";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

function App() {
  const [cartCount, setCartCount] = useState(() => {
    const savedCartCount = localStorage.getItem("cartCount");
    return savedCartCount ? parseInt(savedCartCount, 10) : 0;
  });

  const [wishlistCount, setWishlistCount] = useState(() => {
    const savedWishlistCount = localStorage.getItem("wishlistCount");
    return savedWishlistCount ? parseInt(savedWishlistCount, 10) : 0;
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

  const [wishlistItems, setWishlistItems] = useState(() => {
    const savedWishlistItems = localStorage.getItem("wishlistItems");
    return savedWishlistItems ? JSON.parse(savedWishlistItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartCount", cartCount);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("wishlistCount", wishlistCount);
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  }, [cartCount, cartItems, wishlistCount, wishlistItems]);

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

  const handleAddToWishlist = (productId) => {
    if (!wishlistItems.includes(productId)) {
      setWishlistItems((prevItems) => [...prevItems, productId]);
      setWishlistCount((prevCount) => prevCount + 1);
    } else {
      alert("Product already in the wishlist.");
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
    setWishlistCount(0);
    setWishlistItems([]);
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.setItem("cartCount", "0");
    localStorage.setItem("cartItems", "[]");
    localStorage.setItem("wishlistCount", "0");
    localStorage.setItem("wishlistItems", "[]");
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
              wishlistCount={wishlistCount}
              onLogout={handleLogout}
              onAddToCart={handleAddToCart}
              onAddToWishlist={handleAddToWishlist}
              onLogin={handleLogin}
            />
          }
        >
          
          {/* Public Routes */}
          <Route index element={<Product />} />
          <Route path="product/:productId" element={<ProductDetails />} />
          <Route path="wishlist" element={<Wishlist wishlistItems={wishlistItems} />} />
          
          {/* Public Routes that require to be non-authenticated */}
          <Route element={<PublicRoute isLoggedIn={isLoggedIn} />}>
            <Route path="login" element={<Login onLogin={handleLogin} />} />
            <Route path="register" element={<Register />} />
          </Route>

          {/* Private Routes */}
          <Route element={<PrivateRoute isLoggedIn={isLoggedIn} />}>
            <Route path="cart" element={<Cart cartItems={cartItems} />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
