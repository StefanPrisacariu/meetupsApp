import ComponentCarousel from "./components/carousel/ComponentCarousel";
import FormBase from "./components/Form/FormBase";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <ComponentCarousel/>
      <Main />
      <FormBase />
    </div>
  );
}

export default App;
