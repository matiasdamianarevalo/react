import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import logo from "../../assets/Images/jordanlogoblanco.png";



function NavBar() {
  return (
    <>
    <nav className="navv">
      <ul>
        <li>
        <Link to={"/"}>
          <img src={logo} alt="logo" className="logo" />
        </Link>
        </li>
        <li>
        <Link to='/Home' className={({ isActive }) => (isActive ? "white" : "blue")}>Home </Link>
        </li>
        <li>
        <Link to='/Jordan' className={({ isActive }) => (isActive ? "white" : "blue")}>Jordan </Link> 
        </li>
        <li>
        <Link to='/Sneakers' className={({ isActive }) => (isActive ? "white" : "blue")}>Sneakers </Link>  
        </li>
        <li>
        <Link to='/Contactanos' className={({ isActive }) => (isActive ? "white" : "blue")}>Contactanos </Link>  
        </li>
        <li><Link to='/CartWidget' className={({ isActive }) => (isActive ? "white" : "blue")}><button type="button" class="btn btn-info"><CartWidget/></button></Link></li>
      </ul>
    </nav>
  </>
  )
}

export default NavBar;