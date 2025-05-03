// ==========================================
// 
// Description: This is a simple card component whit React-Bootstrap
//
// File: CardRB.jsx
// Author: Anthony Bañon
// Created: 2025-04-28
// Last Updated: 2025-04-28
// ==========================================


import {Card} from 'react-bootstrap';

function CardRB({ title = "Default Title", content = "Default Content", image="./src/assets/images/gato.png" }) {
  /*
   * CardRB Component
   *
   * @param {string} title - The title of the card
   * @param {string} content - The content of the card
   * @param {string} image - The image source for the card
   * @returns {JSX.Element} The rendered card component
   */
  
    return (
    <Card className="card p-3"> 
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {content}
        </Card.Text> 
      </Card.Body>
    </Card>
  );
}
export default CardRB;