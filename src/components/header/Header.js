import { Button } from "react-bootstrap";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="lang-select">
        <Button variant="light">
          <img
            className="lang-icon"
            src="https://cdn3.iconfinder.com/data/icons/world-flags-circled-vol-3/48/Romania-512.png"
            alt="ro"
          />
        </Button>
        <Button variant="light">
          <img
            className="lang-icon"
            src="https://cdn2.iconfinder.com/data/icons/european-flags-3/100/Britain-512.png"
            alt="en"
          />
        </Button>
      </div>
      <h1 className="header-h1">Personal Blog</h1>
      <h2 className="header-h2">Leokai Skarri</h2>
    </header>
  );
}

export default Header;
