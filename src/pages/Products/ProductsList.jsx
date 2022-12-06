import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Card from "../../components/Card/Card";
import { getAllProducts } from "../../services/index";
import { isEmpty } from "../../utils/array";
import "./ProductsList.css";


export default function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // TODO: Make fake API call to get projects
    getAllProducts().then((products) => setProducts(products));
  }, []);

  return (
    <div className="products-list__container" area="content">
      {isEmpty(products) ? (
        <p className="loader">Loading Products...</p>
      ) : (
        <div className="products-list">
          {products.map((product) => (
            <Card key={product.id}>

              <Link to={`${product.id}`}>{product.name}</Link>
              <div className="product-img-list">
                {product.tech.map((tech) => (
                  <p key={tech}>{tech}</p>
                ))}
              </div>
            </Card>
          ))}
        </div>
      )}
      <div className="product-detail">
        <Outlet />
      </div>
    </div>
  );
}





























              /* Usar NavLink cuando se usan rutas anidadas de forma predeterminada */
              /*<NavLink
                className={({ isActive }) =>
                  isActive ? `project-${project.name}` : "project"
                }
                to={`/about/projects/${project.id}`}
              >
                {project.name}
              </NavLink> */