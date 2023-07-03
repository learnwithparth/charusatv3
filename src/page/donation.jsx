import { Component, Fragment } from "react";
import { Tab, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageHeader from "../component/layout/pageheader";
import Contact from "../component/section/contact_donation";
import InquiryForm from "../files/InquiryForm.pdf";
import IPRBroucher from "../files/iprBrochuer.jpg";
import { Helmet } from "react-helmet";

const Donation = () => {
  return (
    <Fragment>
      <Helmet>
        <title>CHARUSAT Donations</title>
        <meta http-equiv="Content-Type" content=" text/html; charset=utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="CHRUSAT Donations" />
        <meta
          name="keywords"
          content="CHARUSAT Donations, Donation Details, Donate to CHARUSAT, Support CHARUSAT, Recognition, best university of gujarat"
        />
        <meta name="robots" content="index" />
        <meta name="robots" content="follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="translate" />
        <meta name="google" content="nopagereadaloud" />
        <meta property="og:type" content="homepage" />
        <meta property="og:title" content="CHARUSAT Donation Homepage" />
        <meta
          property="og:description"
          content="CHARUSAT Donation details page, Why support CHARUSAT, Recognition of CHARUSAT"
        />
        <meta name="author" content="CHARUSAT Web Team" />
      </Helmet>
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
                              <ul>
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
                            <h5>WHY SUPPORT CHARUSAT?</h5>
                            <hr />
                            <ul>
                              <li>
                                {/* <i className="icofont-tick-mark"></i> */}
{" "}
                                {/* <strong> */}
                                CHARUSAT is an “A+” Grade University accredited
                                by NAAC (Govt. of India).
                                {/* </strong> */}{" "}
                              </li>
                              <li>
                                {/* <i className="icofont-tick-mark"></i> */}
{" "}
                                {/* <strong> */}
                                CHARUSAT’S Mission is social service through
                                Education and Research.
                              </li>
                              <li>
                                {/* <i className="icofont-tick-mark"></i> */}
{" "}
                                {/* <strong> */}
                                CHARUSAT seeks support to facilitate the

                                education of economically constrained students.
                                {/* </strong> */}{" "}
                              </li>

                              <li>
                                {/* <i className="icofont-tick-mark"></i> */}
{" "}
                                {/* <strong> */}
                                CHARUSAT also works for many more social
                                development goals.
                              </li>
                              <li>
                                {/* <i className="icofont-tick-mark"></i> */}
{" "}
                                {/* <strong> */}
                                CHARUSAT practices values of Honesty, Integrity
                                & Transparency.
                                {/* </strong> */}
                              </li>
                            </ul>
                            <br />
                            <h4>AVENUES OF HELP</h4>
                            <hr />

                            <div className="course-single-section">
                              <div className="container">
                                <div className="row justify-content-left">
                                  <div className="col">
                                    <div className="main-part">
                                      <div className="course-video">
                                        {/* <div className="course-video-title">
                                        <h4>Course Content</h4>
                                    </div> */}
                                        <div className="course-video-content">
                                          <div
                                            className="accordion"
                                            id="accordionExample"
                                          >
                                            <div className="accordion-item">
                                              <div
                                                className="accordion-header"
                                                id="accordion01"
                                              >
                                                <button
                                                  className="d-flex flex-wrap justify-content-between"
                                                  data-bs-toggle="collapse"
                                                  data-bs-target="#videolist1"
                                                  aria-expanded="true"
                                                  aria-controls="videolist1"
                                                >
                                                  <span className="text-white">
                                                    SCHOLARSHIPS
                                                  </span>{" "}
                                                  <span className="text-white">
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
                                                  <div className="col">
                                                    CHARUSAT is making all
                                                    attempts to provide world
                                                    class education and
                                                    opportunities to the youth
                                                    irrespective of cast, creed
                                                    or economical background.
                                                    <br />
                                                    <br />A Donor can sponsor
                                                    the economically constrained
                                                    student – fully or
                                                    partially. He/She can
                                                    contribute Rs. 25 lakhs (or
                                                    more) in the establishment
                                                    of a Trust Fund whose
                                                    interest will be used to
                                                    finance the economically
                                                    constrained students.
                                                    Similar trust fund can be
                                                    created for Merit
                                                    Scholarships.
                                                  </div>
                                                </div>
                                                <br />
                                              </div>
                                            </div>
                                            <div className="accordion-item">
                                              <div
                                                className="accordion-header"
                                                id="accordion02"
                                              >
                                                <button
                                                  className="d-flex flex-wrap justify-content-between"
                                                  data-bs-toggle="collapse"
                                                  data-bs-target="#videolist2"
                                                  aria-expanded="true"
                                                  aria-controls="videolist2"
                                                >
                                                  {" "}
                                                  <span className="text-white">
                                                    GOLD MEDAL - SPONSORSHIP
                                                  </span>{" "}
                                                  <span className="text-white">
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
                                                  <div className="col">
                                                    Every Student who is
                                                    obtaining the first rank in
                                                    his / her program of study
                                                    is rewarded with a Gold
                                                    Medal. A Donor can create an
                                                    endowment of Rs. 7.50 lakhs.
                                                    Its interest is used for
                                                    sponsoring a Gold Medal to
                                                    be awarded to most
                                                    meritorious students.
                                                    <br />
                                                    <br />
                                                    <strong>
                                                      Gold Medal Endowment -
                                                      7,50,000 INR{" "}
                                                    </strong>
                                                  </div>
                                                </div>
                                                <br />
                                              </div>
                                            </div>
                                            <div className="accordion-item">
                                              <div
                                                className="accordion-header"
                                                id="accordion03"
                                              >
                                                <button
                                                  className="d-flex flex-wrap justify-content-between"
                                                  data-bs-toggle="collapse"
                                                  data-bs-target="#videolist3"
                                                  aria-expanded="true"
                                                  aria-controls="videolist3"
                                                >
                                                  <span className="text-white">
                                                    BOOKS,JOURNALS, EQUIPMENTS
                                                  </span>{" "}
                                                  <span className="text-white">
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
                                                  “When you give someone a book,
                                                  you don’t give him just paper,
                                                  ink, and glue, you give him
                                                  the possibility of a whole new
                                                  world.” —Christopher Marley
                                                </p>

                                                <p>
                                                  Giving for books, Journals and
                                                  Equipment are immensely
                                                  beneficial to the pupils.
                                                </p>
                                                <table
                                                  class="table table-hover"
                                                  border="1"
                                                >
                                                  <tbody>
                                                    <tr>
                                                      <th>Particulars</th>
                                                      <th>Amount in INR</th>
                                                    </tr>
                                                    <tr>
                                                      <td>
                                                        Books &amp; Journal Fund
                                                      </td>
                                                      <td>25000</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Software Fund</td>
                                                      <td>50000</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Equipment Fund</td>
                                                      <td>100000</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </div>
                                            </div>
                                            <div className="accordion-item">
                                              <div
                                                className="accordion-header"
                                                id="accordion04"
                                              >
                                                <button
                                                  className="d-flex flex-wrap justify-content-between"
                                                  data-bs-toggle="collapse"
                                                  data-bs-target="#videolist4"
                                                  aria-expanded="true"
                                                  aria-controls="videolist4"
                                                >
                                                  {" "}
                                                  <span className="text-white">
                                                    RESEARCH FELLOWSHIP
                                                    FUNDS(For PhD & PostDoc
                                                    Study)
                                                  </span>{" "}
                                                  <span className="text-white">
                                                    <i class="icofont-square-down"></i>
                                                  </span>{" "}
                                                </button>
                                              </div>
                                              <div
                                                id="videolist4"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="accordion04"
                                                data-bs-parent="#accordionExample"
                                              >
                                                <div className="row">
                                                  <div className="col">
                                                    Research fellowship funds
                                                    enable students to access
                                                    relevant research materials
                                                    as well as conduct research.
                                                    Funds will be invested and
                                                    its interest will be used to
                                                    give fellowship to research
                                                    students for undertaking
                                                    research.
                                                    <br />
                                                    <br />
                                                    <strong>
                                                      Research work - 25 lakhs{" "}
                                                    </strong>
                                                  </div>
                                                </div>
                                                <br />
                                              </div>
                                            </div>
                                            <div className="accordion-item">
                                              <div
                                                className="accordion-header"
                                                id="accordion05"
                                              >
                                                <button
                                                  className="d-flex flex-wrap justify-content-between"
                                                  data-bs-toggle="collapse"
                                                  data-bs-target="#videolist5"
                                                  aria-expanded="true"
                                                  aria-controls="videolist5"
                                                >
                                                  {" "}
                                                  <span className="text-white">
                                                    ENDOWMENT CHAIR
                                                  </span>{" "}
                                                  <span className="text-white">
                                                    <i class="icofont-square-down"></i>
                                                  </span>{" "}
                                                </button>
                                              </div>
                                              <div
                                                id="videolist5"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="accordion05"
                                                data-bs-parent="#accordionExample"
                                              >
                                                <div className="row">
                                                  <div className="col">
                                                    An Endowment Chair is
                                                    created by a minimum
                                                    endowment of Rs. 25 lakhs.
                                                    The interest is used every
                                                    year for inviting a
                                                    Distinguished Professor for
                                                    a limited period.
                                                    <br />
                                                    <br />
                                                    <strong>
                                                      Research work - 25 lakhs{" "}
                                                    </strong>
                                                  </div>
                                                </div>
                                                <br />
                                              </div>
                                            </div>
                                            <div className="accordion-item">
                                              <div
                                                className="accordion-header"
                                                id="accordion06"
                                              >
                                                <button
                                                  className="d-flex flex-wrap justify-content-between"
                                                  data-bs-toggle="collapse"
                                                  data-bs-target="#videolist6"
                                                  aria-expanded="true"
                                                  aria-controls="videolist6"
                                                >
                                                  {" "}
                                                  <span className="text-white">
                                                    INFRASTRUCTURE DEVELOPMENT
                                                  </span>{" "}
                                                  <span className="text-white">
                                                    <i class="icofont-square-down"></i>
                                                  </span>{" "}
                                                </button>
                                              </div>
                                              <div
                                                id="videolist6"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="accordion06"
                                                data-bs-parent="#accordionExample"
                                              >
                                                <div className="row">
                                                  <div className="col">
                                                    A donor may wish to
                                                    contribute in sponsoring
                                                    development of
                                                    infrastructure units like
                                                    Lecture Hall, Laboratories,
                                                    Seminar Halls, Auditorium,
                                                    and Hostel Rooms etc. The
                                                    units awaiting sponsorships
                                                    are
                                                    <br />
                                                    <br />
                                                    <table
                                                      class="table table-hover"
                                                      border="1"
                                                    >
                                                      <tbody>
                                                        <tr>
                                                          <th>Sr. No.</th>
                                                          <th>Purpose</th>
                                                          <th>INR in lakh</th>
                                                        </tr>
                                                        <tr>
                                                          <th>1</th>
                                                          <th colspan="2">
                                                            Campus
                                                          </th>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>
                                                            University Exam
                                                            Building
                                                          </td>
                                                          <td>500</td>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>
                                                            Sports Complex
                                                          </td>
                                                          <td>1000</td>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>
                                                            Lake Development
                                                          </td>
                                                          <td>100</td>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>
                                                            Auditorium (1000
                                                            persons)
                                                          </td>
                                                          <td>1500</td>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>
                                                            Central Plaza – Open
                                                            Air Theatre
                                                          </td>
                                                          <td>51</td>
                                                        </tr>
                                                        <tr>
                                                          <th>2</th>
                                                          <th colspan="2">
                                                            Chandubhai S Patel
                                                            Institute of
                                                            Technology (CSPIT)
                                                          </th>
                                                        </tr>
                                                        <tr>
                                                          <th></th>
                                                          <th colspan="2">
                                                            V. T. Patel
                                                            Department of
                                                            Electronics &amp;
                                                            Communication
                                                            Engineering
                                                          </th>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>
                                                            Communication System
                                                            Lab
                                                          </td>
                                                          <td>31</td>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>
                                                            Control System Lab
                                                          </td>
                                                          <td>31</td>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>
                                                            Switching &amp;
                                                            Digital Circuits Lab
                                                          </td>
                                                          <td>31</td>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>
                                                            Application packages
                                                            (MAT) Lab
                                                          </td>
                                                          <td>31</td>
                                                        </tr>
                                                        <tr>
                                                          <th></th>
                                                          <th colspan="2">
                                                            CHAMOS Matrusanstha
                                                            Department of
                                                            Mechanical
                                                            Engineering
                                                          </th>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>
                                                            Fluid Machine Lab
                                                          </td>
                                                          <td>31</td>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>
                                                            Dynamics of Machine
                                                            Lab
                                                          </td>
                                                          <td>31</td>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>
                                                            Material Technology
                                                            Lab
                                                          </td>
                                                          <td>31</td>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>
                                                            Measurement Lab
                                                          </td>
                                                          <td>31</td>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>CAD Lab</td>
                                                          <td>31</td>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>
                                                            Refrigeration &amp;
                                                            Air Conditioning Lab
                                                          </td>
                                                          <td>31</td>
                                                        </tr>
                                                        <tr>
                                                          <th></th>
                                                          <th colspan="2">
                                                            M &amp; V Patel
                                                            Department of
                                                            Electrical
                                                            Engineering
                                                          </th>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>
                                                            Electrical Machine
                                                            Lab
                                                          </td>
                                                          <td>31</td>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>
                                                            Electronic Drives
                                                            and Power Lab
                                                          </td>
                                                          <td>31</td>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>
                                                            Power System
                                                            Protection Lab
                                                          </td>
                                                          <td>31</td>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>
                                                            Applied Electronics
                                                            Project Lab
                                                          </td>
                                                          <td>31</td>
                                                        </tr>
                                                        <tr>
                                                          <th></th>
                                                          <th colspan="2">
                                                            U &amp; PU. Patel
                                                            Department of
                                                            Computer Engineering
                                                            <br /> Department of
                                                            Information
                                                            Technology
                                                          </th>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>
                                                            Computer Net Work
                                                            Lab
                                                          </td>
                                                          <td>31</td>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>
                                                            Programming Lab
                                                          </td>
                                                          <td>31</td>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>
                                                            Application Lab
                                                          </td>
                                                          <td>31</td>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>Database Lab</td>
                                                          <td>31</td>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>
                                                            Operating System Lab
                                                          </td>
                                                          <td>31</td>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>
                                                            Artificial
                                                            Intelligence Lab
                                                          </td>
                                                          <td>31</td>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>
                                                            Multimedia Lab
                                                          </td>
                                                          <td>31</td>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>Internet Lab</td>
                                                          <td>31</td>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>Server Room</td>
                                                          <td>50</td>
                                                        </tr>
                                                        <tr>
                                                          <th>3</th>
                                                          <th colspan="2">
                                                            Devang Patel
                                                            Institute of Advance
                                                            Technology &amp;
                                                            Research (DEPSTAR)
                                                          </th>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>
                                                            Virtual Reality Lab
                                                          </td>
                                                          <td>200</td>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>
                                                            General Computer Lab
                                                          </td>
                                                          <td>31</td>
                                                        </tr>
                                                        <tr>
                                                          <th>4</th>
                                                          <th colspan="2">
                                                            Shri Chandaben
                                                            Mohanbhai Institute
                                                            Of Computer
                                                            Application (CMPICA)
                                                          </th>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>
                                                            System Programing
                                                            Lab
                                                          </td>
                                                          <td>31</td>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>
                                                            Multimedia Lab
                                                          </td>
                                                          <td>31</td>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>
                                                            Operating System Lab
                                                          </td>
                                                          <td>31</td>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>Database Lab</td>
                                                          <td>31</td>
                                                        </tr>
                                                        <tr>
                                                          <th>5</th>
                                                          <th colspan="2">
                                                            Ramanbhai Patel
                                                            College of Pharmacy
                                                            (RPCP)
                                                          </th>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>
                                                            Department of
                                                            Pharmaceutics
                                                          </td>
                                                          <td>151</td>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>
                                                            Department of
                                                            Pharmaceutical
                                                            Analysis
                                                          </td>
                                                          <td>151</td>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>
                                                            Department of
                                                            Pharmaceutical
                                                            Chemistry
                                                          </td>
                                                          <td>100</td>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>
                                                            Department of
                                                            Pharmacology
                                                          </td>
                                                          <td>100</td>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>
                                                            Medicinal &amp;
                                                            Aromatic plants
                                                            Garden
                                                          </td>
                                                          <td>31</td>
                                                        </tr>
                                                        <tr>
                                                          <th>6</th>
                                                          <th colspan="2">
                                                            Indukaka Ipcowala
                                                            Institute of
                                                            Management (I2IM)
                                                          </th>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>Computer Lab</td>
                                                          <td>31</td>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>Language Lab</td>
                                                          <td>31</td>
                                                        </tr>
                                                        <tr>
                                                          <th>7</th>
                                                          <th colspan="2">
                                                            P D Patel Institute
                                                            of Applied Sciences
                                                            (PDPIAS)
                                                          </th>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>
                                                            Laboratories in
                                                            Physical /
                                                            Biological/Chemical
                                                            sciences
                                                          </td>
                                                          <td>51</td>
                                                        </tr>
                                                        <tr>
                                                          <th>8</th>
                                                          <th colspan="2">
                                                            Ashok &amp; Rita
                                                            Patel Institute of
                                                            Physiotherapy (ARIP)
                                                          </th>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>
                                                            Motion Analysis
                                                            &amp; Research Lab
                                                            (MARL Lab)
                                                          </td>
                                                          <td>50</td>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>Fitness Lab</td>
                                                          <td>35</td>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>
                                                            Neuro physiotherapy
                                                            Lab
                                                          </td>
                                                          <td>31</td>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>
                                                            Electro Diagnosis
                                                            Lab
                                                          </td>
                                                          <td>31</td>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>
                                                            Cardio Pulmonary Lab
                                                          </td>
                                                          <td>31</td>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>
                                                            Musculoskeletal
                                                            Science Lab
                                                          </td>
                                                          <td>31</td>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>
                                                            Computer Assisted
                                                            Learning Lab (Call
                                                            Lab)
                                                          </td>
                                                          <td>31</td>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>Anatomy Lab</td>
                                                          <td>31</td>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>
                                                            Human Physiology Lab
                                                          </td>
                                                          <td>25</td>
                                                        </tr>
                                                        <tr>
                                                          <th>9</th>
                                                          <th colspan="2">
                                                            Manikaka Topawala
                                                            Institute of Nursing
                                                            (MTIN)
                                                          </th>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>
                                                            Advance Nursing
                                                            Skill Lab
                                                          </td>
                                                          <td>100</td>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>
                                                            Nursing Foundation
                                                            Lab
                                                          </td>
                                                          <td>25</td>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>
                                                            Maternal &amp; Child
                                                            Health (MCH) Lab
                                                          </td>
                                                          <td>25</td>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>
                                                            Anatomy &amp;
                                                            Physiology Lab
                                                          </td>
                                                          <td>30</td>
                                                        </tr>
                                                        <tr>
                                                          <th></th>
                                                          <th colspan="2">
                                                            Halls &amp; Class
                                                            Rooms
                                                          </th>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>Drawing Hall</td>
                                                          <td>25</td>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>Class Room</td>
                                                          <td>11</td>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>Lecture Hall</td>
                                                          <td>11</td>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>Auditorium</td>
                                                          <td>51</td>
                                                        </tr>
                                                        <tr>
                                                          <th></th>
                                                          <th colspan="2">
                                                            Girls’ Hostel
                                                          </th>
                                                        </tr>
                                                        <tr>
                                                          <td></td>
                                                          <td>
                                                            Building Block 3
                                                          </td>
                                                          <td>300</td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </div>
                                                </div>
                                                <br />
                                              </div>
                                            </div>
                                            <div className="accordion-item">
                                              <div
                                                className="accordion-header"
                                                id="accordion07"
                                              >
                                                <button
                                                  className="d-flex flex-wrap justify-content-between text-white"
                                                  data-bs-toggle="collapse"
                                                  data-bs-target="#videolist7"
                                                  aria-expanded="true"
                                                  aria-controls="videolist7"
                                                >
                                                  {" "}
                                                  <span className="text-white">
                                                    EXPERTISE SHARING
                                                  </span>{" "}
                                                  <span className="text-white">
                                                    <i class="icofont-square-down"></i>
                                                  </span>{" "}
                                                </button>
                                              </div>
                                              <div
                                                id="videolist7"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="accordion07"
                                                data-bs-parent="#accordionExample"
                                              >
                                                <div className="row">
                                                  <div className="col">
                                                    A well-wisher may also
                                                    contribute CHARUSAT through
                                                    his /her expertise. The
                                                    expertise can be for
                                                    delivering guest lecture,
                                                    inputs in curriculum
                                                    development, inputs in
                                                    student’s development and
                                                    more. One may also help
                                                    students for training in
                                                    their companies.
                                                    <br />
                                                    <br />
                                                  </div>
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

                            <br />
                            <h4>Donation Avenues - CHARUSAT University</h4>
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
                            <ul>
                              <li>
                                {/* <i className="icofont-tick-mark"></i> */}
{" "}
                                {/* <strong> */}
                                Donation to CHARUSAT are Tax exempted under 80G
                                of Income Tax Act.(Indian Donors)
                                {/* </strong> */}{" "}
                              </li>
                              <li>
                                {/* <i className="icofont-tick-mark"></i> */}
{" "}
                                {/* <strong> */}
                                USA donors can route their donation through
                                CHARUSAT Education Foundation. Inc., and avail
                                Income tax exemption under IRS section 501(c) 3
                                Tax fin ID 46-3603014
                                {/* </strong> */}{" "}
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
                            <ul>
                              <li>
                                {/* <i className="icofont-tick-mark"></i> */}
{" "}
                                {/* <strong> */}
                                Ashok and Rita Patel Institute of Physiotherapy
                                {/* </strong> */}{" "}
                              </li>
                              <li>
                                {/* <i className="icofont-tick-mark"></i> */}
{" "}
                                {/* <strong> */}
                                Ramanbhai Patel College of Pharmacy
                              </li>

                              <li>
                                {/* <i className="icofont-tick-mark"></i> */}
{" "}
                                {/* <strong> */}
                                Anil & Asha Patel Endowment Fund
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
              title="Donation Contact"
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
