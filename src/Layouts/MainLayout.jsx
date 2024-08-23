import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = ({
  username,
  cartCount,
  wishlistCount,
  onLogout,
  onAddToCart,
  onAddToWishlist,
  onLogin,
}) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    onLogout(navigate);
  };

  const handleAddToCart = (productId) => {
    onAddToCart(productId, navigate);
  };

  const handleAddToWishlist = (productId) => {
    onAddToWishlist(productId);
  };

  const handleLogin = (username) => {
    onLogin(username, navigate);
  };

  return (
    <div>
      <Header
        username={username}
        cartCount={cartCount}
        wishlistCount={wishlistCount}
        onLogout={handleLogoutClick}
      />
      <main>
        <Outlet context={{ handleAddToCart, handleAddToWishlist, handleLogin }} />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
