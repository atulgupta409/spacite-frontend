import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./components/contact/Contact";
import Herohome from "./components/homepage/herohome/Herohome";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import PageNotExist from "./components/pagenotexist/PageNotExist";
import CityPage from "./components/coworkingCityPage/CityPage";
import Footer from "./components/footer/Footer";
import PropertyPage from "./components/propertyPage/PropertyPage";
import Microlocation from "./components/coworkingMicrolocation/Microlocation";
import FooterBottom from "./components/footer/FooterBottom";
import ThankuPage from "./components/thankuPage/ThankuPage";
import ErrorBoundary from "./components/coworkingCityPage/ErrorBoundry";
import PrivacyPolicy from "./components/privacy-policy/PrivacyPolicy";


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
          path="coworking-space/:cityName"
          element={
            <>
              <Navbar key={10} />
              {/* <ErrorBoundary key={11}> */}
              <CityPage />
              {/* </ErrorBoundary> */}
              <Footer key={12} />
            </>
          }
        />
        <Route
          path="coworking-space/:id/:id2"
          element={[
            <Navbar key={13} />,
            <Microlocation key={14} />,
            <Footer key={15} />,
          ]}
        />
        <Route path="*" element={<PageNotExist />} />

        <Route
          path={`/coworking/:slug`}
          element={[<Navbar key={16} />, <PropertyPage key={17} />]}
        />

        <Route
          path="/thank-you"
          element={[
            <Navbar key={18} />,
            <ThankuPage key={19} />,
            <Footer key={20} />,
          ]}
        />
        <Route
          path="/privacy-policy"
          element={[
            <Navbar key={21} />,
            <PrivacyPolicy key={22} />,
            <Footer key={23} />,
          ]}
        />
      </Routes>
    </div>
  );
}

export default App;
