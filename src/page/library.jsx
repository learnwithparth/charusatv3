import { Component, Fragment } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageHeader from "../component/layout/pageheader";
import Contact from "../component/section/contact";
import InquiryForm from "../files/InquiryForm.pdf";
import Lib_1 from "../assets/images/lib-1.jpg";

const Library = () => {
  return (
    <Fragment>
      {/* <PageHeader title={'4 Results found for: Business'} curPage={'Search Result'} /> */}
      <div className="blog-section padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          <div className="post-content">
                            <h3>Library Resources</h3>
                            <hr />
                            <br />
                            <Container>
                              <Row>
                                <Col>
                                  <Image src={Lib_1} thumbnail />
                                  <p className="text-center">
                                    <h6>For Knimbus</h6>
                                    <Button
                                      variant="outline-danger"
                                      href="https://scpit.knimbus.com/user#/home"
                                      className="btn "
                                      target="_blank"
                                    >
                                      Click Here
                                    </Button>
                                    <br />
                                  </p>
                                </Col>
                                <Col>
                                  <Image src={Lib_1} thumbnail />
                                  <p className="text-center">
                                    <h6>For SOUL WEBOPAC by INFLIBNET</h6>
                                    <Button
                                      variant="outline-danger"
                                      href="http://172.16.11.69/WebOPAC/"
                                      className="btn "
                                      target="_blank"
                                    >
                                      Click Here
                                    </Button>
                                    <br />
                                  </p>
                                </Col>
                              </Row>
                            </Container>
                            <hr />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            <Contact
              name="Dr. Dinesh Patel"
              email="dineshpatel.lib@charusat.ac.in"
              phone="+91-2697-265032"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Library;
