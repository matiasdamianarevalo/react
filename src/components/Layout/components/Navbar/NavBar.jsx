import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';

export default function NavBar (props) {
  const { pages } = props;
  return (
    <Navbar variant="light" bg="dark">
      <Container>
          <Navbar.Brand>
            React Bootstrap
          </Navbar.Brand>
          <Nav className="navbar-nav me-auto">
            {pages.map((page) => (
            <li className="nav-link me-auto" key={`${page.id}-page`}>
            <NavLink to={page.id}className={({ isActive }) =>
            isActive ? "link is-active" : "link"}>
            {page.name}
            </NavLink>
            </li>
            ))}
          </Nav>
      </Container>
    </Navbar>
  );
};
