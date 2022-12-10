import ItemCount from "../ItemCount/ItemCount";
import "./Style.css";

function Item(props) {
  return (
    <div className="Container">
      <div className="card">
        <div className="card-img">
        <img src={props.imageUrl} alt={props.title} />
        </div>
      <div className="card-detail">
          <h3>{props.title}</h3>
        <span>{props.description}</span>
          <p>$ {props.price}</p>
        <span>{props.category}</span>
      </div>
        <ItemCount />
      <button>Comprar</button>
      </div>
    </div>
  );
}

export default Item;
