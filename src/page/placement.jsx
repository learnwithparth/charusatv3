import { Component, Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Helmet } from "react-helmet";

// import PageHeader from "../component/layout/pageheader";
// import career1_img from "../assets/images/advertisment_nov_2022.webp";
import PlacementRecord from "../component/section/placementRecord";

const topRecruiters = [
  {
    imgUrl: "assets/images/recruiters/jaro.png",
    imgAlt: "jaro",
    name: "12 Lacs",
  },
  {
    imgUrl: "assets/images/recruiters/byju.png",
    imgAlt: "byju",
    name: "10 Lacs",
  },
  {
    imgUrl: "assets/images/recruiters/in.png",
    imgAlt: "navy",
    name: "9 Lacs",
  },
  {
    imgUrl: "assets/images/recruiters/gsfc.png",
    imgAlt: "gsfc",
    name: "8 Lacs",
  },
  {
    imgUrl: "assets/images/recruiters/tcs.png",
    imgAlt: "tcs",
    name: "7 Lacs",
  },
  {
    imgUrl: "assets/images/recruiters/samsung.png",
    imgAlt: "samsung",
    name: "7 Lacs",
  },
  {
    imgUrl: "assets/images/recruiters/ops.png",
    imgAlt: "opsHUB",
    name: "6.5 Lacs",
  },
  {
    imgUrl: "assets/images/recruiters/berger.png",
    imgAlt: "berger",
    name: "6 Lacs",
  },
  {
    imgUrl: "assets/images/recruiters/mg.png",
    imgAlt: "mg",
    name: "6 Lacs",
  },
  {
    imgUrl: "assets/images/recruiters/evosys.png",
    imgAlt: "evosys",
    name: "5.5 Lacs",
  },
  {
    imgUrl: "assets/images/recruiters/jeavio.png",
    imgAlt: "jeavio",
    name: "5.3 Lacs",
  },
  {
    imgUrl: "assets/images/recruiters/crest.png",
    imgAlt: "crestData",
    name: "5 Lacs",
  },
];

