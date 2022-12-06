import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Offer from "./pages/Offer";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ProductsList from "./pages/Products/ProductsList";
import Product from "./pages/Products/Product";
import "./Store.css";
import 'bootstrap/dist/css/bootstrap.css';

function Store() {
  return (
    <div className="store">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route caseSensitive path="/products" element={<Products />}>
            {/* Nested Routes */}
            <Route path="offer" element={<Offer/>} />
            <Route path="products" element={<ProductsList />}>
              {/* Dynamic Segments */}
              <Route path=":product" element={<Product />} />
            </Route>
          </Route>
          {/* <Route path="/about/me" element={<Myself />} /> */}
          {/* <Route path="/about/projects" element={<ProjectsList />} /> */}
          {/* <Route path="/about/projects/:project" element={<Project />} /> */}
          <Route caseSensitive path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default Store;
