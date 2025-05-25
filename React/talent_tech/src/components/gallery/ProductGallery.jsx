// ==========================================
//
// This file contains the ProductGallery component
// which displays a gallery of product cards.
//
// File: ProductGallery.jsx
// Author: Anthony Bañon
// Created: 2025-05-25
// Last Updated: 2025-05-25
// ==========================================

import ProductCard from "../card/ProductCard";

function ProductGallery({ products }) {
  return (
    <section className="d-flex flex-wrap justify-content-center gap-3">
      {products.map((product, index) => (
        <div key={index}>
          <ProductCard
            title={product.name}
            image={product.image}
            description={product.description}
            buttonText="Explore"
          />
        </div>
      ))}
    </section>
  );
}
export default ProductGallery;
