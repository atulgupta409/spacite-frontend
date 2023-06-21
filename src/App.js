import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./components/contact/Contact";
import Herohome from "./components/homepage/herohome/Herohome";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import PageNotExist from "./components/pagenotexist/PageNotExist";
import CityPage from "./components/coworkingCityPage/CityPage";
import Footer from "./components/footer/Footer";
import Microlocation from "./components/coworkingMicrolocation/Microlocation";
import FooterBottom from "./components/footer/FooterBottom";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={[
            <Navbar key={1} />,
            <Herohome key={2} />,
            <Footer key={3} />,
          ]}
        />
        <Route
          path="/contact"
          element={[
            <Navbar key={4} />,
            <Contact key={5} />,
            <FooterBottom key={6} />,
          ]}
        />
        <Route
          path="/about"
          element={[
            <Navbar key={7} />,
            <About key={8} />,
            <FooterBottom key={9} />,
          ]}
        />
        <Route
          path="coworking-space/:id"
          element={[
            <Navbar key={10} />,
            <CityPage key={11} />,
            <Footer key={12} />,
          ]}
        />
        <Route
          path="coworking-space/:id1/:id2"
          element={[
            <Navbar key={13} />,
            <Microlocation key={14} />,
            <Footer key={15} />,
          ]}
        />
        <Route path="*" element={<PageNotExist />} />
      </Routes>
    </div>
  );
}

export default App;
