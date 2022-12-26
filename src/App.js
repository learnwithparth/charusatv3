
import {BrowserRouter, Routes, Route } from "react-router-dom";
import 'swiper/css';


import ScrollToTop from "./component/layout/ScrollToTop";
import ErrorPage from "./page/404";
import Home from "./page/home";
import Header from "./component/layout/header-3"
import UndergraduateCourses from "./page/undergraduateCourses";
import PostgraduateCourses from "./page/postgraduateCourses";
import Footer from "./component/layout/footer-3"
import Transport from "./page/transport"
import IPR from "./page/ipr"
import CDPC from "./page/cdpc";
import Ethics from "./page/ethics";
import Accreditation from "./page/Accreditation";
import SDI from "./page/SDI";

function App() {
	return (
		
		<BrowserRouter>
			<ScrollToTop />
			<Header/>
			<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/undergraduateCourses" element={<UndergraduateCourses/>}/>
			<Route path="/postgraduateCourses" element={<PostgraduateCourses/>}/>
			<Route path="/transport" element={<Transport/>}/>
			<Route path="/ipr" element={<IPR/>}/>
			<Route path="/cdpc" element={<CDPC/>}/>
			<Route path="/ethics" element={<Ethics/>}/>
			<Route path="*" element={<ErrorPage />} />
			<Route path="/accreditation" element={<Accreditation />} />
			<Route path="/sdi" element={<SDI />} />

			</Routes>
			<Footer/>
		</BrowserRouter>
	);
}

export default App;
