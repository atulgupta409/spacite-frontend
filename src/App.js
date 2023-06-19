import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./components/contact/Contact";
import Herohome from "./components/homepage/herohome/Herohome";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import PageNotExist from "./components/pagenotexist/PageNotExist";
import CityPage from "./components/coworkingCityPage/CityPage";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={[<Navbar />, <Herohome />, <Footer />]} />
        <Route path="/contact" element={[<Navbar />, <Contact />]} />
        <Route path="/about" element={[<Navbar />, <About />]} />
        <Route
          path="/coworking-spaces/:id"
          element={[<Navbar />, <CityPage />]}
        />
        <Route path="*" element={<PageNotExist />} />
      </Routes>
    </div>
  );
}

export default App;
