import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Cart from "./Cart";

const Products = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="products-parent">
      <h2>Products: </h2>

      <Cart cart={cart} setCart={setCart} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>

      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <div className="products-parent-div">
          {products.map((product, index) => {
            return <ProductCard product={product} key={index} cart={cart} setCart={setCart} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>;
          })}
        </div>
      )}
    </div>
  );
};

export default Products;
