import { useState } from "react";
import "./Navigation.css";

function Navigation() {
  const [hideMenu, setHideMenu] = useState(true);

  const handleToggle = () => {
    setHideMenu(!hideMenu);
  };

  return (
    <nav>
      <button className="nav-button" onClick={() => setHideMenu(!hideMenu)}>
        Menu
      </button>

      <ul className={hideMenu ? "visible" : null}>
        <li>Home</li>
        <li>Page 1</li>
        <li>Page 2</li>
        <li>Page 3</li>
        <li>Page 4</li>
      </ul>
    </nav>
  );
}

export default Navigation;
