import ItemCount from "../ItemCount/ItemCount";
import "./Item.css";

function Item(prop) {
  return (
    <div className="ContenedorCard">
    <div className="card">
      <div className="card-img">
        <img src={prop.image} alt={prop.title} />
      </div>
    <div className="card-detail">
      <span>{prop.category}</span>
      <h2>{prop.title}</h2>
      <span>{prop.description}</span>
      <p>$ {prop.price}</p>
    </div>
      <ItemCount />
    </div>
    </div>
  );
}

export default Item;
