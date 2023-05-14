import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const products = ["LATTE", "CAPPUCCINO", "ESPRESSO", "MOCCACINO", "JOINT"];

const ShoppingCart = (props) => {
  const [productList, setProductList] = useState(products);
  const [cartItems, setCartItems] = useState([]);

  const handleClick = (product) => {
    setCartItems((prevCart) => {
      return [...prevCart, product];
    });
  };
  const handleRemove = (productIndex) => {
    const newCart = cartItems.filter((product, index) => {
      return productIndex !== index;
    });
    setCartItems(newCart);
  };
  return (
    <>
      <div className="sacentri">
        <h1 className="title"> {props.title} </h1>
      </div>
      {productList.map((product, index) => {
        return (
          <div className="sacentri ">
            <h1
              className="kast"
              key={index}
              onClick={() => handleClick(product)}
            >
              {product}
            </h1>
          </div>
        );
      })}
      <div className="sacentri">
        <h2 className="ord">ORDERED</h2>
      </div>
      <div className="tetr">
        <ul className="cart">
          <h6 className="wash">
            (If you want to remove a product, click on it below)
          </h6>
          {cartItems.map((cartItem, index) => {
            return (
              <div className="sacentri arch">
                <li
                  className="dr"
                  key={index}
                  onClick={() => handleRemove(index)}
                >
                  {cartItem}
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <ShoppingCart title="Coffee Shop" />
  </>
);
