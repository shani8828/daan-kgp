import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="our-fam" element={<OurFam />} />
            <Route path="blogs/:id" element={<EventsDetails />} />
            <Route path="fresher-place" element={<FresherPlace />} />
            <Route path="our-bright-minds" element={<OurBrightMinds />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
        
          <PageUpBtn/>
      </BrowserRouter>
    </>
  );
};

export default App;
