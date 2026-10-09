import React, { useState } from "react";
import ProductCard from "./ProductCard";

const Cart = ({ cart, setCart, totalPrice, setTotalPrice }) => {

  const handleRemoveProduct = (product) => {
    const newCartItem = cart.filter((cartItem) => cartItem != product);

    setCart(newCartItem);

    const newTotalPrice = newCartItem.reduce(
      (total, item) => total + item.price,
      0,
    );

    setTotalPrice(newTotalPrice);
  };

  return (
    <div className="cart">
      <h2>Cart: </h2>
      <h3>Total Price: {totalPrice.toFixed(2)} $</h3>

      <div className="products-parent-div">
        {cart.map((product, index) => {
          return (
            <div onClick={() => handleRemoveProduct(product)} key={index}>
              <ProductCard product={product} cart={cart} setCart={setCart} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
