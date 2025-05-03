// ==========================================
// 
// Description: This is a simple card component that 
// displays an image, title, and content.
//
// File: MyCard.jsx
// Author: Anthony Bañon
// Created: 2025-04-28
// Last Updated: 2025-04-28
// ==========================================


function Card({ title = "Default Title", content = "Default Content", image="./src/assets/images/gato.png" }) {
  /*
   * MyCard Component
   *
   * @param {string} title - The title of the card
   * @param {string} content - The content of the card
   * @param {string} image - The image source for the card
   * @returns {JSX.Element} The rendered card component
   */
  
  return (
    <div className="card p-3">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
}

export default Card;
