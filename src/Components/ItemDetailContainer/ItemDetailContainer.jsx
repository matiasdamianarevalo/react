
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import collections from "../collections";

const ItemListContainer = ({ title })  => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProducts.then((response) => {
      setProductList(response);
    });
  }, []);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(collections);
    }, 3000);
  });

  return (
    <>
      <ItemList lista={productList} />{" "}
    </>
  );
};

export default ItemListContainer;