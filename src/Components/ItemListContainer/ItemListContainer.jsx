import collections from "../collections";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";


const ItemListContainer = ({title}) => {
  const [productList, setProductList] = useState([]);
  const { categoryId } = useParams(); 
  console.log(categoryId);

  useEffect(() => {
    getProducts.then((response) => {
      setProductList(response);
    });
  }, []);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(collections);
    }, 2000);
      
  });

  return (
    <>
    <h1>{title}</h1>
      <ItemList lista={productList} />{" "}
    </>
  );
};

export default ItemListContainer;
