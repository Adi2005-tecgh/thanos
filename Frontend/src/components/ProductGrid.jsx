import React from 'react';

function ProductGrid({ products }) {
  return (
    <div className="product-grid">
      {products.length > 0 ? (
        products.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
        ))
      ) : (
        <p>No products found. Ask our AI assistant for recommendations!</p>
      )}
    </div>
  );
}

export default ProductGrid;