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
import PoliciesTerms from "./page/policiesTerms";
import Library from "./page/library";
import Placement from "./page/placement";
import Donation from "./page/donation";

function App() {
  // const basename = document.querySelector('base')?.getAttribute('href') ?? '/'    ;

  return (

    <BrowserRouter basename="/charusatv3">
      <ScrollToTop />
      <Header />
      <Routes>
      <Route exact path="/" element={<Home />} />

        <Route exact
          path="/undergraduateCourses"
          element={<UndergraduateCourses />}
        />
        <Route exact path="/postgraduateCourses" element={<PostgraduateCourses />} />
        <Route exact path="/transport" element={<Transport />} />
        <Route  exact path="/ipr" element={<IPR />} />

        <Route exact path="/csrtc" element={<CSRTC />} />
        <Route exact path="/hostels" element={<Hostels />} />
        <Route exact
          path="/admission_reprentatives"
          element={<Admission_Reprentatives />}
        />
        <Route exact
          path="/certification_courses"
          element={<Certification_Courses />}
        />

        {/* http://preview.themeforest.net/item/edukon-education-and-lms-react-js-template/full_screen_preview/38286924?_ga=2.76967702.264634929.1671012406-1346785869.1667801964 */}

        {/* <Route path="/announcements" element={<Announcements />} /> */}

        <Route  exact path="/donation" element={<Donation />} />

        <Route exact path="/wincell" element={<Wincell />} />
        <Route exact path="/convocations" element={<Convocations />} />
        <Route exact path="/campus-map" element={<Campus_Map />} />
        <Route exact path="/careers" element={<Careers />} />
        <Route exact path="/policies_terms" element={<PoliciesTerms />} />
        <Route exact path="/code-of-conduct" element={<CodeOfConduct />} />
        <Route exact path="/placement" element={<Placement />} />
        <Route exact path="/library" element={<Library />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
