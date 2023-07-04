import { Helmet } from "react-helmet";
//const subTitle = "Why Choose Us, Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn, Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn Take courses on your any device with our app & learn all time what you want. Just download & install & start to learnTake courses on your any device with our app & learn all time what you want. Just download & install & start to learnTake courses on your any device with our app & learn all time what you want. Just download & install & start to learn Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn";
// const title = "Become Online Instructor";
const desc = [
  "Charotar University of Science and Technology (CHARUSAT) has been conceived by Shri Charotar Moti Sattavis Patidar Kelavani Mandal to put India on global education map by making Charotar – the Land of Sardar Patel, a Global Education Hub. The University fosters an aspiration of being a World Class University. It strives, initially, to be in the league of Top 20 Universities at National Level. ",
  "The exceptional vision of the President, CHARUSAT and Kelavani Mandal, Shri Surandrabhai Patel (fondly known as Kaka) strengthened by institutional values of Honesty, Integrity and transparency has enabled the university to realize the ambitious goal by 2025.",

  <br />,
  <br />,
  "I am honored and privileged to be a Member of CHARUSAT Family during this very special time in its history. I believe that in these challenging times, CHARUSAT Fraternity needs to move forward together and succeed in its mission of preparing the students for global assignments by fostering attitude, building knowledge and sharpening skills so as to create a talent pool best fit not only for jobs but also for entrepreneurship with a spirit of service to the society.",
  <br />,
  <br />,
  "What distinguishes CHARUSAT from the rest of the universities is how it implements the strategy to achieve its goals. The strategy takes into consideration its own vision, its past accomplishments, its strengths and resources, and the challenges posed by the environment. Primarily, CHARUSAT Framework for Excellence focuses on the Core Performance Areas: Teaching, Learning and Assessment; Research Development and Innovation; and Extension and Community Services and Core Capacity Dimensions like Good Governance, Infrastructure, Faculty Competence, and Student Talent.",
  <br />,
  <br />,
  "Student-centric curricula and Pedagogy at CHARUSAT focuses on creating sustainable and conducive environment for learning. To achieve this, all efforts at CHARUSAT, are dedicated to inculcate active and experiential learning in the courses and capitalize on the use of technology in class.",
  <br />,
  <br />,
  "Education at CHARUSAT accord with many opportunities within and beyond the classroom to acquire knowledge, to develop interests and inclinations, and to stretch the potential, all within a nurturing and conducive learning environment. To foster institutional cultural change, emphasis is placed on learning, member engagement, faculty involvement in the shared governance process, and continual improvement.",
  <br />,
  <br />,
  "It is also essential that university productivity and research funding in different faculties is increased. Along with remove sustainability, this will also enhance the visibility of the university. s.",
  <br />,
  "This will establish a dynamic research environment through faculty involvement in graduate teaching and research, as well as the expansion of graduate programs in multidisciplinary fields",
  <br />,
  <br />,
  "The Provost office will serve and support the faculty all the times, reinforcing a culture of excellence, respect and open communication in their efforts in the direction.",
  <br />,
  "I look forward to your kind cooperation and support.",
];
//const text='From Presidents Desk';
const title = "From the Provost's Desk";
//const subTitle = "About CHARUSAT";

