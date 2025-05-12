// ==========================================
// 
// Description: This is a simple React component that displays a list of products.
//
// File: ProductList.jsx
// Author: Anthony Bañon
// Created: 2025-05-04
// Last Updated: 2025-05-04
// ==========================================


import "./list.css";

function ProductList({products}){
    /*
     * This function renders a list of products.
     *
     * @param {Array} products Array of product names
     * @returns {JSX.Element} Rendered list of products
     */
    
    return(
        <ul className="myList">
            {/* Check if products array is empty and display a message if true */}
            { products.length > 0 ? products.map(product=>(
                <li key={product}>{product}</li>
            )) : <li>No products available</li>}
        </ul>
    );
}

export default ProductList