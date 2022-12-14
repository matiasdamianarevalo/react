import Item from "../Item/Item"
import { Link } from "react-router-dom";


const ItemList = ({ lista }) =>  {
  return (
    <div>
    {lista.map((product)=> (
      <Link>
      <Item className="itemlist"
        id={product.id}
        title={product.title}
        price={product.price}
        imageUrl={product.imageUrl}
        category={product.categoryId} /> 
      </Link>
    ))
    }
    </div>
  );
}

export default ItemList

