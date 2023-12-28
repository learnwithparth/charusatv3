import { useEffect } from "react";
import Iframe from "react-iframe";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const subTitle = "About CHARUSAT ";
const title = "|| अमृतं तु विद्या ||";
const desc =
  "CHARUSAT offers various programs, viz., UG, PG, Doctoral, Post-Doctoral, Diploma, Value-added and Executive Development Programs under the tutelage of 9 Institutes, 6 Faculties, and various Centers / Cells.";
//  An employee strength of 600, student strength of more than 8000 and a Capital Outlay of INR 150 Crores are the scalar dimensions of CHARUSAT. The programs are offered in the allied disciplines of Technology & Engineering, Pharmacy, Computer Applications, Management Studies, Applied Sciences, Nursing, Physiotherapy, and other Paramedical Sciences."
// "The Iron Man of India, Sardar Vallabhbhai Patel believed, “Education without character is futile”. CHARUSAT proudly follows this spirit. It also follows founding High Moral Values like Honesty, Integrity, Transparency, Fairness, Equity, and Accountability.";

const desc2 =
  "CHARUSAT offers various programs, viz., UG, PG, Doctoral, Post-Doctoral, Diploma, Value-added and Executive Development Programs under the tutelage of 9 Institutes, 6 Faculties, and various Centers / Cells. An employee strength of 600, student strength of more than 8000 and a Capital Outlay of INR 150 Crores are the scalar dimensions of CHARUSAT. The programs are offered in the allied disciplines of Technology & Engineering, Pharmacy, Computer Applications, Management Studies, Applied Sciences, Nursing, Physiotherapy, and other Paramedical Sciences.";

const aboutList = [
  {
    imgUrl: "assets/images/about/icon/01.jpg",
    imgAlt: "about icon rajibraj91 rajibraj",
    title: "Skilled Instructors",
    desc: "Ranked among Top 200 University by NIRF",
  },
  {
    imgUrl: "assets/images/about/icon/02.jpg",
    imgAlt: "about icon rajibraj91 rajibraj",
    title: "Get Certificate",
    desc: "Ranked among Top 3 Universities in Gujarat by GSIRF",
  },
  {
    imgUrl: "assets/images/about/icon/03.jpg",
    imgAlt: "about icon rajibraj91 rajibraj",
    title: "Online Classes",
    desc: "Member of United Nations of Academic Impact",
  },
  {
    imgUrl: "assets/images/about/icon/02.jpg",
    imgAlt: "about icon rajibraj91 rajibraj",
    title: "Get Certificate",
    desc: "Achieved Q2 Innovation Rank in 110th IND SCIMAGO Institutions Rankings",
  },
  {
    imgUrl: "assets/images/about/icon/03.jpg",
    imgAlt: "about icon rajibraj91 rajibraj",
    title: "Online Classes",
    desc: "Certified as Center of Excellence by Goverment of Gujarat",
  },
];

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="about-section ">
      <br />
      <br />
      <div className="container">
        <p
          className="text-center subtitle "
          style={{ fontSize: "1rem", color: "#f16126" }}
        >
          {title}
        </p>
        <h2 className="title text-center">
          {subTitle}&nbsp; {"   "}
          {/* <i style={{ color: "#f16126" }}>NAAC A+</i> */}
        </h2>

        <div className="row justify-content-center row-cols-xl-2 row-cols-1 align-items-end flex-row-reverse">
          <div className="col">
            <div className="about-right ">
              <div className="section-header">
                {/* <span className="subtitle" style={{fontWeight:'bold'}}>{subTitle}</span> */}

                {/* <h2 className="title">{title}</h2> */}

                {/* <p >{desc}</p> */}

                {/* <br />
                <br />
                <p style={{fontWeight:'bold'}}>{desc2}</p> */}
              </div>
              <div className="section-wrapper">
                <ul className="lab-ul">
                  {aboutList.map((val, i) => (
                    <li key={i} data-aos="fade-left">
                      <div className="sr-left">
                        <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                      </div>
                      <div className="sr-right">
                        <h5>{val.desc}</h5>

                        {/* <p>{val.desc}</p> */}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="about-left">
              <div className="about-thumb" data-aos="fade-right" data-aos-anchor-placement="top-bottom">
                <img src="assets/images/about/04.png" alt="about"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      {/*  */}
      <div className="student-feedbak-section padding-tb shape-img">
        <div className="container">
          <div className="section-header text-center">
            <span className="subtitle">&nbsp;</span>
            <h2 className="title">CHARUSAT At Glance</h2>
          </div>
          <div className="section-wrapper">
            <div className="row justify-content-center row-cols-lg-2 row-cols-1">
              <div className="col">
                <div className="sf-left">
                  <div className="sfl-thumb" style={{ overflow: "hidden" }} data-aos="zoom-out" data-aos-duration="2000">
                    <Iframe
                    
                      overflow="hidden"
                      styles={{
                        aspectRatio: "16/9",
                        width: "100%",
                      }}
                      src="https://www.youtube.com/embed/MBym3IPnPlE"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default About;
