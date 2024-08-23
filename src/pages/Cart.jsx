import React, { useEffect, useState } from "react";

const Cart = ({ cartItems }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Filter products that are in the cart
  const cartProducts = products.filter(product =>
    cartItems.includes(product.id)
  );

  return (
    <div className="mx-auto max-w-7xl px-2 py-10">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartProducts.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cartProducts.map((product) => (
            <div key={product.id} className="border rounded-md p-4">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-700">${product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
