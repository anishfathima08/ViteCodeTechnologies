import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Course from "./Pages/Course";
import Services from "./Pages/Services";
import WpIcon from "./Components/CommonComponents/WpIcon";
import CourseDetails from "./Components/CoursePageComponents/CourseDetails";
import MyContextProvider from "./Context/MyContextProvider";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "./Pages/ScrollToTop";

const App = () => {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <ScrollToTop />
        <MyContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/course" element={<Course />} />
            <Route path='/course/:id' element={<CourseDetails />} />
            <Route path="/service" element={<Services />} />
          </Routes>
        </MyContextProvider>
      </BrowserRouter>
      <WpIcon />
    </>
  );
};

export default App;