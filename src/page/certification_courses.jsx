import { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageHeader from "../component/layout/pageheader";
import aws_img from "../assets/images/certification_courses/aws.png";
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
                            <h3>
                              Certification Courses & Non-credit Courses
                              @CHARUSAT
                            </h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Pariatur quas ratione quae unde
                              dolores, minus quisquam sunt odit deleniti
                              distinctio non explicabo tenetur quaerat, maxime
                              voluptates aperiam iusto architecto perspiciatis.
                            </p>
                            <br />
                            <Container>
                              <Row className="p-2">
                                <Col>
                                  <div className="col">
                                    <div className="course-item style-4">
                                      <div className="course-inner">
                                        <div className="course-thumb">
                                          <img
                                            src={aws_img}
                                            alt={"AWS Student Club (ASC)"}
                                          />
                                          <div className="course-category">
                                            <div className="course-cate">
                                              <a href="#">
                                                AWS Student Club (ASC)
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="course-content">
                                          <a  href="https://asc.charusat.ac.in" target='_blank'>
                                            <h6>Get More Details</h6>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </Col>
                                <Col></Col>
                                <Col></Col>
                                <Col></Col>
                              </Row>
                            </Container>
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
