import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router ,Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Navigation.css";

function Navigation(props) {

  const { t, i18n } = useTranslation();

  return (
    <Router>
      <div>
        <Navbar className="navbar" collapseOnSelect expand="lg">
          <Navbar.Brand
            href="/"
            className="text-light"
            style={{ fontSize: 30 }}
          >
            {t("nav-brand")}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link as={Link} to={"/"} className="text-light">
                {t("nav-home")}
              </Nav.Link>
              <Nav.Link as={Link} to={"/page1"} className="text-light">
                {t('nav-page-1')}
              </Nav.Link>
              <Nav.Link href="/page2" disabled className="text-light">
                {t('nav-page-2')}
              </Nav.Link>
              <Nav.Link href="/page3" disabled className="text-light">
                {t('nav-page-3')}
              </Nav.Link>
              <Nav.Link href="/page4" disabled className="text-light">
                {t('nav-page-4')}
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
