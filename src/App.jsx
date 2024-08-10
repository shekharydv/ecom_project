import React from "react";
import Header from "./pages/Header";
import Product from "./pages/Product";


function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <Header cartCount={cartCount} />
      <Product onAddToCart={handleAddToCart} />
    </div>
  );
}

export default App;