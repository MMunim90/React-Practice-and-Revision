import React, { useState } from 'react';

const ProductCard = ({title, description, price, isStock}) => {

    const addToCartHandler = (event) => {
        console.log(event);
        event.target.textContent = "Added";
        event.target.style.backgroundColor = "blue";
        event.target.style.color = "white";
        alert(`${title} added to cart`)
    }

    const [count, setCount] = useState(0);

    console.log(count, setCount);

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
            <button onClick={(event) => addToCartHandler(event)}>Add to Cart</button>
            <button onClick={buyNowHandler}>Buy Now</button>
            <h2>Like this Product? </h2> 
            <button onClick={() => setCount(count+1)}>Like ({count}) 👍</button>
        </div>
    );
};

export default ProductCard;