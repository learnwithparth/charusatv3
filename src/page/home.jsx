import { Fragment } from "react";
import { Link } from "react-router-dom";
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
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <Fragment>
      <Helmet>
        <title>CHARUSAT | Best Private University in Gujarat </title>
        <meta http-equiv="Content-Type" content=" text/html; charset=utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Charusat University is one of the Best University in Gujarat located in Changa- Anand. Charusat University provides best education in various domains like Engineering, Pharmacy, Business management, Applied Science, Nursing, Physiotherapy, Computer application, Paramedical Courses and many more."
        />
        <meta
          name="keywords"
          content="Charusat, CHARUSAT, Top 10 university in gujarat, Best University in Gujarat, Top Private university in Gujarat, Changa university, University, Charusat university admission, Under graduate admission, Anand, Changa, Vallabh Vidyanagar, Gujarat, India, Education, Educational institute, changa university, charusat university"
        />
        <meta name="robots" content="index" />
        <meta name="robots" content="follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="translate" />
        <meta name="google" content="nopagereadaloud" />
        <meta
          name="google-site-verification"
          content="iHUSfPMMFQRCIgicrAlVofHWVhWwQsDgTzGNUC7WzMk"
        />
        <meta property="og:type" content="homepage" />
        <meta property="og:title" content="CHARUSAT Homepage" />
        <meta
          property="og:description"
          content="CHARUSAT - Best University in Gujarat"
        />
        <meta name="author" content="CHARUSAT Web Team" />
      </Helmet>
      {/* <Header /> */}
      {/* <a href="https://eequeuestorage.blob.core.windows.net/staticfiles/charusat/ee-form-widget/form-2/charusatEnq.html"></a>

      <script src="https://eequeuestorage.blob.core.windows.net/staticfiles/charusat/ee-form-widget/form-2/widget.js"></script> */}
      <Banner />
      <About />
      <Event />
      <NewsFrontPage />
      {/* <Messages /> */}
      <Faculties />
      <Intiatives />
      {/* <Goals /> */}
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
