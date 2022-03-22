import AccordElem from "../components/AccordElem/AccordElem";
import Footer from "../components/Footer/Footer";
import HiddenSidebar from "../components/HiddenSidebar/HiddenSidebar";
import Main from "../components/main/Main";
import ProgressBars from "../components/ProgressBars/ProgressBars";

function Page1() {
  return (
    <>
      <Main />
      <AccordElem/>
      <HiddenSidebar/>
      <ProgressBars/>
      <Footer/>
    </>
  );
}

export default Page1;
