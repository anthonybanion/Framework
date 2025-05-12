// ==========================================
// 
// Description: This is a simple React component that displays a card 
//              with an image, title, description, and a button.
//
// File: Card.jsx
// Author: Anthony Bañon
// Created: 2025-05-04
// Last Updated: 2025-05-04
// ==========================================



import Button from "../button/Button";
import './card.css';
function Card({title, description, image, buttonText, buttonColor}) {
   /*
    * This function renders a card with an image, title, description, and a button.
    *
    * @param {String} title - Title of the card
    * @param {String} description - Description of the card
    * @param {String} image - URL of the image to display
    * @param {String} buttonText - Text to display on the button
    * @param {String} buttonColor - Background color of the button
    * @param {String} buttonColor - Background color of the button
    * @returns {JSX.Element} Rendered card element
    */
    
    return(
        <div className="myCard">
            <img src={image} alt={title} />
            <h1>{title}</h1>
            <p>{description}</p>
            <Button text={buttonText} color={buttonColor}></Button>
        </div>
    );
}

export default Card;