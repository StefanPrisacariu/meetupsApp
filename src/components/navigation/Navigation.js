import { Navbar, Nav} from "react-bootstrap";
import "./Navigation.css";

function Navigation() {
  return (
    <Navbar className="navbar" collapseOnSelect expand="lg">
      <Navbar.Brand href="#home" className="text-light" style={{fontSize:30}}>
        CBH
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link href="#home" className="text-light">
            Home
          </Nav.Link>
          <Nav.Link href="#home" className="text-light">
            Page 1
          </Nav.Link>
          <Nav.Link href="#home" className="text-light">
            Page 2
          </Nav.Link>
          <Nav.Link href="#home" className="text-light">
            Page 3
          </Nav.Link>
          <Nav.Link href="#home" className="text-light">
            Page 4
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
