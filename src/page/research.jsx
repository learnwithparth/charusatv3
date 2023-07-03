import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import ResearchPolicy from "../files/Research/1. CHARUSAT Research Policy.pdf";
import PDFprogram from "../files/Research/PDF Policy CHARUSAT.pdf";
import CPSF from "../files/Research/CPSF.pdf";
import CVSRI from "../files/Research/CVSRI.pdf";
import PGSF from "../files/Research/PGSF.pdf";
import plagpolicy from "../files/Research/06.Plagiarism Policy.pdf";
import SeedGrant from "../files/Research/7. Policy for CHARUSAT SEED Grant for Research.pdf";
import researchPaperAward from "../files/Research/8. Research Paper Award Policy 2018.pdf";
import patentIpr from "../files/Research/05.INTELLECTUAL PROPERTY POLICY.pdf";
import consultancy from "../files/Research/Consultancy Policy.pdf";
import "../assets/css/research.css";
const policyList = [
  {
    desc: "CHARUSAT Research Policy",
    link: ResearchPolicy,
  },
  {
    desc: "CHARUSAT Post Doctoral Fellowship Programme",
    link: PDFprogram,
  },
  {
    desc: "Policy for CHARUSAT Ph. D. Scholars’ Fellowship (CPSF)",
    link: CPSF,
  },
  {
    desc: "Policy for CHARUSAT Visitor Student Research Internship (CVSRI)",
    link: CVSRI,
  },
  {
    desc: "Policy for CHARUSAT Postgraduate Student Fellowship (PGSF)",
    link: PGSF,
  },
  {
    desc: "Plagiarism Policy",
    link: plagpolicy,
  },
  {
    desc: "Policy for CHARUSAT SEED Grant for Research",
    link: SeedGrant,
  },
  {
    desc: "Research Paper Award Policy",
    link: researchPaperAward,
  },
  {
    desc: "Patent, IPR, and Royalty Sharing Policy",
    link: patentIpr,
  },
  {
    desc: "Consultancy Policy",
    link: consultancy,
  },
];

