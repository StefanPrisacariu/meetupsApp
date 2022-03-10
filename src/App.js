import { Route, Routes } from "react-router-dom";
import ComponentCarousel from "./components/carousel/ComponentCarousel";
import FormBase from "./components/Form/FormBase";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Navigation from "./components/navigation/Navigation";
import Home from "./pages/Home";
import Layout from "./pages/Layout";

function App() {
  return (
    <Layout>
      {/* <Routes>
        <Route path='/' element={<Home />} />
      </Routes> */}
    </Layout>


    // <div>
    //   <Header />
    //   <Navigation />
    //   <ComponentCarousel/>
    //   <Main />
    //   <FormBase />
    // </div>
  );
}

export default App;
