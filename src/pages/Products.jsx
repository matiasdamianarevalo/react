import { Link, Outlet } from "react-router-dom";
import "./Products.css";

export default function Products() {
  return (
    <div className="products__container" area="content">
      <div className="title">Products</div>
      <div className="links">
        <Link to="offer">offer</Link>
        <Link to="products">Products</Link>
      </div>
      <Outlet />
    </div>
  );
}
