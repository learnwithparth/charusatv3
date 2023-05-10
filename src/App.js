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
import Scholarship from "./page/Scholarship";
/*
import HomeTwo from "./page/home-2";
import HomeThree from "./page/home-3";
import HomeFour from "./page/home-4";
import HomeFive from "./page/home-5";
import HomeSix from "./page/home-6";
import HomeSeven from "./page/home-7";
import InstructorPage from "./page/instructor";
import LoginPage from "./page/login";
import SearchNone from "./page/search-none";
import SearchPage from "./page/search-page";
import ShopPage from "./page/shop";
import ShopDetails from "./page/shop-single";
import SignupPage from "./page/signup";
import TeamPage from "./page/team";
import TeamSingle from "./page/team-single";
*/

import Home_Final from "./page/home";
import About_us from "./page/About_us";
// import UndergraduateCourses from "./page/undergraduateCourses";
// import PostgraduateCourses from "./page/postgraduateCourses";
// import Footer from "./component/layout/footer-3";
// import Transport from "./page/transport";
import AboutUs from "./page/About_us";
import ProvostDesk from "./page/Provost-desk";
import PresidentDesk from "./page/President-desk";
import People from "./page/People";
// import Footer from "./component/layout/footer-3";
import CDPC from "./page/cdpc";
import Ethics from "./page/ethics";
import Accreditation from "./page/Accreditation";
import ResearchPage from "./page/research";
import ContactUs from "./page/contact_us";
import SDI from "./page/SDI";
import WellnessProgram from "./page/wellnessProgram";
import Course from "./page/course-single";
import Announcements from "./page/announcements";
import UpcomingEvents from "./page/upcoming-events";
import ComingSoon from "./page/ComingSoon";
import Edic from "./page/edic";
import StudentCorner from "./page/student-corner";

function App() {
  // const basename = document.querySelector('base')?.getAttribute('href') ?? '/'    ;

  return (
    <BrowserRouter basename="/charusatv3">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/undergraduate-courses"
          element={<UndergraduateCourses />}
        />
        <Route path="/postgraduate-courses" element={<PostgraduateCourses />} />
        <Route path="/ug-courses-list" element={<Course />} />
        <Route path="/transport" element={<Transport />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/ipr" element={<IPR />} />
        <Route path="/csrtc" element={<CSRTC />} />
        <Route path="/hostels" element={<Hostels />} />
        <Route
          path="/admission-reprentatives"
          element={<Admission_Reprentatives />}
        />
        <Route
          path="/certification-courses"
          element={<Certification_Courses />}
        />
        <Route path="/course-single" element={<Course />} />
        <Route path="/wincell" element={<Wincell />} />
        <Route path="/convocations" element={<Convocations />} />
        <Route path="/campus-map" element={<Campus_Map />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/policies_terms" element={<PoliciesTerms />} />
        <Route path="/code-of-conduct" element={<CodeOfConduct />} />
        <Route path="/placement" element={<Placement />} />
        <Route path="/library" element={<Library />} />
        <Route path="/about" element={<About_us />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/ipr-facilitation" element={<IPR />} />
        <Route path="/cdpc" element={<CDPC />} />
        <Route path="/ethics" element={<Ethics />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/student-development-initiatives" element={<SDI />} />
        <Route path="/provost-desk" element={<ProvostDesk />} />
        <Route path="/president-desk" element={<PresidentDesk />} />
        <Route path="/associates" element={<People />} />
        <Route path="/accreditation-and-ranking" element={<Accreditation />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/student-wellness-program" element={<WellnessProgram />} />
        <Route path="/upcoming-events" element={<UpcomingEvents />} />
        <Route path="/edic" element={<Edic />} />
        <Route path="/scholarship" element={<Scholarship />} />
        <Route path="/student-corner" element={<StudentCorner />} />
        <Route path="/crtc" element={<CSRTC />} />

        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="*" element={<Home />} />

        {/* http://preview.themeforest.net/item/edukon-education-and-lms-react-js-template/full_screen_preview/38286924?_ga=2.76967702.264634929.1671012406-1346785869.1667801964 */}

        {/* <Route path="/announcements" element={<Announcements />} /> */}
        {/* <Route path="/accreditation" element={<Accreditation />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
