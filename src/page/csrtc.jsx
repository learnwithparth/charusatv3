import { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageHeader from "../component/layout/pageheader";
import Contact from "../component/section/contact";
import InquiryForm from "../files/InquiryForm.pdf";
import IPRBroucher from "../files/iprBrochuer.jpg";

const CSRTC = () => {
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
                            <h3>
                              Charusat Space Research and Technology Center
                              (CSRTC)
                            </h3>

                            <p>
                              To initiate and foster research in Space
                              Technology, Charusat Space Research and Technology
                              Center (CSRTC) has been established on 15th June
                              2013.
                            </p>

                            <br />
                            <h4>Objecctives of CSRTC</h4>
                            <hr />
                            <ul>
                              <li>
                                To provide best possible educational facilities
                                for training students for the careers in Space
                                Technology
                              </li>
                              <li>
                                To provide a healthy atmosphere to students and
                                faculty for higher studies and research
                              </li>
                              <li>
                                To provide research and development consultancy
                              </li>
                              <li>
                                To establish bridge between university and
                                industry to provide services to industries and
                                to community at large
                              </li>
                            </ul>
                            <br />
                            <p>
                              Presently, the centre works on development of Nano
                              Satellite called “SARASWATI” under the ISRO
                              Student Satellite Program. Further, SAC, ISRO,
                              Ahmedabad has approved five research proposals
                              submitted by CHARUSAT. Currently, the center is
                              working on these five projects and Student Nano
                              Satellite Program. For the purpose, an MOU has
                              also been signed between CHARUSAT and SAC, ISRO,
                              Ahmedabad on 3rd February 2014.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            <Contact
              name="Dr J P Chaudhari"
              email="jitendrachaudhari@charusat.ac.in"
              phone="+91-2697-265176"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CSRTC;
