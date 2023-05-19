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
                              Charusat Space Research and Technology Center (CSRTC) is dedicated to promoting and advancing research in space technology. Established on 15th June 2013, the center has been working tirelessly to achieve its objectives, which include providing top-notch educational facilities to students pursuing careers in space technology, offering a conducive environment to faculty and students for research, providing research and development consultancy, and bridging the gap between the university and industry to provide services to the community at large.
                              <br />
                              <br />
                              At CSRTC, we are currently focused on the development of "SARASWATI," a nanosatellite, as part of the ISRO Student Satellite Program. Our efforts have been recognized by SAC, ISRO, Ahmedabad, which has approved five research proposals submitted by CHARUSAT. We are actively working on these five projects, as well as the Student Nano Satellite Program, with the support of an MOU signed between CHARUSAT and SAC, ISRO, Ahmedabad on 3rd February 2014.

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
