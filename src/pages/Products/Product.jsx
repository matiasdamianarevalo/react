import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/index";
import "./Product.css";

export default function Product(props) {
  const [productData, setProductData] = useState(null);
  const { product } = useParams();

  useEffect(() => {
    getProduct(product).then((productData) => {
      console.log(productData);
      setProductData(productData);
    });
  }, [product]);

  return (
    <>
      {productData ? (
        <div className="product__container">
          <div className="product-name">{productData.name}</div>
          <div className="product-detail">{productData.detail}</div>
{/*           <div className="project-link">
            <a href={projectData.repo.link}>{projectData.repo.link}</a>
          </div> */}
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
}
