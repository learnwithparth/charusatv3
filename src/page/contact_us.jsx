import { Fragment } from "react";
// import CourseSideCetagory from "../component/sidebar/contact_";

// import Cycle1 from "../component/sidebar/NAAC-Cycle-1";
// import Cycle2 from "../component/sidebar/NAAC-Cycle-2";
// import NIRF from "../component/sidebar/NIRF";
// import GSIRF from "../component/sidebar/GSIRF";
import servicerules from "../files/CHARUSAT Service Rules.pdf";
import Contact from "../component/section/contact";

import React, { useState } from "react";

const ContactUs = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <Fragment>
      {/* <Header />
            <PageHeaderTwo /> */}
      <div className="course-single-section padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col">
              <div className="main-part">
                <div className="course-item">
                  <div className="course-inner">
                    <div className="course-content">
                      <h3 style={{ textAlign: "center" }}>Contact Us</h3>
                      <hr />
                      <br />
                      {/* <p>In this course take you from the fundamentals and concepts of data modeling all the way through anumber of best practices and techniques that you’ll need to build data models in your organization. You’ll find many By the end of the course, you’ll be all set to not only put these principles to works but also to maike the key data modeling and design decisions required by the info data modeling that transcend the nuts-and-bolts that clearly the key covered the course and design patterns.</p>
                                            <h4>What You'll Learn in This Course:</h4>
                                            <ul>
                                                <li>{ <i className="icofont-tick-mark"></i> }
Ready to begin working on real-world data modeling projects</li>
                                                <li>{ <i className="icofont-tick-mark"></i> }
Expanded responsibilities as part of an existing role</li>
                                                <li>{ <i className="icofont-tick-mark"></i> }
Be able to create Flyers, Brochures, Advertisements</li>
                                                <li>{ <i className="icofont-tick-mark"></i> }
Find a new position involving data modeling.</li>
                                                <li>{ <i className="icofont-tick-mark"></i> }
Work with color and Gradients and Grids</li>
                                            </ul>
                                            <p>In this course take you from the fundamentals and concepts of data modeling all the way through anumber  of best practices and techniques that you’ll need to build data models in your organization. You’ll find many examples that clearly the key covered the course</p>
                                            <p>By the end of the course, you’ll be all set to not only put these principles to works but also to maike the key data modeling and design decisions required by the info data modeling that transcend the nuts-and-bolts that clearly the key covered the course and design patterns.</p> */}
                    </div>
                  </div>
                </div>

                <div className="course-video">
                  {/* <div className="course-video-title">
                                        <h4>Course Content</h4>
                                    </div> */}
                  <div className="course-video-content">
                    <div className="accordion" id="accordionExample">
                      <div className="accordion-item">
                        <div className="accordion-header" id="accordion02">
                          <button
                            className="d-flex flex-wrap justify-content-between"
                            data-bs-toggle="collapse"
                            data-bs-target="#videolist2"
                            aria-expanded="true"
                            aria-controls="videolist2"
                            onClick={() => setIsActive(!isActive)}
                          >
                            {" "}
                            <span>Sports Section</span>{" "}
                            <span>{isActive ? "-" : "+"}</span>{" "}
                          </button>
                        </div>
                        <div
                          id="videolist2"
                          className="accordion-collapse collapse"
                          aria-labelledby="accordion02"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="row">
                            <div className="col-lg">
                              <Contact
                                name="Dr. Yogesh Jani"
                                email="yogeshjani.sports@charusat.ac.in"
                                phone="+91-2697-265036"
                              />
                            </div>
                          </div>
                          <br />
                        </div>
                      </div>
                      <div className="accordion-item">
                        <div className="accordion-header" id="accordion03">
                          <button
                            className="d-flex flex-wrap justify-content-between"
                            data-bs-toggle="collapse"
                            data-bs-target="#videolist3"
                            aria-expanded="true"
                            aria-controls="videolist3"
                            onClick={() => setIsActive(!isActive)}
                          >
                            <span>Examination Section</span>{" "}
                            <span>{isActive ? "-" : "+"}</span>{" "}
                          </button>
                        </div>
                        <div
                          id="videolist3"
                          className="accordion-collapse collapse"
                          aria-labelledby="accordion03"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="row">
                            <div className="col-lg">
                              <Contact
                                name="Mr. Hashmukh Patel"
                                email="hasmukhpatel.adm@charusat.ac.in"
                                phone="+91-2697-265004"
                              />
                            </div>
                          </div>
                          <br />
                        </div>
                      </div>

                      <div className="accordion-item">
                        <div className="accordion-header" id="accordion04">
                          <button
                            className="d-flex flex-wrap justify-content-between"
                            data-bs-toggle="collapse"
                            data-bs-target="#videolist4"
                            aria-expanded="true"
                            aria-controls="videolist4"
                            onClick={() => setIsActive(!isActive)}
                          >
                            {" "}
                            <span>HR Section</span>{" "}
                            <span>{isActive ? "-" : "+"}</span>{" "}
                          </button>
                        </div>
                        <div
                          id="videolist4"
                          className="accordion-collapse collapse"
                          aria-labelledby="accordion04"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="row">
                            <div className="col-lg">
                              <h6>
                                Service Rules:{" "}
                                <a
                                  href={servicerules}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  Download &nbsp;
                                  <i class="icofont-download"></i>
                                </a>
                                <br />
                              </h6>
                              <Contact
                                name="Mr. Rajendra Solanki"
                                email="hrd.adm@charusat.ac.in"
                                phone="+91-2697-265006"
                              />
                            </div>
                          </div>

                          {/* <div className="row">
                                                        <div className="col-lg-6">
                                                        <NIRF />
                                                        </div>
                                                        
                                                        <div className="col-lg-6">
                                                        <GSIRF />
                                                        </div>
                                                    </div> */}
                          <br />
                        </div>
                      </div>

                      <div className="accordion-item">
                        <div className="accordion-header" id="accordion05">
                          <button
                            className="d-flex flex-wrap justify-content-between"
                            data-bs-toggle="collapse"
                            data-bs-target="#videolist5"
                            aria-expanded="true"
                            aria-controls="videolist5"
                            onClick={() => setIsActive(!isActive)}
                          >
                            {" "}
                            <span>Accounts Section</span>{" "}
                            <span>{isActive ? "-" : "+"}</span>{" "}
                          </button>
                        </div>
                        <div
                          id="videolist5"
                          className="accordion-collapse collapse"
                          aria-labelledby="accordion05"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="row">
                            <div className="col-lg">
                              <Contact
                                name="Mr. Bhavdeep Patel"
                                email="bhavdippatel.acc@charusat.ac.in"
                                phone="+91-2697-265024"
                              />
                            </div>
                          </div>

                          {/* <div className="row">
                                                        <div className="col-lg-6">
                                                        <NIRF />
                                                        </div>
                                                        
                                                        <div className="col-lg-6">
                                                        <GSIRF />
                                                        </div>
                                                    </div> */}
                          <br />
                        </div>
                      </div>
                      <div className="accordion-item">
                        <div className="accordion-header" id="accordion01">
                          <button
                            className="d-flex flex-wrap justify-content-between"
                            data-bs-toggle="collapse"
                            data-bs-target="#videolist1"
                            aria-expanded="true"
                            aria-controls="videolist1"
                            onClick={() => setIsActive(!isActive)}
                          >
                            <span>Lodge Complaint</span>{" "}
                            <span>{isActive ? "-" : "+"}</span>{" "}
                          </button>
                        </div>
                        <div
                          id="videolist1"
                          className="accordion-collapse collapse"
                          aria-labelledby="accordion01"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="row">
                            <div className="col-lg-8">
                              <br />
                              <p>
                                CHARUSAT believes in the principles of Honesty,
                                Integrity and Transparency. The University aims
                                to provide a harmonic environment to all the
                                students, employees, associates and
                                stakeholders. To facilitate these, various cells
                                at University are established like Grievance
                                Redressal Cell, Equal Opportunity Cell, Women
                                Development Cell, Cell for Prevention of Sexual
                                Harassment and Anti-Ragging Cell. Any
                                stakeholder who finds any discrepancy under the
                                aegis of different cells can use this E-box to
                                register a complaint and University will take
                                further actions to resolve the problem.
                              </p>
                              <a
                                class="lab-btn"
                                href="https://charusat.ac.in/cms/"
                              >
                                <span>Complaint Registration System</span>
                              </a>
                            </div>
                            <br />
                            <br />
                            <Contact
                              name="Dr. Vijay Panchal"
                              email="vijaypanchal.cv@charusat.ac.in"
                              phone="+91-2697-265081"
                            />
                          </div>
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <Author /> */}

                {/* <Respond /> */}
              </div>
            </div>
            {/* <div className="col-lg-4"> */}

            {/* <div className="sidebar-part"> */}
            {/* <CourseSideDetail /> */}
            {/* <CourseSideCetagory /> */}
            {/* </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </Fragment>
  );
};

export default ContactUs;
