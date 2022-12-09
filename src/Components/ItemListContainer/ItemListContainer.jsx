import "./Style.css";
import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import ItemList from "../ItemList/ItemList";

const Collections = [
  {
    category: "Jordan",
    id: "1",
    title: "Converse All Start Collage",
    image: "../../assets/images/1converse-all-star-college.png",
    price: "100",
    description: "lorem ipsum dolor sit ",
  },
  {
    category: "Jordan",
    id: "2",
    title: "Converse All Start Collage",
    image: "../../assets/images/1converse-all-star-college.png",
    price: "100",
    description: "lorem ipsum dolor sit ",
  },
  {
    category: "Jordan",
    id: "3",
    title: "Converse All Start Collage",
    image: "../../assets/images/1converse-all-star-college.png",
    price: "100",
    description: "lorem ipsum dolor sit ",
  },
  {
    category: "Sneakers",
    id: "4",
    title: "Converse All Start Collage",
    image: "../../assets/images/1converse-all-star-college.png",
    price: "100",
    description: "lorem ipsum dolor sit ",
  },
  {
    category: "Sneakers",
    id: "5",
    title: "Converse All Start Collage",
    image: "../../assets/images/1converse-all-star-college.png",
    price: "100",
    description: "lorem ipsum dolor sit ",
  },
];

const ItemListContainer = ({ presentation }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(Collections);
      }, 3000);
    });

    getData.then(res => setData);
  }, []);

  return (
    <>
      <h1>{presentation}</h1>
        <Item/>
      <ItemList data={data} />
    </>
  );
};

export default ItemListContainer;


/* 
const ItemListContainer = () => {
  return (
    <>
      <Item
        category= "jordan"
        id="1"
        title="Converse All Start Collage"
        image="../../assets/images/1converse-all-star-college.png"
        price={"100"}
        description="lorem ipsum dolor sit "
      />
      <Item
        category= "jordan"
        id="2"
        title="Converse All Start Collage"
        image="../../assets/images/1converse-all-star-college.png"
        price={"200"}
        description="lorem ipsum dolor sit "
      />
      <Item
        category= "jordan"
        id="3"
        title="Converse All Start Collage"
        image="../../assets/images/1converse-all-star-college.png"
        price={"200"}
        description="lorem ipsum dolor sit "
      />
      <Item 
        category= "jordan"
        id="4"
        title="Converse All Start Collage"
        image="../../assets/images/1converse-all-star-college.png"
        price={"200"}
        description="lorem ipsum dolor sit "
      />
      <Item
        category= "jordan"
        id="5"
        title="Converse All Start Collage"
        image="../../assets/images/1converse-all-star-college.png"
        price={"200"}
        description="lorem ipsum dolor sit "
      />
    </>
  );
};

export default ItemListContainer; */



/* import { useEffect, useState } from "react";
import ItemList from "../../ItemList/ItemList";


const ItemListContainer = ({ presentation }) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProducts.then((response) => {
      setProductList(response);
    });
  }, []);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });

  return (
    <>
      <ItemList lista={productList} />{" "}
    </>
  );
};

export default ItemListContainer; */