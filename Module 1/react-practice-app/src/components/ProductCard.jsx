import React from 'react';

const ProductCard = ({title, description, price, isStock}) => {
    return (
        <div className='product-card'>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Price: {price}</p>
            <p>In Stock: {isStock ? "✅" : "❌"}</p>
        </div>
    );
};

export default ProductCard;