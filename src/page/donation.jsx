import { Component, Fragment } from "react";
import { Tab, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageHeader from "../component/layout/pageheader";
import Contact from "../component/section/contact_donation";
import InquiryForm from "../files/InquiryForm.pdf";
import IPRBroucher from "../files/iprBrochuer.jpg";

const Donation = () => {
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
                            <h3>Donation</h3>
                            <hr />
                            <br />
                            {/* <div className="meta-post">
                              <ul className="lab-ul">
                                CHARUSAT IPR Facilitation provides services to
                                all the innovators to protect intellectual
                                property. It offers this facility to innovators,
                                researchers, faculties, students and grassroots
                                innovators within and outside CHARUSAT.
                              </ul>
                              <br />
                              <a class="lab-btn" href={IPRBroucher}>
                                <span>Brochure</span>
                              </a>
                              {"    "}
                              <a class="lab-btn" href={InquiryForm}>
                                <span>Inquiry Form</span>
                              </a>
                            </div> */}
                            <h4>WHY SUPPORT CHARUSAT?</h4>
                            <hr />
                            <ul className="lab-ul">
                              <li>
                                <i className="icofont-tick-mark"></i>{" "}
                                <strong>
                                  CHARUSAT is an “A+” Grade University
                                  accredited by NAAC (Govt. of India).
                                </strong>{" "}
                              </li>
                              <li>
                                <i className="icofont-tick-mark"></i>{" "}
                                <strong>
                                  CHARUSAT’S Mission is social service through
                                  Education and Research.
                                </strong>{" "}
                              </li>
                              <li>
                                <i className="icofont-tick-mark"></i>{" "}
                                <strong>
                                  CHARUSAT seeks support to facilitate the
                                  education of economically constrained
                                  students.
                                </strong>{" "}
                              </li>
                              <li>
                                <i className="icofont-tick-mark"></i>{" "}
                                <strong>
                                  CHARUSAT also works for many more social
                                  development goals.
                                </strong>{" "}
                              </li>
                              <li>
                                <i className="icofont-tick-mark"></i>{" "}
                                <strong>
                                  CHARUSAT practices values of Honesty,
                                  Integrity & Transparency.
                                </strong>
                              </li>
                            </ul>
                            <br />
                            <h4>AVENUES OF HELP</h4>
                            <p>Add Accordian here.......</p>
                            <br />
                            <h4>
                              Some of the Donation Avenues - CHARUSAT University
                            </h4>
                            <Table striped bordered hover>
                              <thead>
                                <tr>
                                  <th>#</th>
                                  <th>PARTICULARS</th>
                                  <th>Amount (Lacs)</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>
                                    CHANDUBHAI S PATEL INSTITUTE OF TECHNOLOGY
                                    (CSPIT)
                                  </td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td>Nomenclature of Mechanical Workshop</td>
                                  <td>100</td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>
                                    DEVANG PATEL INSTITUTE OF ADVANCE TECHNOLOGY
                                    & RESEARCH (DEPSTAR)
                                  </td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td>
                                    Nomenclature of Dept. of Computer Science{" "}
                                  </td>
                                  <td>250</td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td>Virtual Reality Lab</td>
                                  <td>200</td>
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td>
                                    RAMANBHAI PATEL COLLEGE OF PHARMACY (RPCP)
                                  </td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td>Department of Pharmaceutics </td>
                                  <td>100</td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td>Auditorium Hall </td>
                                  <td>200</td>
                                </tr>
                                <tr>
                                  <td>4</td>
                                  <td>
                                    MANIKAKA TOPAWALA INSTITUTE OF NURSING
                                    (MTIN)
                                  </td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td>Advance Nursing Skill Lab </td>
                                  <td>100</td>
                                </tr>
                                <tr>
                                  <td>5</td>
                                  <td>ENDOWMENT FUND</td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td>
                                    Inviting distinguished research professor at
                                    International Cosmology Centre{" "}
                                  </td>
                                  <td>100</td>
                                </tr>
                              </tbody>
                            </Table>

                            <br />
                            <h4>TAX BENEFIT</h4>
                            <hr />
                            <ul className="lab-ul">
                              <li>
                                <i className="icofont-tick-mark"></i>{" "}
                                <strong>
                                  Donation to CHARUSAT are Tax exempted under
                                  80G of Income Tax Act.(Indian Donors)
                                </strong>{" "}
                              </li>
                              <li>
                                <i className="icofont-tick-mark"></i>{" "}
                                <strong>
                                  USA donors can route their donation through
                                  CHARUSAT Education Foundation. Inc., and avail
                                  Income tax exemption under IRS section 501(c)
                                  3 Tax fin ID 46-3603014
                                </strong>{" "}
                              </li>
                            </ul>
                            <br />
                            <h4>RECOGNITION</h4>
                            <hr />
                            <p>
                              All donations to CHARUSAT are acknowledged through
                              internal publications, website, and similar
                              communications. The avenue where a donor has
                              contributed carries donors name permanently. For
                              Eg.
                            </p>
                            <ul className="lab-ul">
                              <li>
                                <i className="icofont-tick-mark"></i>{" "}
                                <strong>
                                  Ashok and Rita Patel Institute of
                                  Physiotherapy
                                </strong>{" "}
                              </li>
                              <li>
                                <i className="icofont-tick-mark"></i>{" "}
                                <strong>
                                  Ramanbhai Patel College of Pharmacy
                                </strong>{" "}
                              </li>

                              <li>
                                <i className="icofont-tick-mark"></i>{" "}
                                <strong>
                                  Anil & Asha Patel Endowment Fund
                                </strong>{" "}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            <Contact
              name="Mr. Shreyas Dalal"
              email="shreyasdalal.adm@charusat.ac.in"
              phone="+91 9327014785"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Donation;
