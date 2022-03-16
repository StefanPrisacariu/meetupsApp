import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Navigation>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/page1" element={<Page1/>}></Route>
        </Routes>
      </Navigation>
    </>
  );
}

export default App;
