import React from "react";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ products: data });
      });
  }

  handleAddToCart = () => {
    this.props.onAddToCart();
  };

  render() {
    const { products } = this.state;

    return (
      <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        {products.map((product) => (
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
              <div className="mt-5 flex items-center space-x-2">
                <span className="block text-sm font-semibold">Size: </span>
                <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                  8 UK
                </span>
                <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                  9 UK
                </span>
                <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                  10 UK
                </span>
              </div>
              <button
                onClick={this.handleAddToCart}
                type="button"
                className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Product;
