import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import OurFam from "./pages/OurFam";
import NoPage from "./pages/NoPage";
import FresherPlace from "./pages/FresherPlace";
import OurBrightMinds from "./pages/OurBrightMinds";
import EventsDetails from "./pages/EventsDetails";
import AOS from "aos";
import "aos/dist/aos.css";
import PageUpBtn from "./pages/PageUpBtn";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import ERPPlace from "./pages/ERPPlace";
import AcademicPlace from "./pages/AcademicPlace";
import CDCInternPlace from "./pages/CDCInternPlace";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  // Gets where user is clicking
  // React.useEffect(() => {
  //   document.addEventListener("click", (e) => {
  //     console.log("Clicked:", e.target);
  //   });
  // }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route>
            <Route path="/" element={<Layout />} />
            <Route index element={<Home />} />
            <Route path="our-fam/:year" element={<OurFam />} />
            <Route path="our-fam" element={<Navigate to="/our-fam/24" />} />
            <Route path="events/:id" element={<EventsDetails />} />
            <Route path="fresher-place" element={<FresherPlace />} />
            <Route path="erp-place" element={<ERPPlace />} />
            <Route path="academic-place" element={<AcademicPlace />} />
            <Route path="cdc-intern-place" element={<CDCInternPlace />} />
            <Route path="our-bright-minds" element={<OurBrightMinds />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
        <PageUpBtn />
        <Analytics />
        <SpeedInsights />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
