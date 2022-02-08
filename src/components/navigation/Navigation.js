import { useState } from "react";
import "./Navigation.css";

function Navigation() {
  const [hideMenu, setHideMenu] = useState(true);

  return (
    <nav>
      <button onClick={() => setHideMenu(!hideMenu)}>Menu</button>

      {hideMenu === false && (
        <ul toggleMenu={()=> setHideMenu(!hideMenu)}>
          <li>Home</li>
          <li>Page 1</li>
          <li>Page 2</li>
          <li>Page 3</li>
          <li>Page 4</li>
        </ul>
      )}
    </nav>
  );
}

export default Navigation;
