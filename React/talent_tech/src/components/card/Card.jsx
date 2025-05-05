import Button from "../button/Button";
import './card.css';
function Card({title, description, image, buttonText, buttonColor}) {
    
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