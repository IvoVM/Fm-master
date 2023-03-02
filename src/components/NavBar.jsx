import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import redIcon from "../assets/images/red-circle.png";
import {
  Link,
  animateScroll as scroll,
} from "react-scroll";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="p-3">
      <Navbar.Brand>
        <Link  className="nav-link" to="home" spy={true} smooth={false} offset={-100} duration={500}>
          <span className="master">Master</span>105.3{" "}
          <span className="fm">FM</span>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="text-white">
          <Link
            to="players"
            spy={true}
            smooth={false}
            offset={-100}
            duration={500}
            className="nav-link d-flex live"
          >
            <img className="mt-2" src={redIcon} />
            <p className="m-0">Escuchar en vivo</p>
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={false}
            offset={-150}
            duration={200}
            className="nav-link d-flex align-items-center"
          >
            Nuestra Historia
          </Link>
          <Link
            to="teamcard"
            spy={true}
            smooth={false}
            offset={-100}
            duration={500}
            className="nav-link d-flex align-items-center"
          >
            Familia Master
          </Link>
          <Link
            to="schedule"
            spy={true}
            smooth={false}
            offset={-100}
            duration={500}
            className="nav-link d-flex align-items-center"
          >
            Programación
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={false}
            offset={-100}
            duration={500}
            className="nav-link d-flex align-items-center"
          >
            Contactarse
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
