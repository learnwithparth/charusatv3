import React from "react";

import { Link } from "react-router-dom";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const subTitle = "Why Choose Us";
const title = " Collaborations";

const instructorTopList = [
  {
    imgUrl: "assets/images/instructor/09.jpg",
    imgAlt: "instructor rajibraj91 rajibraj",
    name: "Emilee Logan",
    degi: "Lead Instructor",
    infoList: [
      {
        iconName: "icofont-envelope",
        text: "info@prof.mail.com",
      },
      {
        iconName: "icofont-youtube-play",
        text: "www.youtube.com/prof.ls",
      },
    ],
    socialList: [
      {
        iconName: "icofont-facebook",
        className: "facebook",
        siteLink: "#",
      },
      {
        iconName: "icofont-twitter",
        className: "twitter",
        siteLink: "#",
      },
      {
        iconName: "icofont-linkedin",
        className: "linkedin",
        siteLink: "#",
      },
    ],
  },
  {
    imgUrl: "assets/images/instructor/10.jpg",
    imgAlt: "instructor rajibraj91 rajibraj",
    name: "Angel Mili",
    degi: "Lead Instructor",
    infoList: [
      {
        iconName: "icofont-envelope",
        text: "info@prof.mail.com",
      },
      {
        iconName: "icofont-youtube-play",
        text: "www.youtube.com/prof.ls",
      },
    ],
    socialList: [
      {
        iconName: "icofont-facebook",
        className: "facebook",
        siteLink: "#",
      },
      {
        iconName: "icofont-twitter",
        className: "twitter",
        siteLink: "#",
      },
      {
        iconName: "icofont-linkedin",
        className: "linkedin",
        siteLink: "#",
      },
    ],
  },
];

const instructorBottomList = [
  {
    imgUrl: "assets/images/instructor/AICTE.webp",
    imgAlt: "instructor rajibraj91 rajibraj",
    name: "AICTE",
  },
  {
    imgUrl: "assets/images/instructor/AIMST University.webp",
    imgAlt: "instructor rajibraj91 rajibraj",
    name: "AIMST University",
  },
  {
    imgUrl: "assets/images/instructor/BHABHA ATOMIC.webp",
    imgAlt: "instructor rajibraj91 rajibraj",
    name: "BHABHA ATOMIC",
  },
  {
    imgUrl: "assets/images/instructor/Centre of Envi Education.webp",
    imgAlt: "instructor rajibraj91 rajibraj",
    name: "Centre of Envi Education",
  },
  {
    imgUrl: "assets/images/instructor/Defence Research Development.webp",
    imgAlt: "instructor rajibraj91 rajibraj",
    name: "Defence Research Development",
  },
  {
    imgUrl: "assets/images/instructor/Dept of BioTech.webp",
    imgAlt: "instructor rajibraj91 rajibraj",
    name: "Dept of BioTech",
  },
  {
    imgUrl: "assets/images/instructor/GESIA.webp",
    imgAlt: "instructor rajibraj91 rajibraj",
    name: "GESIA",
  },
  {
    imgUrl: "assets/images/instructor/GUJARAT INST OF DISASTER MGMT.webp",
    imgAlt: "instructor rajibraj91 rajibraj",
    name: "GUJARAT INST OF DISASTER MGMT",
  },
  {
    imgUrl: "assets/images/instructor/GUJCOST.webp",
    imgAlt: "instructor rajibraj91 rajibraj",
    name: "GUJCOST",
  },
  {
    imgUrl: "assets/images/instructor/HARRISBURG.webp",
    imgAlt: "instructor rajibraj91 rajibraj",
    name: "HARRISBURG University",
  },
  {
    imgUrl: "assets/images/instructor/INESCTEC.webp",
    imgAlt: "instructor rajibraj91 rajibraj",
    name: "INESCTEC",
  },
  {
    imgUrl: "assets/images/instructor/INST OF PLASMA.webp",
    imgAlt: "instructor rajibraj91 rajibraj",
    name: "INST OF PLASMA",
  },
  {
    imgUrl: "assets/images/instructor/ISRO.webp",
    imgAlt: "instructor rajibraj91 rajibraj",
    name: "ISRO",
  },
  {
    imgUrl: "assets/images/instructor/KIU.webp",
    imgAlt: "instructor rajibraj91 rajibraj",
    name: "KIU",
  },
  {
    imgUrl: "assets/images/instructor/L&T PTI.webp",
    imgAlt: "instructor rajibraj91 rajibraj",
    name: "L&T PTI",
  },
  {
    imgUrl: "assets/images/instructor/MINISTRY OF SCIENCE AND TECH.webp",
    imgAlt: "instructor rajibraj91 rajibraj",
    name: "MINISTRY OF SCIENCE AND TECH",
  },
  {
    imgUrl: "assets/images/instructor/MOTOROLA SOLUTIONS.webp",
    imgAlt: "instructor rajibraj91 rajibraj",
    name: "MOTOROLA SOLUTIONS",
  },
  {
    imgUrl: "assets/images/instructor/NRS.webp",
    imgAlt: "instructor rajibraj91 rajibraj",
    name: "NRS",
  },
  {
    imgUrl: "assets/images/instructor/RAE.webp",
    imgAlt: "instructor rajibraj91 rajibraj",
    name: "RAE",
  },
  {
    imgUrl: "assets/images/instructor/TECHNISCHE UNIVERSITY.webp",
    imgAlt: "instructor rajibraj91 rajibraj",
    name: "TECHNISCHE UNIVERSITY",
  },
  {
    imgUrl: "assets/images/instructor/UGC_DAE.webp",
    imgAlt: "instructor rajibraj91 rajibraj",
    name: "UGC_DAE",
  },
  {
    imgUrl: "assets/images/instructor/UJC.webp",
    imgAlt: "instructor rajibraj91 rajibraj",
    name: "UJC",
  },
  {
    imgUrl: "assets/images/instructor/UNIVERSITY OF EXETER.webp",
    imgAlt: "instructor rajibraj91 rajibraj",
    name: "UNIVERSITY OF EXETER",
  },
  {
    imgUrl: "assets/images/instructor/UNIVERSITY OF PRINCE.webp",
    imgAlt: "instructor rajibraj91 rajibraj",
    name: "UNIVERSITY OF PRINCE",
  },
];

