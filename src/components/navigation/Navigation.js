import { useState } from "react";
import "./Navigation.css";

function Navigation() {
  const [hideMenu, setHideMenu] = useState(false);

  return (
    <nav>
      <button className="nav-button" onClick={() => setHideMenu(!hideMenu)}>
        <img
          className={hideMenu ? null : "switch"} //close-btn
          src="https://i.imgur.com/rinHlJq.png"
          alt=""
        />
        <img
          className={hideMenu ? "switch" : null} //open-btn
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
