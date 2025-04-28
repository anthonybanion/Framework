import Button from "../../atoms/button/Button";
import './myCard.css'; 


function MyCard({ title = "Default Title", content = "Default Content", image = "default-image.jpg" }) {
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        <Button color="primary" text="Click Me" />
      </div>
    </div>
  );
}

export default MyCard;
