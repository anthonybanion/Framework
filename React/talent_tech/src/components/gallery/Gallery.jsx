// ==========================================
//
// Description: component that displays a gallery of images.
//
// File: Gallery.jsx
// Author: Anthony Bañon
// Created: 2025-05-13
// Last Updated: 2025-05-13
// ==========================================

import "./gallery.css";

function Gallery({ images }) {
  /*
   * Gallery component
   *
   * @param {Array} images Array of image URLs
   * @returns {JSX.Element} Gallery component
   */

  return (
    <section className="mySection">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Imagen ${index + 1}`}
          className="myImage"
        />
      ))}
    </section>
  );
}
export default Gallery;
