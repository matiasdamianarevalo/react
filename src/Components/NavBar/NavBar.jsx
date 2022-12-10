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
        <Link to='/Jordan/id' className={({ isActive }) => (isActive ? "white" : "blue")}>Jordan </Link> 
        </li>
        <li>
        <Link to='/Sneakers/id' className={({ isActive }) => (isActive ? "white" : "blue")}>Sneakers </Link>  
        </li>
        <li>
        <Link to='/Contact' className={({ isActive }) => (isActive ? "white" : "blue")}>Contact </Link>  
        </li>
        <li>
        <Link to='/CartWidget'><button><CartWidget/></button></Link>
        </li>
      </ul>
    </nav>
  </>
  )
}

export default NavBar;