const ResearchPage = () => {
  return (
    <Fragment>
      {/* <PageHeader title={'4 Results found for: Business'} curPage={'Search Result'} /> */}
      <div className="blog-section padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          <div className="post-content">
                            <h4>
                              FACILITATION OF RESEARCH ACTIVITIES BY UNIVERSITY
                              RESEARCH CELL
                            </h4>
                            <hr />
                            <ul
                              className="lab-ul"
                              style={{ display: "grid", gap: "10px" }}
                            >
                              <li>
                                {/* <i className="icofont-tick-mark"></i> */}
{" "}
                                <strong>
                                  CHARUSAT Research grant (seed money) for
                                  faculty members
                                </strong>
                              </li>
                              <li>
                                {/* <i className="icofont-tick-mark"></i> */}
{" "}
                                <strong>
                                  International travel support to faculty
                                  members for participating in international
                                  events
                                </strong>{" "}
                              </li>
                              <li>
                                {/* <i className="icofont-tick-mark"></i> */}
{" "}
                                <strong>
                                  Activities under Endowment Chair in each
                                  department/institute
                                </strong>
                              </li>
                              <li>
                                {/* <i className="icofont-tick-mark"></i> */}
{" "}
                                <strong>
                                  Eminent professors/scientists are invited to
                                  promote quality research culture
                                </strong>
                              </li>
                              <li>
                                {/* <i className="icofont-tick-mark"></i> */}
{" "}
                                <strong>
                                  Laboratory infrastructure to promote research
                                  activities
                                </strong>
                              </li>
                              <li>
                                {/* <i className="icofont-tick-mark"></i> */}
{" "}
                                <strong>
                                  {" "}
                                  Research Paper Award to faculty members for
                                  published papers in Scopus or Web of Science
                                  indexed journals
                                </strong>
                              </li>
                              <li>
                                {/* <i className="icofont-tick-mark"></i> */}
{" "}
                                <strong>
                                  Fellowship to full-time research scholars
                                </strong>
                              </li>
                              <li>
                                {/* <i className="icofont-tick-mark"></i> */}
{" "}
                                <strong>
                                  Post-doctoral fellowship program to promote
                                  exemplary research in uni-disciplinary,
                                  inter-disciplinary and multi-disciplinary
                                  areas
                                </strong>
                              </li>
                              <li>
                                {/* <i className="icofont-tick-mark"></i> */}
{" "}
                                <strong>
                                  Contingency amount of INR 30000/- or more
                                  allocated to a research scholar
                                </strong>
                              </li>
                              <li>
                                {/* <i className="icofont-tick-mark"></i> */}
{" "}
                                <strong>
                                  Interim financial support for research work
                                </strong>
                              </li>
                              <li>
                                {/* <i className="icofont-tick-mark"></i> */}
{" "}
                                <strong>
                                  Simplification of procedure for the purchase
                                  by investigators
                                </strong>
                              </li>
                              <li>
                                {/* <i className="icofont-tick-mark"></i> */}
{" "}
                                <strong>
                                  Freedom to the principal investigator for
                                  utilizing part of the overhead charges
                                </strong>
                              </li>
                              <li>
                                {/* <i className="icofont-tick-mark"></i> */}
{" "}
                                <strong>Timely release of the grant</strong>
                              </li>
                              <li>
                                {/* <i className="icofont-tick-mark"></i> */}
{" "}
                                <strong>
                                  Timely conduction of audit and preparation of
                                  Utilization Certificates
                                </strong>
                              </li>
                              <li>
                                {/* <i className="icofont-tick-mark"></i> */}
{" "}
                                <strong>
                                  Encouragement and intellectual support are
                                  provided to faculty members to submit a
                                  research proposal to external funding agencies
                                </strong>
                              </li>
                              <li>
                                {/* <i className="icofont-tick-mark"></i> */}
{" "}
                                <strong>
                                  Ethics Committee to monitor and approve
                                  healthcare projects
                                </strong>
                              </li>
                            </ul>
                            <br />
                            <h4>RESEARCH FACILITIES @ CHARUSAT</h4>
                            <hr />
                            <iframe
                              width="458"
                              height="251"
                              style={{ "max-width": "100%" }}
                              src="https://www.youtube.com/embed/Og4NMqI3q5M"
                              title="Research Facilities | CHARUSAT | Campus Official"
                              frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowfullscreen
                            ></iframe>
                            <hr />
                            <h4>RESEARCH STATS</h4>
                            <hr />
                            <div className="row">
                              <div
                                className="col-lg-2"
                                style={{
                                  "text-align": "center",
                                  textAlign: "center",
                                  background: "#0066b247",
                                  borderRadius: "10px",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  flexDirection: "column",
                                }}
                              >
                                <h4>Publication</h4>
                                <h4>2700+</h4>
                              </div>
                              <div className="col-lg-3"></div>
                              <div
                                className="col-lg-2"
                                style={{
                                  "text-align": "center",
                                  textAlign: "center",
                                  background: "#0066b247",
                                  borderRadius: "10px",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  flexDirection: "column",
                                }}
                              >
                                <h4>Research Lab</h4>
                                <h4>50+</h4>
                              </div>
                              <div className="col-lg-3"></div>
                              <div
                                className="col-lg-2"
                                style={{
                                  "text-align": "center",
                                  textAlign: "center",
                                  background: "#0066b247",
                                  borderRadius: "10px",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  flexDirection: "column",
                                }}
                              >
                                <h4>Patents</h4>
                                <h4>20+</h4>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-2"></div>
                              <div
                                className="col-lg-3"
                                style={{
                                  "text-align": "center",
                                  textAlign: "center",
                                  background: "#0066b247",
                                  borderRadius: "10px",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  flexDirection: "column",
                                }}
                              >
                                <h4>Research Projects</h4>
                                <h4>75+</h4>
                              </div>
                              <div className="col-lg-2"></div>
                              <div
                                className="col-lg-3"
                                style={{
                                  "text-align": "center",
                                  textAlign: "center",
                                  background: "#0066b247",
                                  borderRadius: "10px",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  flexDirection: "column",
                                }}
                              >
                                <h4>Grants received
                                 <br /> (in Lacs)</h4>
                                <h4>1200+</h4>
                              </div>
                              <div className="col-lg-2"></div>
                            </div>
                            {/* links */}
                            <br />
                            <h4>DOCUMENTS</h4>
                            <hr />
                            <div
                              className="comment-list"
                              style={{ lineHeight: "2rem" }}
                            >
                              {policyList.map((val, i) => (
                                <div className="comment" key={i}>
                                  {/* <div className="com-thumb">
                                            <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />          
                                        </div> */}
                                  <div className="com-content">
                                    <div className="com-title">
                                      <div className="com-title-meta">
                                        {/* <h6>{val.name}</h6>
                                                    <span> {val.date} </span> */}
                                      </div>
                                    </div>
                                    <a href={val.link}>
                                      <span style={{ color: "#555555" }}>
                                        {val.desc}
                                      </span>{" "}
                                      <span style={{ color: "#555555" }}>
                                        <i class="icofont-download"></i>
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              ))}
                            </div>
                            {/* <!--<a style="color: 'balck';" href="./documents/pdfs/research/Research_Promotion_at_CHARUSAT.pdf" target="_blank" rel="noopener"><strong>Read More&#8230;</strong></a></p>--> */}

                            {/* links */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/* <Contact
                name="Dr Swayamprakash Patel"
                email="swayamprakash.patel@charusat.ac.in"
                phone="+91-8780034097"
              /> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ResearchPage;
