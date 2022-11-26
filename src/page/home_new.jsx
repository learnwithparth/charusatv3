import { Component, Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header-3";
import About from "../component/section/about";
import Achievement from "../component/section/achievement";
import Banner from "../component/section/banner";
import Blog from "../component/section/blog";
import Category from "../component/section/category";
import Course from "../component/section/course";
import Instructor from "../component/section/instructor";
import Sponsor from "../component/section/sponsor";
import Student from "../component/section/student";
import AchievementThree from "../component/section/achievement-3";
import AboutTwo from "../component/section/about-2";
import Feature from "../component/section/feature";
import Event from "../component/section/event";
import BlogTwo from "../component/section/blog-2";
import Clients from "../component/section/clients";
import CourseFour from "../component/section/course-4";
import ClientsThree from "../component/section/clients-3";
import FeatureTwo from "../component/section/feature-2";
import Faculties from "../component/section/Faculties";
import Achievement2 from "../component/section/achievements";
import Collaboration from "../component/section/collaboration";
import Contact from "../page/contact";
import Publication from "../component/section/course-6";
import Initiatives from "../component/section/initiatives";

const Home = () => {
    return (
        <Fragment>
            <Header />
            <Banner />
            <About />
            <AchievementThree />
            <FeatureTwo/>
            <Initiatives/>
            {/* <Achievement2/> */}
            <Collaboration/>
            <Faculties/>
            <Event />
            <Publication/>
            {/* <Blog />            
            <Clients /> */}
            <ClientsThree />
            {/* <Feature />
            <Category />
            <Course />
            <CourseFour />
            <Instructor />
            <ClientsThree />
            <Student />
            <Achievement />
            <AboutTwo /> */}
            <Sponsor />
            <Contact/>
            <Footer />
        </Fragment>
    );
}
 
export default Home;