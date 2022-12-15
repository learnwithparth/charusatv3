import { Component, Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import PageHeader from "../component/layout/pageheader";
import career1_img from "../assets/images/advertisment_nov_2022.webp";

const topRecruiters = [
  {
    imgUrl: "assets/images/recruiters/jaro.PNG",
    imgAlt: "jaro",
    name: "12 Lacs",
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

const Placement = () => {
  return (
    <Fragment>
      {/* <PageHeader title={'4 Results found for: Business'} curPage={'Search Result'} /> */}
      <div className="blog-section padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          <div className="post-content">
                            <h3>CAREER DEVELOPMENT AND PLACEMENT CELL</h3>
                            <hr />
                            <br />
                            <Container>
                              <Row className="p-2">
                                <Col>
                                  <h4>CDPC ACTIVITIES</h4>
                                  <ul>
                                    <li>
                                      One to one guidance to each student to
                                      help them achieve their desired career.
                                    </li>
                                    <li>
                                      Free training to improve soft skills,
                                      technical skills, and personality as per
                                      the industry requirement through expert
                                      workshops.
                                    </li>
                                    <li>
                                      Feedback to each student by mock campus
                                      placement test which includes online test,
                                      Group discussion, and personal interview.
                                    </li>
                                    <li>
                                      Conducting seminar series on career
                                      prospects in the industry, public sector,
                                      government (including defense), and
                                      self-employment.
                                    </li>
                                    <li>
                                      Execute campus placements and job fairs by
                                      inviting all industrial sectors for
                                      students.
                                    </li>
                                    <li>
                                      Guidance regarding the requirements and
                                      procedures for higher studies in India and
                                      Abroad via Higher studies help desk.
                                    </li>
                                    <li>
                                      Encourage students by providing resources
                                      to participate and clear various national
                                      and international projects and technical
                                      competition.
                                    </li>
                                    <li>
                                      Guidance to each student to prepare for
                                      national and international competitive
                                      exams.
                                    </li>
                                    <li>
                                      Support for student start-up by
                                      Entrepreneurship and development cell.
                                    </li>
                                  </ul>
                                </Col>
                              </Row>
                              <Row>
                                <Col>
                                  <h4>STUDENT'S TESTIMONIAL</h4>
                                </Col>
                              </Row>
                              <Row>
                                <Col>
                                  <img src="assets/images/students_placement_testimonial/aditya_pawar_n.png" />
                                  <p>
                                    CHARUSAT helped me set a benchmark and gave
                                    me a head start towards my professional
                                    career. Faculties here have a
                                    student-centric approach while teaching.
                                    Industrial visits at regular intervals make
                                    the students well aware of recent trends and
                                    guide them accordingly to improve their
                                    learning graph.
                                  </p>
                                </Col>
                                <Col>
                                  <img src="assets/images/students_placement_testimonial/aditya_pawar_n.png" />
                                  <p>
                                    Highly qualified faculty and flexible
                                    curriculum which offers a unique amalgam of
                                    technical and humanities courses along with
                                    the vibrant campus life helped us to become
                                    socially aware technologists prepared both
                                    for industrial and research domain and It's
                                    not only what you learn, it's how you learn.
                                  </p>
                                </Col>
                                <Col>
                                  <img src="assets/images/students_placement_testimonial/aditya_pawar_n.png" />
                                  <p>
                                    I am thankful to CSPIT, IT placement team &
                                    Training and Placement Cell for inviting the
                                    renowned organizations and molding us as per
                                    the industrial requirements. Also they
                                    helped us in getting best profile and
                                    package of industry. I’m very much proud to
                                    be an alumni of such a beautiful college and
                                    be a part of the CHARUSAT family.”
                                  </p>
                                </Col>
                              </Row>
                            </Container>

                            <br />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="instructor-section style-3 padding-tb section-bg-ash">
          <div className="container">
            <div className="section-header text-center">
              <h2 className="title">
                <h4>MAJOR RECRUITERS</h4>
              </h2>
            </div>
            <div className="section-wrapper">
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
                    {topRecruiters.map((val, i) => (
                      <SwiperSlide key={i}>
                        <div className="instructor-item">
                          <div className="instructor-inner">
                            <div className="instructor-thumb">
                              <img
                                src={`${val.imgUrl}`}
                                alt={`${val.imgAlt}`}
                              />
                            </div>
                            <div className="instructor-content">
                              <Link to="/team-single">
                                <h5>{val.name}</h5>
                              </Link>
                              <span className="d-block">{val.degi}</span>
                            </div>
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
    </Fragment>
  );
};

export default Placement;
