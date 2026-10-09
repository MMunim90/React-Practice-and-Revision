import { useState } from "react";
import "./ProductCard.css";

const formatPrice = (value) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);

// "men's clothing" -> "Men's clothing"
const capitalize = (text = "") => text.charAt(0).toUpperCase() + text.slice(1);

export default function ProductCard({ product, cart, setCart, totalPrice, setTotalPrice }) {

  const { title, price, description, category, image, rating } = product;
  const fill = Math.max(0, Math.min(100, (rating.rate / 5) * 100));

  const handleAddCart = (price) => {
    setCart([...cart, product]);
    const newPrice = totalPrice + price;
    setTotalPrice(newPrice);
  }

//   console.log(cart, "cart fro product cart")

const isAlreadyInCart = cart.find((pd) => pd.id === product.id)

  return (
    <article className="prc">
      <div className="prc-media">
        <img className="prc-img" src={image} alt={title} loading="lazy" />
        <span className="prc-category">{capitalize(category)}</span>
      </div>

      <div className="prc-body">
        <h3 className="prc-title">{title}</h3>

        <div
          className="prc-rating"
          role="img"
          aria-label={`Rated ${rating.rate} out of 5 from ${rating.count} reviews`}
        >
          <span className="prc-stars" aria-hidden="true">
            <span className="prc-stars-empty">★★★★★</span>
            <span className="prc-stars-fill" style={{ width: `${fill}%` }}>
              ★★★★★
            </span>
          </span>
          <span className="prc-rating-text">
            {rating.rate} <span className="prc-count">({rating.count})</span>
          </span>
        </div>

        <p className="prc-desc">{description}</p>

        <div className="prc-footer">
          <span className="prc-price">{formatPrice(price)}</span>
          <button
            type="button"
            className="prc-button"
            onClick={() => handleAddCart(price)}
          >
            {isAlreadyInCart ? "Remove from cart" : "Add to cart"}
          </button>
        </div>
      </div>
    </article>
  );
}

/* Usage
import ProductCard from "./ProductCard";

<ProductCard
  product={product}
  onAddToCart={(p) => console.log("Added", p.id)}
/>

// Grid of products:
<div className="prc-grid">
  {products.map((p) => <ProductCard key={p.id} product={p} onAddToCart={addToCart} />)}
</div>
*/