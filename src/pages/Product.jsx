import React from "react";
import { useOutletContext }  from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Product = () => {
  const navigate = useNavigate();
  const { handleAddToCart, handleAddToWishlist } = useOutletContext();
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`); 
  };

  return (
    <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
      {products.map((product) => (
        <div key={product.id} className="rounded-md border"  onClick={() => handleProductClick(product.id)}>
          <img
            src={product.image}
            alt={product.title}
            className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
          />
          <div className="p-4">
            <h1 className="inline-flex items-center text-lg font-semibold">
              {product.title}
            </h1>
            <p className="mt-2 text-gray-500">${product.price}</p>
            <div className="mt-4 space-y-2">
              <button
                onClick={() => handleAddToCart(product.id)}
                type="button"
                className="w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80"
              >
                Add to Cart
              </button>
              <button
                onClick={() => handleAddToWishlist(product.id)}
                type="button"
                className="w-full rounded-sm bg-red-500 px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-400"
              >
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
