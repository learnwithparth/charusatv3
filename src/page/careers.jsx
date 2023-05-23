import { Component, Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageHeader from "../component/layout/pageheader";
import career1_img from "../assets/images/advertisment_nov_2022.webp";
const Certification_Courses = () => {
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
                            <h3>Work With Us :</h3>
                            <hr />
                            <br />
                            <Container>
                              <Row className="p-2">
                                <Col md={8}>
                                  <img
                                    className="fluid"
                                    src="./assets/images/advertisment_nov_2022.webp"
                                    alt={"career"}
                                  />
                                </Col>
                                <Col md={4}>
                                  <h6>Recruitment - Various positions</h6>
                                  <p>
                                    Last Date of Submission: 28 November, 2022
                                  </p>

                                  <a class="lab-btn text-white mt-2" href="#">
                                    Qualification & Criteria
                                  </a>

                                  <a
                                    class="lab-btn text-white mt-2"
                                    href="https://charusat.edu.in:912/OnlineJobPortal/"
                                  >
                                    Apply Now
                                  </a>
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

export default Certification_Courses;
