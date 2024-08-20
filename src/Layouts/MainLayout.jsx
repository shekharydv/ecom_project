import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = ({
  username,
  cartCount,
  onLogout,
  onAddToCart,
  onLogin,
}) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    onLogout(navigate);
  };

  const handleAddToCart = (productId) => {
    onAddToCart(productId, navigate);
  };

  const handleLogin = (username) => {
    onLogin(username, navigate);
  };

  return (
    <div>
      <Header
        username={username}
        cartCount={cartCount}
        onLogout={handleLogoutClick}
      />
      <main>
        <Outlet context={{ handleAddToCart, handleLogin }} />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
