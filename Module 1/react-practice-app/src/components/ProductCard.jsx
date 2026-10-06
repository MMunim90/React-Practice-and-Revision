import React, { useState } from 'react';

const ProductCard = ({title, description, price, isStock}) => {

    const [isAddedCart, setIsAddedCart] = useState(false);

    const addToCartHandler = (event) => {
        console.log(event);
        // event.target.textContent = "Added";
        // setIsAddedCart(isAddedCart ? false : true)
        setIsAddedCart(!isAddedCart)
        // event.target.style.backgroundColor = "blue";
        // event.target.style.color = "white";
        alert(`${title} added to cart`)
    }

    const [count, setCount] = useState(0);

    // console.log(count, setCount);

    const buyNowHandler = () => {
        alert(`${title} purchased successfully!!!`)
    }
    return (
        <div className='product-card'>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Price: {price}</p>
            <p>In Stock: {isStock ? "✅" : "❌"}</p>

            {/* <button onClick={addToCartHandler}>Add to Cart</button> */}
            <button onClick={(event) => addToCartHandler(event)} className={`${isAddedCart ? "add-to-cart-active" : "add-to-cart"}`}>{isAddedCart ? "Added" : "Add to Cart"}</button>
            <button onClick={buyNowHandler} className={`add-to-cart`}>Buy Now</button>
            <h2>Like this Product? </h2> 
            <button onClick={() => setCount(count+1)} className={`add-to-cart`}>Like ({count}) 👍</button>
        </div>
    );
};

export default ProductCard;