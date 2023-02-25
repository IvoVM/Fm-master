import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import redIcon from "../assets/images/red-circle.png";
function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky={"top"}>
      <Container>
        <Navbar.Brand href="#home">
          <span className="master">Master</span>105.3{" "}
          <span className="fm">FM</span> ...Tu Mejor Compañia!
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#0" className="live"><img src={redIcon} /> Escuchar en vivo</Nav.Link>
            <Nav.Link href="#1">Nuestra Historia</Nav.Link>
            <Nav.Link href="#2">Familia Master</Nav.Link>
            <Nav.Link href="#3">Calendario</Nav.Link>
            <Nav.Link href="#4">Formar Parte</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
