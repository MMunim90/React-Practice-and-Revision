import React from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const products = [
    {
      name: "Wireless Headphones",
      description: "High-quality wireless headphones with noise cancellation.",
      price: 59.99,
      isStock: true,
    },
    {
      name: "Mechanical Keyboard",
      description: "RGB mechanical keyboard with blue switches.",
      price: 79.99,
      isStock: true,
    },
    {
      name: "Gaming Mouse",
      description: "Ergonomic gaming mouse with adjustable DPI.",
      price: 39.99,
      isStock: true,
    },
    {
      name: "USB-C Hub",
      description: "Multi-port USB-C hub with HDMI and USB 3.0 support.",
      price: 29.99,
      isStock: false,
    },
    {
      name: "Smart Watch",
      description: "Fitness smartwatch with heart-rate and sleep tracking.",
      price: 99.99,
      isStock: true,
    },
    {
      name: "Laptop Stand",
      description: "Adjustable aluminum laptop stand for comfortable working.",
      price: 34.99,
      isStock: false,
    },
  ];

  return (
    <div className="products-parent">
      <h2>All Products</h2>

      {products.length === 0 ? (
        <h2>Products Not Available</h2>
      ) : (
        products.map((product, index) => {
          // console.log(product)
          return (
            <ProductCard key={index}
              title={product.name}
              description={product.description}
              price={product.price}
              isStock={product.isStock}
            />
          );
        })
      )}
    </div>
  );
};

export default Products;