export default function collaboration() {
  return (
    <div>
      <div className="instructor-section style-3  padding-tb  section-bg-ash">
        <div className="container">
          <div className="section-header text-center">
            {/* <span className="subtitle">University</span> */}
            <h2 className="title">{title}</h2>
          </div>
          <div className="section-wrapper">
            {/* <div className="instructor-top">
                        <div className="row g-4 justify-content-center row-cols-1 row-cols-lg-2">
                            {instructorTopList.map((val, i) => (
                                <div className="col" key={i}>
                                    <div className="instructor-item style-2">
                                        <div className="instructor-inner">
                                            <div className="instructor-thumb">
                                                <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                            </div>
                                            <div className="instructor-content">
                                                <Link to="/team-single"><h4>{val.name}</h4></Link>
                                                <span className="d-block">{val.degi}</span>
                                                <ul className="lab-ul ins-info">
                                                    {val.infoList.map((val, i) => (
                                                        <li key={i}><i className={val.iconName}></i> {val.text}</li>
                                                    ))}
                                                </ul>
                                                <ul className="lab-ul social-icons">
                                                    {val.socialList.map((val, i) => (
                                                        <li key={i}>
                                                            <a href={val.siteLink} className={val.className}><i className={val.iconName}></i></a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div> */}
            <div className="instructor-bottom">
              <div className="instructor-slider overflow-hidden">
                <div className="instructor-navi instructor-slider-next">
                  <i className="icofont-rounded-double-right"></i>
                </div>
                <div className="instructor-navi instructor-slider-prev">
                  <i className="icofont-rounded-double-left"></i>
                </div>
                <Swiper
                  spaceBetween={0}
                  slidesPerView={2}
                  loop={"true"}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  navigation={{
                    prevEl: ".instructor-slider-prev",
                    nextEl: ".instructor-slider-next",
                  }}
                  modules={[Autoplay, Navigation]}
                  breakpoints={{
                    0: {
                      width: 0,
                      slidesPerView: 1,
                    },
                    768: {
                      width: 768,
                      slidesPerView: 3,
                    },
                    1200: {
                      width: 1200,
                      slidesPerView: 5.7,
                    },
                  }}
                >
                  {instructorBottomList.map((val, i) => (
                    <SwiperSlide key={i}>
                      <div className="instructor-item">
                        <div className="instructor-inner">
                          <div className="instructor-thumb">
                            <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                          </div>
                          {/* <div className="instructor-content">
                                                    <Link to="/team-single"><h5>{val.name}</h5></Link>
                                                    <span className="d-block">{val.degi}</span>
                                                </div> */}
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
