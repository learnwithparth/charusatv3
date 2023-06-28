import { Fragment } from "react";

import Footer from "../component/layout/footer-3";
import Header from "../component/layout/header-3";
import PageHeader from "../component/layout/pageheader";

//import Instructor from "../component/section/instructor";
import Torchbearers from "../component/section/Torchbearers";
import VisionMission from "../component/section/Vision_Mission";
import AppSection from "../component/section/ecc-to-charusat";

import PresidentDesk from "./President-desk";
import ProvostDesk from "./Provost-desk";

const subTitle = "About CHARUSAT";
const title = "The Journey";
const desc = [
  "Charotar University of Science and Technology – CHARUSAT has been conceived by Shri Charotar Moti Sattavis Patidar Kelavani Mandal to put India on global education map by making",
  " Charotar – the Land of Sardar Patel, a Global Education Hub.",
  <br />,
  <br />,
  " Kelavani Mandal, established in 1994, is a non-profit premier trust of India that works with the aim to provide social service through education. The organization has a social lineage of more than 125 years. The parent organization, Shri Charotar Moti Sattavis Leuva Patidar Samaj– Matrusanstha- is known for the social revolution it brought about by initiating Mass Marriages in Patidar community on a massive scale.Kelavani Mandal has been established with the distinct objective of creating state-of-the-art educational facilities. The trust is a democratically managed institution known for its transparent functioning and integrity.",
  <br />,
  <br />,
  "The Kelavani Mandal is the sponsoring body of CHARUSAT. The development path of Kelavani Mandal was illuminated under the leadership of two former Presidents: Late Shri Chhotabhai Bhikhabhai Patel and Late Dr. K C Patel. Late Shri Chhotabhai Bhikhabhai Patel was an illustrious businessman and social leader based in Mumbai. This founder President of Kelavani Mandal always insisted on setting Global Standards. Late Dr. K C Patel, a renowned nuclear scientist and a prominent educationist of Gujarat, succeeded Shri Chhotabhai Bhikhabhai Patel, and dreamt of a university at Education Campus, Changa (ECC).",
];

const year = "20+";
const expareance = "Years Of Experiences";

// const aboutList = [
//     {
//         imgUrl: 'assets/images/about/icon/01.jpg',
//         imgAlt: 'about icon rajibraj91 rajibraj',
//         title: 'Skilled Instructors',
//         desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
//     },
//     {
//         imgUrl: 'assets/images/about/icon/02.jpg',
//         imgAlt: 'about icon rajibraj91 rajibraj',
//         title: 'Get Certificate',
//         desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
//     },
//     {
//         imgUrl: 'assets/images/about/icon/03.jpg',
//         imgAlt: 'about icon rajibraj91 rajibraj',
//         title: 'Online Classes',
//         desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
//     },
// ]

const AboutPage = () => {
  return (
    <Fragment>
      {/* <PageHeader title={'About CHARUSAT'} curPage={'About_us'} /> */}

      {/* <Header /> */}
      {/* <PageHeader title={"About CHARUSAT"} curPage={"About_us"} /> */}

      <div className="about-section style-3 padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center row-cols-xl-2 row-cols-1 align-items-center">
            <div className="col">
              <div className="about-left">
                <div className="about-thumb">
                  <img src="assets/images/about/c2.jpg" alt="about" />
                </div>
                {/* <div className="abs-thumb">
                                    <img src="assets/images/about/c3.jpg" alt="about" />
                                </div> */}
                <div className="about-left-content">
                  <h3>{year}</h3>
                  <p>{expareance}</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="about-right">
                <div className="section-header">
                  <span className="subtitle">{subTitle}</span>
                  <h2 className="title">{title}</h2>
                  <p>{desc}</p>
                </div>
                {/* <div className="section-wrapper">
                                    <ul className="lab-ul">
                                        {aboutList.map((val, i) => (
                                            <li key={i}>
                                                <div className="sr-left">
                                                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                </div>
                                                <div className="sr-right">
                                                    <h5>{val.title}</h5>
                                                    <p>{val.desc}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <VisionMission />
      <Torchbearers /> */}
      <AppSection />

      {/* <Skill />
            <AchievementTwo />
            <Blog />*/}
      {/* <PresidentDesk />
      <ProvostDesk /> */}

      {/* <Skill />
            <AchievementTwo />
            <Blog />*/}
      {/* <Footer /> */}
    </Fragment>
  );
};

export default AboutPage;
