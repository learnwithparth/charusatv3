
import {BrowserRouter, Routes, Route } from "react-router-dom";
import 'swiper/css';


import ScrollToTop from "./component/layout/ScrollToTop";
import ErrorPage from "./page/404";
import Home from "./page/home";

function App() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
			<Route path="/" element={<Home />} />
			<Route path="*" element={<ErrorPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
