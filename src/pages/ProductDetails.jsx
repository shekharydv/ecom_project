import React from "react";
import "../pages/main.css";
class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
      /*  {
          title: "shekhar",
          price: "2000",
          desc: "shekharisthis",
        },

        {
          title: "bhavesh",
          price: "2300",
          desc: "shek3bjkddharisthis",
        },

        {
          title: "Rahul",
          price: "2307s0",
          desc: "shek3bjkddharisthis",
        },*/
      ],
      cartCount: 0,
    };

    this.getProducts =  this.getProducts.bind(this);
    
  }

  componentDidMount(){
    console.log("Mounted");
    this.getProducts();
} 


  getProducts(){
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=>{
      this.setState({products:data})
    });
  }
  
  
  handleAddToCart = () => {
    this.setState((prevState) => ({
      cartCount: prevState.cartCount + 1,
    }));
  };

  render() {
    const {products, cartCount } = this.state;

    
    return (
      <>
        <header className="site-header">
          <div className="logo">
            <a href="#">MyShop</a>
          </div>
          <nav className="site-navigation">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="cart-icon">
            <a href="#">
              <img src="cart-icon.png" alt="Cart" />
              <span className="cart-count">{cartCount}</span>
            </a>
          </div>
        </header>

        {
        products.map((values) => {
                    return(
        <div className="product-grid">
          <div className="product-item">
            <h3>{values.title}</h3>
            <p>{values.price}</p>
            <p>{values.price}</p>
            <button onClick={this.handleAddToCart}>Add to Cart</button>
          </div>
        </div>
                    );
                  })}  
  
      </>
    );
  }
}

export default ProductDetails;
