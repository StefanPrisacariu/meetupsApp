import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router ,Link } from "react-router-dom";
import "./Navigation.css";

function Navigation(props) {
  return (
    <Router>
      <div>
        <Navbar className="navbar" collapseOnSelect expand="lg">
          <Navbar.Brand
            href="/"
            className="text-light"
            style={{ fontSize: 30 }}
          >
            PB
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link as={Link} to={"/"} className="text-light">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"/page1"} className="text-light">
                Page 1
              </Nav.Link>
              <Nav.Link href="/page2" disabled className="text-light">
                Page 2
              </Nav.Link>
              <Nav.Link href="/page3" disabled className="text-light">
                Page 3
              </Nav.Link>
              <Nav.Link href="/page4" disabled className="text-light">
                Page 4
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      {props.children}
    </Router>
  );
}

export default Navigation;
