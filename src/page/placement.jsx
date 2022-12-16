import { Component, Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import PageHeader from "../component/layout/pageheader";
import career1_img from "../assets/images/advertisment_nov_2022.webp";
import PlacementRecord from "../component/section/placementRecord";

const topRecruiters = [
  {
    imgUrl: "assets/images/recruiters/jaro.PNG",
    imgAlt: "jaro",
    name: "12 Lacs",
  },
  {
    imgUrl: "assets/images/recruiters/byju.PNG",
    imgAlt: "byju",
    name: "10 Lacs",
  },
  {
    imgUrl: "assets/images/recruiters/in.PNG",
    imgAlt: "navy",
    name: "9 Lacs",
  },
  {
    imgUrl: "assets/images/recruiters/gsfc.PNG",
    imgAlt: "gsfc",
    name: "8 Lacs",
  },
  {
    imgUrl: "assets/images/recruiters/tcs.PNG",
    imgAlt: "tcs",
    name: "7 Lacs",
  },
  {
    imgUrl: "assets/images/recruiters/samsung.PNG",
    imgAlt: "samsung",
    name: "7 Lacs",
  },
  {
    imgUrl: "assets/images/recruiters/ops.PNG",
    imgAlt: "opsHUB",
    name: "6.5 Lacs",
  },
  {
    imgUrl: "assets/images/recruiters/berger.PNG",
    imgAlt: "berger",
    name: "6 Lacs",
  },
  {
    imgUrl: "assets/images/recruiters/mg.PNG",
    imgAlt: "mg",
    name: "6 Lacs",
  },
  {
    imgUrl: "assets/images/recruiters/evosys.PNG",
    imgAlt: "evosys",
    name: "5.5 Lacs",
  },
  {
    imgUrl: "assets/images/recruiters/jeavio.PNG",
    imgAlt: "jeavio",
    name: "5.3 Lacs",
  },
  {
    imgUrl: "assets/images/recruiters/crest.PNG",
    imgAlt: "crestData",
    name: "5 Lacs",
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

                            <Container fluid>
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
                                <Col></Col>
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
                                  <img src="assets/images/students_placement_testimonial/karunya_parmanik_n.png" />
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
                                  <img src="assets/images/students_placement_testimonial/maharshi_bodani_n.png" />
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
                              <Row>
                                <Col>
                                  <img src="assets/images/students_placement_testimonial/parth_shah_n.png" />
                                  <p>
                                    Truly saying, Department of Information
                                    technology started aptitude classes which
                                    were very helpful for someone like me who
                                    had less knowledge of general aptitude.
                                    Also, motivational, Dos & Don’ts lectures
                                    were organized to make sure each student had
                                    enough confidence for appearing in placement
                                    & clearing It.
                                  </p>
                                </Col>
                                <Col>
                                  <img src="assets/images/students_placement_testimonial/jeel_soni_n.png" />
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
                                  <img src="assets/images/students_placement_testimonial/harsh_shah_n.png" />
                                  <p>
                                    CHARUSAT has not only impacted me the best
                                    technical knowledge of my field but has also
                                    given me many opportunities to bring the
                                    best out of me as a developer. However, I
                                    never had self-doubt, as CHARUSAT had
                                    implanted a strong foundation of technical,
                                    managerial and leadership skillsets within
                                    me.
                                  </p>
                                </Col>
                              </Row>
                            </Container>
                            <h4>PLACEMENT STATISTICS</h4>
                            <div className="d-flex p-2 bd-highlight justify-content-center w-70">
                              <PlacementRecord />
                            </div>
                            <br />
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
