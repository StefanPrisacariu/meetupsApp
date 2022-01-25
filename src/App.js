import Carousel, { DUMMYCarouselData } from "./components/carousel/Carousel";
import Form from "./components/Form/Form";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <Carousel slides={DUMMYCarouselData} />
      <Main />
      <Form />
    </div>
  );
}

export default App;
