
import {BrowserRouter, Routes, Route } from "react-router-dom";
import 'swiper/css';


import ScrollToTop from "./component/layout/ScrollToTop";
import ErrorPage from "./page/404";
import Home from "./page/home";
import Header from "./component/layout/header-3"
import UndergraduateCourses from "./page/undergraduateCourses";
import PostgraduateCourses from "./page/postgraduateCourses";
import Footer from "./component/layout/footer-3";
import Transport from "./page/transport";
import AboutUs from "./page/About_us";
import ProvostDesk from "./page/Provost-desk";
import PresidentDesk from "./page/President-desk";
import People from "./page/People";

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
			<Route path="*" element={<ErrorPage />} />
			<Route path="/AboutUs" element={<AboutUs/>}/>
			<Route path="/ProvostDesk" element={<ProvostDesk/>}/>
			<Route path="/PresidentDesk" element={<PresidentDesk/>}/>
			<Route path="/people" element={<People/>}/>
			</Routes>
			<Footer/>
		</BrowserRouter>
	);
}

export default App;
