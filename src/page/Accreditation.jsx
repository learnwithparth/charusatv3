import { Fragment } from "react";
import React from "react";
import { Helmet } from "react-helmet";
// import CourseSideCetagory from "../component/sidebar/contact_";
import Cycle1 from "../component/sidebar/NAAC-Cycle-1";
import Cycle2 from "../component/sidebar/NAAC-Cycle-2";
import Contact from "../component/section/contact";
import NIRF from "../component/sidebar/NIRF";
import GSIRF from "../component/sidebar/GSIRF";

const Accreditation = () => {
  // const [isActive, setIsActive] = useState(null);
  // const toggle = (i) =>{
  //     if(isActive==i){
  //     return setIsActive(null)
  //     }
  //     setIsActive(i)
  // }

  return (
    <Fragment>
      {/* <Header />
            <PageHeaderTwo /> */}
      <Helmet>
        <title>Accreditation</title>
        <meta http-equiv="Content-Type" content=" text/html; charset=utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Accreditation earned by CHARUSAT" />
        <meta
          name="keywords"
          content="NAAC Accreditation, NBA Accreditated, Accreditation, CHARUSAT Accreditated A grade by NAAC, CHARUSAT Accreditated A grade by GSIRF and KCG"
        />
        <meta name="robots" content="index" />
        <meta name="robots" content="follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="translate" />
        <meta name="google" content="nopagereadaloud" />
        <meta property="og:type" content="homepage" />
        <meta property="og:title" content="Accreditatiron Homepage" />
        <meta
          property="og:description"
          content="Accreditation - CHARUSAT accreditated with A grade by NAAC"
        />
        <meta name="author" content="CHARUSAT Web Team" />
      </Helmet>
      <div className="course-single-section padding-tb section-bg">
        <div className="container post-item style-2">
          <div className="row justify-content-center">
            
            <div className="col-lg-8">
            <div className="post-inner">
                <div className="post-content">
              <div className="main-part">
                <div className="course-item">
                  <div className="course-inner">
                    <div className="course-content">
                    
                      <h3>Accreditation &amp; Ranking </h3>

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
                  <div className="course-video-content" >
                    <div className="accordion" id="accordionExample">
                      <div className="accordion-item">
                        <div className="accordion-header" id="accordion01">
                          <button
                            className="d-flex flex-wrap justify-content-between"
                            data-bs-toggle="collapse"
                            data-bs-target="#videolist1"
                            aria-expanded="true"
                            aria-controls="videolist1"
                          >
                            <span style={{color:"white"}} >Accreditation</span>{" "}
                            <span style={{color:"white"}}>
                              <i class="icofont-square-down"></i>
                            </span>{" "}
                          </button>
                        </div>
                        <div
                          id="videolist1"
                          className="accordion-collapse collapse"
                          aria-labelledby="accordion01"
                          data-bs-parent="#accordionExample"
                          
                        >
                          <div className="row">
                            <div className="col-lg-6">
                              <Cycle2 />
                            </div>

                            <div className="col-lg-6">
                              <Cycle1 />
                            </div>
                          </div>
                          <br />
                        </div>
                      </div>
                      <div className="accordion-item">
                        <div className="accordion-header" id="accordion02">
                          <button
                            className="d-flex flex-wrap justify-content-between"
                            data-bs-toggle="collapse"
                            data-bs-target="#videolist2"
                            aria-expanded="true"
                            aria-controls="videolist2"
                          >
                            {" "}
                            <span style={{color:"white"}}>Ranking</span>{" "}
                            <span style={{color:"white"}}>
                              <i class="icofont-square-down"></i>
                            </span>{" "}
                          </button>
                        </div>
                        <div
                          id="videolist2"
                          className="accordion-collapse collapse"
                          aria-labelledby="accordion02"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="row">
                            <div className="col-lg-6">
                              <NIRF />
                            </div>

                            <div className="col-lg-6">
                              <GSIRF />
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
                          >
                            <span style={{color:"white"}}>CoE, Government of Gujarat</span>{" "}
                            <span style={{color:"white"}}>
                              <i class="icofont-square-down"></i>
                            </span>{" "}
                          </button>
                        </div>
                        <div
                          id="videolist3"
                          className="accordion-collapse collapse"
                          aria-labelledby="accordion03"
                          data-bs-parent="#accordionExample"
                        >
                          <p>
                            The Government of Gujarat has granted CHARUSAT the
                            status of a Center of Excellence.
                          </p>
                          <a
                            class="lab-btn"
                            href="https://charusat.ac.in/files/iqac/coe/CoEApplicationData.pdf"
                          >
                            <span>Application Data</span>
                          </a>
                          <br />
                          <br />
                          {/* <a
                            class="lab-btn"
                            href={CoeNotification}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span>CoE Notification</span>
                          </a>
                          <br/><br/> */}
                          <img
                            src="assets/images/achive/COE-Certificate.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <Author /> */}

                  {/* <Respond /> */}
                </div>
                
                </div>
                </div>
                
              </div>
              {/* <div className="col-lg-4"> */}

              {/* <div className="sidebar-part"> */}
              {/* <CourseSideDetail /> */}
              {/* <CourseSideCetagory /> */}
              {/* </div> */}
              {/* </div> */}
            </div>
            
            
            <Contact
              name="Dr Mayur Sutaria"
              email="coordinator.iqac@charusat.ac.in"
              phone="+91-2697-265037"
            />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </Fragment>
  );
};

export default Accreditation;
