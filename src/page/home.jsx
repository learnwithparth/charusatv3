import { Fragment } from "react";
import Footer from "../component/layout/footer-3";
import Header from "../component/layout/header-3";
import About from "../component/section/about";
import NewsFrontPage from "../component/section/newsFrontPage";
import Banner from "../component/section/banner-5";
import Sponsor from "../component/section/sponsor";
import AchievementThree from "../component/section/achievement-3";
import ClientsThree from "../component/section/clients-3";
import Faculties from "../component/section/Faculties";
import Collaboration from "../component/section/collaboration";
import Goals from "../component/section/goals";
import Messages from "../component/section/messages";
import Intiatives from "../component/section/initiatives";
import Placement from "../component/section/palcement";
import Event from "../component/section/event";
import Instructor from "../component/section/instructor";

const Home = () => {
  return (
    <Fragment>
      {/* <Header /> */}
      <Banner />
      <About />
      <Event />
      <NewsFrontPage />
      <Messages />
      <Faculties />
      <Intiatives />
      <Goals />
      {/* <Instructor /> */}
      <Collaboration />
      <AchievementThree />
      {/* <Achievement2/> */}
      {/* <Event /> */}
      {/* <Publication/> */}
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
      {/* <Placement/> */}
      <Sponsor />
      {/* <Contact/> */}
      {/* <Footer /> */}
    </Fragment>
  );
};

export default Home;
