
import {BrowserRouter, Routes, Route } from "react-router-dom";
import 'swiper/css';


import ScrollToTop from "./component/layout/ScrollToTop";
import ErrorPage from "./page/404";
import Home from "./page/home";

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

import About_us from "./page/About_us"

import Header from "./component/layout/header-3"
import UndergraduateCourses from "./page/undergraduateCourses";
import PostgraduateCourses from "./page/postgraduateCourses";
import Footer from "./component/layout/footer-3"
import Transport from "./page/transport"
import IPR from "./page/ipr"
import CDPC from "./page/cdpc";
import Ethics from "./page/ethics";
import Accreditation from "./page/Accreditation";


function App() {
	return (
		
		<BrowserRouter>
			<ScrollToTop />
			<Header/>
			<Routes>

			<Route path="/final" element={<Home_Final />} />
			<Route path="/about" element={<About_us />} />
				

			<Route path="/" element={<Home />} />
			<Route path="/undergraduateCourses" element={<UndergraduateCourses/>}/>
			<Route path="/postgraduateCourses" element={<PostgraduateCourses/>}/>
			<Route path="/transport" element={<Transport/>}/>
			<Route path="/ipr" element={<IPR/>}/>
			<Route path="/cdpc" element={<CDPC/>}/>
			<Route path="/ethics" element={<Ethics/>}/>
			<Route path="*" element={<ErrorPage />} />
			<Route path="/accreditation" element={<Accreditation />} />


			</Routes>
			<Footer/>
		</BrowserRouter>
	);
}

export default App;
