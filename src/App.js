import { BrowserRouter, Routes, Route } from "react-router-dom";
import "swiper/css";

import ScrollToTop from "./component/layout/ScrollToTop";
import ErrorPage from "./page/404";
import Home from "./page/home";
import Header from "./component/layout/header-3";
import UndergraduateCourses from "./page/undergraduateCourses";
import PostgraduateCourses from "./page/postgraduateCourses";
import Footer from "./component/layout/footer-3";
import Transport from "./page/transport";
import IPR from "./page/ipr";
import Wincell from "./page/wincell";
import CSRTC from "./page/csrtc";
import Hostels from "./page/hostels";
import Admission_Reprentatives from "./page/admission_reprentatives";

import Certification_Courses from "./page/certification_courses";
import Campus_Map from "./page/campus-map";
import Careers from "./page/careers";
import Convocations from "./page/convocations";
import CodeOfConduct from "./page/code-of-conduct";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/undergraduateCourses"
          element={<UndergraduateCourses />}
        />
        <Route path="/postgraduateCourses" element={<PostgraduateCourses />} />
        <Route path="/transport" element={<Transport />} />
        <Route path="/ipr" element={<IPR />} />
        <Route path="/wincell" element={<Wincell />} />
        <Route path="/csrtc" element={<CSRTC />} />
        <Route path="/hostels" element={<Hostels />} />
        <Route
          path="/admission_reprentatives"
          element={<Admission_Reprentatives />}
        />
        <Route
          path="/certification_courses"
          element={<Certification_Courses />}
        />
        <Route path="/campus-map" element={<Campus_Map />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/convocations" element={<Convocations />} />
        <Route path="/code-of-conduct" element={<CodeOfConduct />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
