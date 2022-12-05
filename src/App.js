import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "swiper/css";

import ScrollToTop from "./component/layout/ScrollToTop";
import ErrorPage from "./page/404";
import Home from "./page/home";
import PdfViewer from "./page/pdfViewer";

import Header from "./component/layout/header-3";
import UndergraduateCourses from "./page/undergraduateCourses";
import PostgraduateCourses from "./page/postgraduateCourses";
import Footer from "./component/layout/footer-3";

function App() {

  
 
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view" element={<PdfViewer />} />
        <Route
          path="/undergraduateCourses"
          element={<UndergraduateCourses />}
        />
        <Route path="/postgraduateCourses" element={<PostgraduateCourses />} />
        <Route path="/charuvidya" element={<External url="https://charuvidya.charusat.ac.in" />} />
        <Route path="/nptel" element={<External url="https://google.com"/>} />
        <Route path="/krc" element={<External url="https://scpit.knimbus.com/"/>} />
        <Route path="/admissionApplyNow" element={<External url="https://charusat.nopaperforms.com/"/>} />
        <Route path="/laboratories" element={<External url="https://youtu.be/Og4NMqI3q5M"/>} />
        <Route path="/kradle" element={<External url="https://kradle.charusat.ac.in/"/>} />
        <Route path="/icc" element={<External url="http://icccharusat.com/"/>} />
        <Route path="/iqac" element={<External url="https://iqac.charusat.ac.in/"/>} />
        <Route path="/360view" element={<External url="http://117.239.83.200:8110/CHARUSAT_Virtual_Tour/Charusat_Campus/"/>}/>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

function External(props) {
  window.location.href = props.url;
  return null;
}

export default App;
