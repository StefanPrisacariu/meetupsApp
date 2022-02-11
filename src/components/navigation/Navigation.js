import { useState } from "react";
import "./Navigation.css";

function Navigation() {
  const [hideMenu, setHideMenu] = useState(false);

  const handleToggle = () => {
    setHideMenu(!hideMenu);
  };

  return (
    <nav>
      <button className="nav-button" onClick={() => setHideMenu(!hideMenu)}>
        <img
          className={hideMenu ? null : "switch"}
          src="https://i.imgur.com/1OX1Mqv.png"
          alt=""
        />
        <img
          className={hideMenu ? "switch" : null}
          src="https://i.imgur.com/TglxYmD.png"
          alt=""
        />
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
