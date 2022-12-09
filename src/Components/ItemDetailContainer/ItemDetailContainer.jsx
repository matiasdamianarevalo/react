import {useParams} from 'react-router-dom';
import { useEffect, useState } from "react";
import ItemList from '../ItemList/ItemList';
import Item from '../Item/Item';



const ItemListContainer = ({ presentation }) => {
  const [item, setProductList] = useState([]);
  const {detailId} = useParams();

  useEffect(() => {
    getProducts.then((response) => {
      setProductList(response);
    });
  }, [detailId]);
  
  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Item);
    }, 3000);
  });

  getProducts.then(res => setProductList(res.find(Item =>detailId === parseInt(detailId))));
  return (
    <>
      <ItemList lista={ItemList} />{" "}
    </>
  );
};

export default ItemListContainer;