const Placement = () => {
  return (
    <Fragment>
      <Helmet>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="CHARUSAT-Placement" />
        <meta name="copyright" content="All rights reserved by CHARUSAT" />
        <meta
          name="keywords"
          content="CHARUSAT Placement,CHARUSAT University, changa university,best university in gujarat, changa, charotar university, courses, engineering courses, best engineering college in gujarat, engineering college in gujarat, placement statistics, packages offered"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="homepage" />
        <meta property="og:title" content="CHARUSAT Placement" />
        <meta
          property="og:description"
          content="CHARUSAT Placement - best university to study in Gujarat"
        />
        <title>CHARUSAT Placement</title>
      </Helmet>
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

                            <Container fluid>
                              <Row className="p-2">
                                <Col>
                                  <h4>CDPC ACTIVITIES </h4>
                                  <ul>
                                    <li>
                                      {/* <i className="icofont-tick-mark"></i> */}
 One
                                      to one guidance to each student to help
                                      them achieve their desired career.
                                    </li>
                                    <li>
                                      {/* <i className="icofont-tick-mark"></i> */}
 Free
                                      training to improve soft skills, technical
                                      skills, and personality as per the
                                      industry requirement through expert
                                      workshops.
                                    </li>
                                    <li>
                                      {/* <i className="icofont-tick-mark"></i> */}
{" "}
                                      Feedback to each student by mock campus
                                      placement test which includes online test,
                                      Group discussion, and personal interview.
                                    </li>
                                    <li>
                                      {/* <i className="icofont-tick-mark"></i> */}
{" "}
                                      Conducting seminar series on career
                                      prospects in the industry, public sector,
                                      government (including defense), and
                                      self-employment.
                                    </li>
                                    <li>
                                      {/* <i className="icofont-tick-mark"></i> */}
{" "}
                                      Execute campus placements and job fairs by
                                      inviting all industrial sectors for
                                      students.
                                    </li>
                                    <li>
                                      {/* <i className="icofont-tick-mark"></i> */}
{" "}
                                      Guidance regarding the requirements and
                                      procedures for higher studies in India and
                                      Abroad via Higher studies help desk.
                                    </li>
                                    <li>
                                      {/* <i className="icofont-tick-mark"></i> */}
{" "}
                                      Encourage students by providing resources
                                      to participate and clear various national
                                      and international projects and technical
                                      competition.
                                    </li>
                                    <li>
                                      {/* <i className="icofont-tick-mark"></i> */}
{" "}
                                      Guidance to each student to prepare for
                                      national and international competitive
                                      exams.
                                    </li>
                                    <li>
                                      {/* <i className="icofont-tick-mark"></i> */}
{" "}
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
                                  <h4>STUDENTS' TESTIMONIAL</h4>
                                </Col>
                              </Row>
                              <Row>
                                <Col
                                  style={{
                                    border: "1px solid #ccc",
                                    margin: "10px",
                                    padding: "10px",
                                  }}
                                >
                                  <img src="assets/images/students_placement_testimonial/aditya_pawar_n.png" />
                                  <p className="mt-3">
                                    <i>
                                      &quot; CHARUSAT helped me set a benchmark
                                      and gave me a head start towards my
                                      professional career. Faculties here have a
                                      student-centric approach while teaching.
                                      Industrial visits at regular intervals
                                      make the students well aware of recent
                                      trends and guide them accordingly to
                                      improve their learning graph.&quot;
                                    </i>
                                  </p>
                                </Col>
                                <Col
                                  style={{
                                    border: "1px solid #ccc",
                                    margin: "10px",
                                    padding: "10px",
                                  }}
                                >
                                  <img src="assets/images/students_placement_testimonial/karunya_parmanik_n.png" />
                                  <p className="mt-3">
                                    <i>
                                      &quot; Charusat by providing various
                                      facilities to the students has proved that
                                      it is not only being study oriented
                                      university. The counselling batches
                                      assigned to the respective faculties has
                                      been an initiative that has helped the
                                      students at various points in their
                                      college life. Along with the platforms
                                      that it provides to enhance the
                                      co-curricular skills is pretty good.
                                    </i>
                                    &quot;
                                  </p>
                                </Col>
                                <Col
                                  style={{
                                    border: "1px solid #ccc",
                                    margin: "10px",
                                    padding: "10px",
                                  }}
                                >
                                  <img src="assets/images/students_placement_testimonial/maharshi_bodani_n.png" />
                                  <p className="mt-3">
                                    <i>
                                      &quot; I am thankful to CSPIT, IT
                                      placement team & Training and Placement
                                      Cell for inviting the renowned
                                      organizations and molding us as per the
                                      industrial requirements. Also they helped
                                      us in getting best profile and package of
                                      industry. I’m very much proud to be an
                                      alumni of such a beautiful college and be
                                      a part of the CHARUSAT family.
                                    </i>
                                    &quot;
                                  </p>
                                </Col>
                              </Row>
                              <Row>
                                <Col
                                  style={{
                                    border: "1px solid #ccc",
                                    margin: "10px",
                                    padding: "10px",
                                  }}
                                >
                                  <img src="assets/images/students_placement_testimonial/parth_shah_n.png" />
                                  <p className="mt-3">
                                    <i>
                                      &quot; Truly saying, Department of
                                      Information technology started aptitude
                                      classes which were very helpful for
                                      someone like me who had less knowledge of
                                      general aptitude. Also, motivational, Dos
                                      & Don’ts lectures were organized to make
                                      sure each student had enough confidence
                                      for appearing in placement & clearing It.
                                    </i>
                                    &quot;
                                  </p>
                                </Col>
                                <Col
                                  style={{
                                    border: "1px solid #ccc",
                                    margin: "10px",
                                    padding: "10px",
                                  }}
                                >
                                  <img src="assets/images/students_placement_testimonial/jeel_soni_n.png" />
                                  <p className="mt-3">
                                    <i>
                                      &quot; Highly qualified faculty and
                                      flexible curriculum which offers a unique
                                      amalgam of technical and humanities
                                      courses along with the vibrant campus life
                                      helped us to become socially aware
                                      technologists prepared both for industrial
                                      and research domain and It's not only what
                                      you learn, it's how you learn.
                                    </i>
                                    &quot;
                                  </p>
                                </Col>
                                <Col
                                  style={{
                                    border: "1px solid #ccc",
                                    margin: "10px",
                                    padding: "10px",
                                  }}
                                >
                                  <img src="assets/images/students_placement_testimonial/harsh_shah_n.png" />
                                  <p className="mt-3">
                                    <i>
                                      &quot; CHARUSAT has not only impacted me
                                      the best technical knowledge of my field
                                      but has also given me many opportunities
                                      to bring the best out of me as a
                                      developer. However, I never had
                                      self-doubt, as CHARUSAT had implanted a
                                      strong foundation of technical, managerial
                                      and leadership skillsets within me.
                                    </i>
                                    &quot;
                                  </p>
                                </Col>
                              </Row>
                            </Container>
                            <br />
                            <h4>PLACEMENT STATISTICS</h4>
                            <div
                              className="d-flex p-2 bd-highlight justify-content-center align-items-center"
                              style={{ width: "75%", margin: "auto" }}
                            >
                              <PlacementRecord />
                            </div>
                            <br />
                            <br />
                            <div className="container">
                              <div className="section-header">
                                <h2 className="title">
                                  <h3>MAJOR RECRUITERS</h3>
                                </h2>
                              </div>
                              <div className="section-wrapper">
                                <div className="instructor-bottom">
                                  <div className="instructor-slider overflow-hidden">
                                    {/* <div className="instructor-navi instructor-slider-next">
                                      <i className="icofont-rounded-double-right"></i>
                                    </div>
                                    <div className="instructor-navi instructor-slider-prev">
                                      <i className="icofont-rounded-double-left"></i>
                                    </div> */}
                                    <Swiper
                                      spaceBetween={0}
                                      slidesPerView={2}
                                      loop={"true"}
                                      autoplay={{
                                        delay: 2000,
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
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>

      {/* <div>
        <div className="instructor-section style-3 padding-tb section-bg-ash">
          <div className="container">
            <div className="section-header text-center">
              <h2 className="title">
                <h3>MAJOR RECRUITERS</h3>
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
      </div> */}
    </Fragment>
  );
};

export default Placement;
