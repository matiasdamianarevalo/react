import Item from "../Item/Item"

const ItemList = ({octoCat = []}) =>  {
  return (
   octoCat.map(octoCat => <Item key={octoCat.id} info={octoCat}/>)
  );
}

export default ItemList
/* import Item from "../Item/Item"
import { Link } from "react-router-dom";


const ItemList = ({ octoCat }) =>  {
  return (
    <div>
    {octoCat.map((product)=> (
      <Link id={product.id}
            to={'/Home/' + product.id}>
      <Item className="itemlist"
            category={product.category} 
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            description={product.description} /> 
      </Link>
    ))
    }
    </div>
  );
};

export default ItemList; */
