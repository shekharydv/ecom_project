
import React from "react";
import { Link } from "react-router-dom";

const Wishlist = ({ wishlistItems }) => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const wishlistProducts = products.filter(product =>
    wishlistItems.includes(product.id)
  );

  return (
    <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
      {wishlistProducts.length > 0 ? (
        wishlistProducts.map((product) => (
          <div key={product.id} className="rounded-md border">
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
              <Link
                to={`/product/${product.id}`}
                className="mt-4 block text-sm font-medium text-blue-600 hover:underline"
              >
                View Details
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">Your wishlist is empty.</p>
      )}
    </div>
  );
};

export default Wishlist;
