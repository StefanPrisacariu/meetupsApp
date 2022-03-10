import { useState } from "react";
import Header from "../components/header/Header";
import Navigation from "../components/navigation/Navigation";
import Home from "./Home";
import Page1 from "./Page1";

function Layout(props) {
  const [visible, setVisible] = useState(true);

  console.log(visible);

  return (
    <div>
      <Header />
      <Navigation
        toggleHome={() => setVisible(true)}
        togglePage1={() => setVisible(false)}
      />
      {visible === true && <Home />}
      {visible === false && <Page1 />}
    </div>
  );
}

export default Layout;
