import React from 'react';

const ProductCard = ({title, price, isStock}) => {
    return (
        <div className='product-card'>
            <h2>Title: {title}</h2>
            <p>Price: {price}</p>
            <p>In Stock: {isStock ? "✅" : "❌"}</p>
        </div>
    );
};

export default ProductCard;