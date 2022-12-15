import { Component, Fragment } from "react";
// import CourseSideCetagory from "../component/sidebar/contact_";
import Cycle1 from "../component/sidebar/NAAC-Cycle-1";
import Cycle2 from "../component/sidebar/NAAC-Cycle-2";
import Contact from "../component/section/contact";
import NIRF from "../component/sidebar/NIRF";
import GSIRF from "../component/sidebar/GSIRF";


const Accreditation = () => {
    return (
        <Fragment>
            {/* <Header />
            <PageHeaderTwo /> */}
            <div className="course-single-section padding-tb section-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="main-part">
                                <div className="course-item">
                                    <div className="course-inner">
                                        <div className="course-content">
                                            <h3>Accreditation &amp; Ranking</h3>
                                            {/* <p>In this course take you from the fundamentals and concepts of data modeling all the way through anumber of best practices and techniques that you’ll need to build data models in your organization. You’ll find many By the end of the course, you’ll be all set to not only put these principles to works but also to maike the key data modeling and design decisions required by the info data modeling that transcend the nuts-and-bolts that clearly the key covered the course and design patterns.</p>
                                            <h4>What You'll Learn in This Course:</h4>
                                            <ul className="lab-ul">
                                                <li><i className="icofont-tick-mark"></i>Ready to begin working on real-world data modeling projects</li>
                                                <li><i className="icofont-tick-mark"></i>Expanded responsibilities as part of an existing role</li>
                                                <li><i className="icofont-tick-mark"></i>Be able to create Flyers, Brochures, Advertisements</li>
                                                <li><i className="icofont-tick-mark"></i>Find a new position involving data modeling.</li>
                                                <li><i className="icofont-tick-mark"></i>Work with color and Gradients and Grids</li>
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
                                                <div className="accordion-header" id="accordion01">
                                                    <button className="d-flex flex-wrap justify-content-between" data-bs-toggle="collapse" data-bs-target="#videolist1" aria-expanded="true" aria-controls="videolist1"><span>Accreditation</span> <span></span> </button>
                                                </div>
                                                <div id="videolist1" className="accordion-collapse collapse show" aria-labelledby="accordion01" data-bs-parent="#accordionExample">
                                                    <div className="row">
                                                    <div className="col-lg-6">
                                                    <Cycle2 />
                                                    
                                                    </div>
                                                    
                                                    <div className="col-lg-6">
                                                    <Cycle1 />
                                                    </div>
                                                </div>
                                                <br/>
                                                </div>
                                                
                                            </div>
                                            <div className="accordion-item">
                                                <div className="accordion-header" id="accordion02">
                                                    <button className="d-flex flex-wrap justify-content-between" data-bs-toggle="collapse" data-bs-target="#videolist2" aria-expanded="true" aria-controls="videolist2"> <span>Ranking</span> <span></span> </button>
                                                </div>
                                                <div id="videolist2" className="accordion-collapse collapse" aria-labelledby="accordion02" data-bs-parent="#accordionExample">
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                        <NIRF />
                                                        </div>
                                                        
                                                        <div className="col-lg-6">
                                                        <GSIRF />
                                                        </div>
                                                    </div>
                                                    <br/>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <div className="accordion-header" id="accordion03">
                                                    <button className="d-flex flex-wrap justify-content-between" data-bs-toggle="collapse" data-bs-target="#videolist3" aria-expanded="true" aria-controls="videolist3"><span>CoE, Government of Gujarat</span> <span></span> </button>
                                                </div>
                                                <div id="videolist3" className="accordion-collapse collapse show" aria-labelledby="accordion03" data-bs-parent="#accordionExample">
                                                    <p>CHARUSAT has applied to Government of Gujarat for the grant of the status of Center of Excellence.</p>
                                                    <a class="lab-btn" href="https://charusat.ac.in/files/iqac/coe/CoEApplicationData.pdf"><span>Application Data</span></a>
                                                    <br/><br/>
                                                    <a class="lab-btn" href="http://www.coegujarat.org/index.aspx"><span>CoE Gujarat Website</span></a>
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
                        <Contact
                name="Dr Mayur Sutaria"
                email="coordinator.iqac@charusat.ac.in"
                phone="+91-2697-265037"
              />
              
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
}

export default Accreditation;