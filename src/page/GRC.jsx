import { Fragment } from "react";
import Iframe from "react-iframe";

const GRC = () => {
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
                            <h3>Grievance Redressal Cell (GRC)</h3>
                            <hr />
                            <br />
                            <p style={{ fontSize: "1rem" }}>
                              Vide the letter issued by the University Grant
                              Commission – New Delhi, dated June 18, 2013 – D.O.
                              No. 14-4/2012(CPP-II) regarding the establishment
                              of a Grievance Redressal Cell in the University
                              under the University Grants Commission (Grievance
                              Redressal Regulation, 2012), Provost, CHARUSAT has
                              constituted the Committee as under:
                            </p>
                            {/* <iframe
                              src="https://charusat.ac.in/files/Grievance%20Redressal%20Committee%E2%80%8B%20%E2%80%8B(GRC)%202022-24.pdf"
                              width="100%"
                              height="600"
                            ></iframe> */}
                            <Iframe
                              styles={{
                                border: "1px solid #CCC",
                              }}
                              url="https://charusat.ac.in/files/Grievance%20Redressal%20Committee%E2%80%8B%20%E2%80%8B(GRC)%202022-24.pdf"
                              width="100%"
                              height="620px"
                              id=""
                              className=""
                              display="block"
                              position="relative"
                            />
                            <hr />
                            <ol>
                              <li>
                                The grievance Redressal Committee shall have a
                                term of two years.
                              </li>
                              <li>
                                The provisions of sub-regulations (8), (9) and
                                (10) of regulation 4 and regulation 6 in respect
                                of the matters of the reimbursement and
                                procedure and functions shall, mutatis mutandis,
                                apply to the Grievance Redressal Committee
                                except that the Grievance Redressal Committee
                                shall communicate its decision within ten days
                                of receipt of the complaints.
                              </li>
                              <li>
                                Any person aggrieved by the decision of the
                                Grievance Redressal Committee may within a
                                period of six days prefer an appeal to the
                                Provost.
                              </li>
                              <a
                                style={{ color: "#007bff" }}
                                href="https://www.charusat.ac.in/documents/pdfs/grc/Grievance-Redressal-Cell.pdf"
                                target="_blank"
                                rel="noreferrer"
                              >
                                Read More
                              </a>
                            </ol>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/*  */}
            <div className="col-lg-4 col-12">
              <aside>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          <div className="post-content">
                            {/* <Link to="/blog-single"> */}
                            <h3>Contact Person</h3>
                            {/* </Link> */}
                            <div className="meta-post">
                              <ul className="lab-ul">
                                <li
                                  style={{
                                    marginBottom: "10px",
                                  }}
                                >
                                  <i className="icofont-ui-user"></i>
                                  Dr. Atul Patel
                                </li>
                                <li
                                  style={{
                                    marginBottom: "10px",
                                  }}
                                >
                                  <i className="icofont-email"></i>
                                  atulpatel.mca@charusat.ac.in
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default GRC;
