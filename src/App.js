import Carousel, { DUMMYCarouselData } from "./components/carousel/Carousel";
import FormBase from "./components/Form/FormBase";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Navigation from "./components/navigation/Navigation";
import Overlay from "./components/overlay/Overlay";

function App() {
  return (
    <div>
      <Overlay />
      <Header />
      <Navigation />
      <Carousel slides={DUMMYCarouselData} />
      <Main />
      <FormBase />
    </div>
  );
}

export default App;