const ProvostDesk = () => {
  return (
    <div className="about-section style-3 padding-tb section-bg">
      <Helmet>
        <title>CHARUSAT Provost</title>
        <meta http-equiv="Content-Type" content=" text/html; charset=utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Provost of CHARUSAT" />
        <meta name="keywords" content="CHARUSAT Provost, R V Upadhyay, Provost, CHARUSAT" />
        <meta name="robots" content="index" />
        <meta name="robots" content="follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="translate" />
        <meta name="google" content="nopagereadaloud" />
        <meta property="og:type" content="Provost page" />
        <meta property="og:title" content="Provost Homepage" />
        <meta property="og:description" content="Provost message" />
        <meta name="author" content="CHARUSAT Web Team" />
      </Helmet>
      <div className="container post-item style-2">
        <div className="row">
          <div className="col-sm-3">
            <div className="about-left mt-1">
              <div
                className="about-thumb"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="assets/images/about/Provost_RVU.webp"
                  alt="Provost"
                  style={{ margin: "0 auto" }}
                />
              </div>
              <div style={{ textAlign: "center", marginTop: "10px" }}>
                <h4>Dr. R. V. Upadhyay</h4>
                <h5>Provost, CHARUSAT</h5>
              </div>
            </div>
          </div>
          <div className="col-sm-9">
            <div className="about-right">
            <div className="section-header">
                {/* <span className="subtitle">{subTitle}</span> */}
                <div className="post-inner">
                <div className="post-content">
                <h2 className="title">{title}</h2>
                <hr/>
                {/* <p style={{ textAlign: "justify" }}>{desc}</p> */}
                <p style={{ textAlign: "justify", lineHeight: "1.8rem" }}>
                Charotar University of Science and Technology (CHARUSAT) has been conceived by Shri Charotar Moti Sattavis Patidar Kelavani Mandal to put India on global education map by making Charotar – the Land of Sardar Patel, a Global Education Hub. The University fosters an aspiration of being a World Class University. It strives, initially, to be in the league of Top 20 Universities at National Level. 
                <br />
                <br />
                The exceptional vision of the President, CHARUSAT and Kelavani Mandal, Shri Surandrabhai Patel (fondly known as Kaka) strengthened by institutional values of Honesty, Integrity and transparency has enabled the university to realize the ambitious goal by 2025.
                </p>
                <br />
                <p style={{ textAlign: "justify", lineHeight: "1.8rem" }}>
                I am honored and privileged to be a Member of CHARUSAT Family during this very special time in its history. I believe that in these challenging times, CHARUSAT Fraternity needs to move forward together and succeed in its mission of preparing the students for global assignments by fostering attitude, building knowledge and sharpening skills so as to create a talent pool best fit not only for jobs but also for entrepreneurship with a spirit of service to the society.
                </p>
                <p style={{ textAlign: "justify", lineHeight: "1.8rem" }}>
                What distinguishes CHARUSAT from the rest of the universities is how it implements the strategy to achieve its goals. The strategy takes into consideration its own vision, its past accomplishments, its strengths and resources, and the challenges posed by the environment. Primarily, CHARUSAT Framework for Excellence focuses on the Core Performance Areas: Teaching, Learning and Assessment; Research Development and Innovation; and Extension and Community Services and Core Capacity Dimensions like Good Governance, Infrastructure, Faculty Competence, and Student Talent.
                
                </p>
          <p style={{ textAlign: "justify", lineHeight: "1.8rem" }}>
                Student-centric curricula and Pedagogy at CHARUSAT focuses on creating sustainable and conducive environment for learning. To achieve this, all efforts at CHARUSAT, are dedicated to inculcate active and experiential learning in the courses and capitalize on the use of technology in class.

                </p>
                <p style={{ textAlign: "justify", lineHeight: "1.8rem" }}>
                Education at CHARUSAT accord with many opportunities within and beyond the classroom to acquire knowledge, to develop interests and inclinations, and to stretch the potential, all within a nurturing and conducive learning environment. To foster institutional cultural change, emphasis is placed on learning, member engagement, faculty involvement in the shared governance process, and continual improvement.

                </p>
                <p style={{ textAlign: "justify", lineHeight: "1.8rem" }}>
                It is also essential that university productivity and research funding in different faculties is increased. Along with remove sustainability, this will also enhance the visibility of the university. s.

                </p>
                <p style={{ textAlign: "justify", lineHeight: "1.8rem" }}>
                This will establish a dynamic research environment through faculty involvement in graduate teaching and research, as well as the expansion of graduate programs in multidisciplinary fields

                </p>
                <p style={{ textAlign: "justify", lineHeight: "1.8rem" }}>
                The Provost office will serve and support the faculty all the times, reinforcing a culture of excellence, respect and open communication in their efforts in the direction.

                </p>
                <p style={{ textAlign: "justify", lineHeight: "1.8rem" }}>
                I look forward to your kind cooperation and support.
                </p><br/>
            <p className="">
              <strong>- Dr. R. V. Upadhyay</strong>
            </p>
              </div>
            </div>
          </div>
          </div>
          </div>
          <div>
          

          
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProvostDesk;
