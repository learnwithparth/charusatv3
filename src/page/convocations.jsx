import { Component, Fragment } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageHeader from "../component/layout/pageheader";
import Convocation_11_Guest from "../assets/images/convocations/Dr_Bimal_Patel.webp";
import Convocation_10_Guest from "../assets/images/convocations/convocation_10.jpg";

const Convocations = () => {
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
                            <h3>Careers @CHARUSAT</h3>
                            <hr />
                            <br />
                            <Container>
                              <Row className="p-2">
                                <Col>
                                  <h6
                                    className="text-white p-1"
                                    style={{ backgroundColor: "#f16126" }}
                                  >
                                    11<sup>th</sup> Convocation – Dr. Bimal
                                    Patel
                                  </h6>
                                </Col>
                              </Row>
                              <Row className="p-2">
                                <Col md={2}>
                                  <Image
                                    src={Convocation_11_Guest}
                                    alt={"Dr. Bimal Patel"}
                                    thumbnail
                                  />
                                </Col>
                                <Col md={10}>
                                  <p>
                                    The 11th Convocation of CHARUSAT was held on
                                    12th, 13th and 17th January, 2022. In all,
                                    2271 students from 6 different faculties of
                                    CHARUSAT namely, Faculty of Technology and
                                    Engineering, Faculty of Computer Science and
                                    Applications, Faculty of Pharmacy, Faculty
                                    of Management Studies, Faculty of Applied
                                    Sciences, and Faculty of Medical Sciences
                                    were awarded with the degrees including 32
                                    PhD Scholars. Importantly, 41 students with
                                    academic excellence were awarded with
                                    different Gold Medals.
                                  </p>

                                  <p>
                                    The occasion was graced by the presence of
                                    Dr Bimal Patel, Member, International Law
                                    Commission, and UN & Vice-Chancellor
                                    Rashtriya Raksha University.
                                  </p>
                                </Col>
                              </Row>

                              <Row className="p-2">
                                <Col>
                                  <h6
                                    className="text-white p-1"
                                    style={{ backgroundColor: "#f16126" }}
                                  >
                                    10<sup>th</sup> Convocation – Shri. Harish
                                    Mehta
                                  </h6>
                                </Col>
                              </Row>
                              <Row className="p-2">
                                <Col md={2}>
                                  <Image
                                    src={Convocation_10_Guest}
                                    alt={"Shri. Harish Mehta"}
                                    thumbnail
                                  />
                                </Col>
                                <Col md={10}>
                                  <p>
                                    Amid coronavirus pandemic, CHARUSAT, a
                                    leading university situated in Charotar
                                    region,celebrated the 10th Convocation event
                                    on 9th, 11th and 12th January 2021 at six
                                    different venues following strict social
                                    distancing norms. In all, 1813 students from
                                    5 different faculties of CHARUSAT were
                                    awarded with the degrees including 28 PhD
                                    Scholars. Importantly, 30 students with
                                    academic excellence were awarded with
                                    different Gold Medals. Shri Harish Mehta,
                                    Founder & Executive Chairman of Onward
                                    Technologies and First elected Chairman of
                                    NASSCOM graced the occasion as the Chief
                                    Guest and delivered the convocation address
                                    online.
                                  </p>
                                </Col>
                              </Row>

                              <Row className="p-2">
                                <Col>
                                  <h6
                                    className="text-white p-1"
                                    style={{ backgroundColor: "#f16126" }}
                                  >
                                    10<sup>th</sup> Convocation – Shri. Harish
                                    Mehta
                                  </h6>
                                </Col>
                              </Row>
                              <Row className="p-2">
                                <Col md={2}>
                                  <Image
                                    src={Convocation_10_Guest}
                                    alt={"Shri. Harish Mehta"}
                                    thumbnail
                                  />
                                </Col>
                                <Col md={10}>
                                  <p>
                                    Amid coronavirus pandemic, CHARUSAT, a
                                    leading university situated in Charotar
                                    region,celebrated the 10th Convocation event
                                    on 9th, 11th and 12th January 2021 at six
                                    different venues following strict social
                                    distancing norms. In all, 1813 students from
                                    5 different faculties of CHARUSAT were
                                    awarded with the degrees including 28 PhD
                                    Scholars. Importantly, 30 students with
                                    academic excellence were awarded with
                                    different Gold Medals. Shri Harish Mehta,
                                    Founder & Executive Chairman of Onward
                                    Technologies and First elected Chairman of
                                    NASSCOM graced the occasion as the Chief
                                    Guest and delivered the convocation address
                                    online.
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
    </Fragment>
  );
};

export default Convocations;
