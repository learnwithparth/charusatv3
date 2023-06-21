import { Fragment } from "react";
import {HashRouter, Link } from "react-router-dom";
import Contact from "../component/section/contact";
import Image from "react-bootstrap/Image";

const StudentCorner = () => {
  return (
    <Fragment>
      {/* <spanageHeader title={'4 Results found for: Business'} curPage={'Search Result'} /> */}
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
                            <h3>Student Corner</h3>
                            <hr />
                            <div className="meta-post">
                              <br />
                              {/* <Image src="./assets/images/CDPC_banner.jpg" /> */}
                              {/* <a href="#"></a>
                              <br />
                              <span>coming soon...!</span>
                              <span style={{ color: "#3db166" }}></span>
                              <br />
                              <span style={{ "text-align": "justify" }}></span> */}
                              <div className="">
                                <div
                                  className=""
                                  style={{ paddingBottom: "45px" }}
                                >
                                  <div className="">
                                    <a
                                      href="https://charusat.edu.in:912/OthPaymentApp/frmAcademicVerification.aspx"
                                      target="_blank"
                                    >
                                      <span>Academic Record Verification </span>
                                      <i className="icofont-long-arrow-right"></i>
                                    </a>
                                  </div>
                                  <hr />
                                  <div className="gdlr-core-course-item-list">
                                    <a
                                      className="gdlr-core-course-item-link"
                                      href="https://charusat.ac.in/files/studentCorner/application-form-of-Name-Correction-in-Grade-card-degree-certificate.pdf"
                                      target="_blank"
                                    >
                                      <span className="gdlr-core-course-item-title gdlr-core-skin-title">
                                        {" "}
                                        Name Correction on Grade Card/Degree
                                        Certificate{" "}
                                      </span>
                                      <i className="icofont-long-arrow-right"></i>
                                    </a>
                                  </div>
                                  <hr />
                                  <div className="gdlr-core-course-item-list">
                                    <a
                                      className="gdlr-core-course-item-link"
                                      href="https://charusat.edu.in:912/OthPaymentApp/"
                                      target="_blank"
                                    >
                                      <span className="gdlr-core-course-item-title gdlr-core-skin-title">
                                        Transcript / Duplicate Grade Card / Migration Certificate
                                      </span>
                                      <i className="icofont-long-arrow-right"></i>
                                    </a>
                                  </div>
                                  <hr />
                                  <div className="gdlr-core-course-item-list">
                                    <a
                                      className="gdlr-core-course-item-link"
                                      href="https://charusat.ac.in/files/studentCorner/Transfer_of_academic_year.pdf"
                                      target="_blank"
                                    >
                                      <span className="gdlr-core-course-item-title gdlr-core-skin-title">
                                        Transfer of Academic Year
                                      </span>
                                      <i className="icofont-long-arrow-right"></i>
                                    </a>
                                  </div>
                                  <hr />

                                  <div className="gdlr-core-course-item-list">
                                    <a
                                      className="gdlr-core-course-item-link"
                                      href="https://charusat.edu.in:912/eGovernance/"
                                      target="_blank"
                                    >
                                      <span className="gdlr-core-course-item-title gdlr-core-skin-title">
                                        CHARUSAT e-Governance
                                      </span>
                                      <i className="icofont-long-arrow-right"></i>
                                    </a>
                                  </div>
                                  <hr />
                                  <div className="gdlr-core-course-item-list">
                                    <a
                                      className="gdlr-core-course-item-link"
                                      href="https://charusat.ac.in/files/studentCorner/Detention_rules_2021-22.pdf"
                                      target="_blank"
                                    >
                                      {/*href="https://www.charusat.ac.in/files/studentCorner/Circular%20(Academic%20&%20Exam%20Section).pdf" target="_blank">*/}
                                      {/*<span class="gdlr-core-course-item-id gdlr-core-skin-caption">DOWNLOAD</span>*/}
                                      <span className="gdlr-core-course-item-title gdlr-core-skin-title">
                                        Rules of Promotion to Next Academic Year
                                      </span>
                                      <i className="icofont-long-arrow-right"></i>
                                    </a>
                                  </div>
                                  <hr />
                                  <div className="gdlr-core-course-item-list">
                                    <a
                                      className="gdlr-core-course-item-link"
                                      href="https://charusat.ac.in/Downloads/"
                                      target="_blank"
                                    >
                                      {/*<span class="gdlr-core-course-item-id gdlr-core-skin-caption">DOWNLOAD</span>*/}
                                      <span className="gdlr-core-course-item-title gdlr-core-skin-title">
                                        Downloads
                                      </span>
                                      <i className="icofont-long-arrow-right"></i>
                                    </a>
                                  </div>
                                  <hr />
                                  <div className="gdlr-core-course-item-list">
                                    <a
                                      className="gdlr-core-course-item-link"
                                      href="https://charusat.edu.in:912/Uniexamresult/"
                                      target="_blank"
                                    >
                                      <span className="gdlr-core-course-item-title gdlr-core-skin-title">
                                        Exam Result{" "}
                                      </span>
                                      <i className="icofont-long-arrow-right"></i>
                                    </a>
                                  </div>
                                  <hr />
                                  {/* <div className="gdlr-core-course-item-list">
                                    <a
                                      className="gdlr-core-course-item-link"
                                      href="./files/kya.pdf"
                                      target="_blank"
                                    >
                                      <span className="gdlr-core-course-item-title gdlr-core-skin-title">
                                        Guidelines for Know Your Answersheet
                                        (KYA)
                                      </span>
                                      <i className="icofont-long-arrow-right"></i>
                                    </a>
                                  </div>
                                  <hr />
                                  <div className="gdlr-core-course-item-list">
                                    <a
                                      className="gdlr-core-course-item-link"
                                      href="./files/NEW Percent Chart-PG.pdf"
                                      target="_blank"
                                    >
                                      <span className="gdlr-core-course-item-title gdlr-core-skin-title">
                                        Percentage Conversation Formula
                                      </span>
                                      <i className="icofont-long-arrow-right"></i>
                                    </a>
                                  </div>
                                  <hr /> */}
                                  <div className="gdlr-core-course-item-list">
                                    <a
                                      className="gdlr-core-course-item-link"
                                      href="https://charusat.edu.in:912/FeesPaymentApp/"
                                      target="_blank"
                                    >
                                      <span className="gdlr-core-course-item-title gdlr-core-skin-title">
                                        Pay Fees
                                      </span>
                                      <i className="icofont-long-arrow-right"></i>
                                    </a>
                                  </div>
                                  <hr />
                                  {/* <div className="gdlr-core-course-item-list">
                                    <a
                                      className="gdlr-core-course-item-link"
                                      href="https://charusat.ac.in/cdpc.php"
                                      target="_blank"
                                    >
                                      <span className="gdlr-core-course-item-title gdlr-core-skin-title">
                                        Placement Cell{" "}
                                      </span>
                                      <i className="icofont-long-arrow-right"></i>
                                    </a>
                                  </div>
                                  <hr /> */}
                                  <div className="gdlr-core-course-item-list">
                                    <a
                                      className="gdlr-core-course-item-link"
                                      href="./student-wellness-program"
                                      target="_blank"
                                    >
                                      <span className="gdlr-core-course-item-title gdlr-core-skin-title">
                                        Wellness Program{" "}
                                      </span>
                                      <i className="icofont-long-arrow-right"></i>
                                    </a>
                                  </div>
                                  <hr />
                                  <div className="gdlr-core-course-item-list">
                                    <a
                                      className="gdlr-core-course-item-link"
                                      href="https://charusat.ac.in/documents/pdfs/data_1/Code_Of_Conduct/Student%20code%20of%20Conduct.pdf"
                                      target="_blank"
                                    >
                                      <span className="gdlr-core-course-item-title gdlr-core-skin-title">
                                        Student Code of Conduct{" "}
                                      </span>
                                      <i className="icofont-long-arrow-right"></i>
                                    </a>
                                  </div>
                                  <hr />
                                  <div className="gdlr-core-course-item-list">
                                    <a
                                      className="gdlr-core-course-item-link"
                                      href="https://charusat.ac.in/flipbooks/SSS_Brief_Summary_for_AY_2019_20/"
                                    >
                                      <span
                                        className="gdlr-core-course-item-title gdlr-core-skin-title"
                                        target="_blank"
                                      >
                                        Students' Satisfaction Survey{" "}
                                      </span>
                                      <i className="icofont-long-arrow-right"></i>
                                    </a>
                                  </div>
                                  <hr />
                                  <div className="gdlr-core-course-item-list">
                                    <a
                                      className="gdlr-core-course-item-link"
                                      href="https://nad.digilocker.gov.in/students"
                                      target="_blank"
                                    >
                                      <span className="gdlr-core-course-item-title gdlr-core-skin-title">
                                        Students' NDML Academic depository{" "}
                                      </span>
                                      <i className="icofont-long-arrow-right"></i>
                                    </a>
                                  </div>
                                  <hr />
                                  <div className="gdlr-core-course-item-list">
                                    <a
                                      className="gdlr-core-course-item-link"
                                      href="https://charusat.ac.in/Downloads/Syllabus"
                                      target="_blank"
                                    >
                                      <span className="gdlr-core-course-item-title gdlr-core-skin-title">
                                        Syllabus &amp; Academic Regulations{" "}
                                      </span>
                                      <i className="icofont-long-arrow-right"></i>
                                    </a>
                                  </div>
                                  <hr />
                                  <div className="gdlr-core-course-item-list">
                                    <a
                                      className="gdlr-core-course-item-link"
                                      href="./hostels"
                                      target="_blank"
                                    >
                                      <span className="gdlr-core-course-item-title gdlr-core-skin-title">
                                        Hostel{" "}
                                      </span>
                                      <i className="icofont-long-arrow-right"></i>
                                    </a>
                                  </div>
                                  <hr />
                                  <div className="gdlr-core-course-item-list">
                                    <span className="gdlr-core-course-item-title gdlr-core-skin-title">
                                      Fellowship -
                                    </span>
                                    <a
                                      href="https://charusat.ac.in/files/UGSF%20Application%20form.pdf"
                                      target="_blank"
                                    >
                                      <span className="gdlr-core-course-item-title gdlr-core-skin-title">
                                        {" "}
                                        UG{" "}
                                      </span>
                                    </a>{" "}
                                    |
                                    <a
                                      href="https://charusat.ac.in/files/PGSF%20Application%20form.pdf"
                                      target="_blank"
                                    >
                                      <span className="gdlr-core-course-item-title gdlr-core-skin-title">
                                        {" "}
                                        PG{" "}
                                      </span>
                                    </a>{" "}
                                    |
                                    <a
                                      href="https://charusat.ac.in/documents/pdfs/research/CPSF.pdf"
                                      target="_blank"
                                    >
                                      <span className="gdlr-core-course-item-title gdlr-core-skin-title">
                                        {" "}
                                        PhD{" "}
                                      </span>
                                    </a>{" "}
                                    |
                                    <a
                                      href="https://charusat.ac.in/documents/pdfs/research/PDF%20Policy%20CHARUSAT.pdf"
                                      target="_blank"
                                    >
                                      <span className="gdlr-core-course-item-title gdlr-core-skin-title">
                                        PDF
                                      </span>
                                    </a>
                                  </div>
                                  <hr />
                                  <div className="gdlr-core-course-item-list">
                                    <Link
                                      className="gdlr-core-course-item-link"
                                      to="/student-development-initiatives"
                                      target="_blank"
                                    >
                                      <span className="gdlr-core-course-item-title gdlr-core-skin-title">
                                        Student Development Initiatives
                                      </span>
                                      <i className="icofont-long-arrow-right"></i>
                                    </Link>
                                  </div>
                                  <hr />
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

            <Contact
              name="Mr. Dipen Patel "
              email="dipenpatel.rnd@charusat.ac.in"
              phone=" +91-2697-265008"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default StudentCorner;
