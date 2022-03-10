import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation({toggleHome , togglePage1}) {
  return (
    <Navbar className="navbar" collapseOnSelect expand="lg">
      <Navbar.Brand href="/" className="text-light" style={{ fontSize: 30 }}>
        CBH
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link className="text-light" onClick={toggleHome}>
            Home
          </Nav.Link>
          <Nav.Link className="text-light" onClick={togglePage1}>
            Page 1
          </Nav.Link>

          {/* <Nav.Link as={Link} to={'/'} className="text-light">
            Home
          </Nav.Link> */}

          <Nav.Link href="/page2" className="text-light">
            Page 2-Inactive
          </Nav.Link>
          <Nav.Link href="/page3" className="text-light">
            Page 3-Inactive
          </Nav.Link>
          <Nav.Link href="/page4" className="text-light">
            Page 4-Inactive
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
