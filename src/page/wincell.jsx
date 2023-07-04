import { Fragment } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import PageHeader from "../component/layout/pageheader";
import Contact from "../component/section/contact";
// import InquiryForm from "../files/InquiryForm.pdf";
// import IPRBroucher from "../files/iprBrochuer.jpg";

const Wincell = () => {
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
                            <h3>WINCell</h3>
                            <hr />
                            <div className="meta-post">
                              <p>
                                Specialized Cell designed for centralized IT
                                Infrastructure management and maintainance.
                              </p>
                              <br />
                            </div>
                            <h4>IT INFRASTRUCTURE @CHARUSAT</h4>
                            <hr />
                            WINCell offer Sound, Advance, Secure and Productive
                            IT Infrastructure.
                            <br />
                            <br />
                            <Image
                              src="./assets/images/wincell_cloud.webp"
                              alt={"Wincell cloud"}
                              width="70%"
                              thumbnail
                            />
                            <br />
                            <br />
                            <h4>
                              IT INFRASTRUCTURE CONTROLLED AND MANAGED
                              EFFICIENTLY WITH{" "}
                            </h4>
                            <hr />
                            <ul>
                              <li>
                                {/* <i className="icofont-tick-mark"></i> */}{" "}
                                <strong>
                                  The utilization of CISCO and HP layer 3 and
                                  layer 2 manageable switches
                                </strong>{" "}
                              </li>
                              <li>
                                {/* <i className="icofont-tick-mark"></i> */}{" "}
                                <strong>
                                  Fiber optic connectivity among all the
                                  buildings.
                                </strong>{" "}
                              </li>
                              <li>
                                {/* <i className="icofont-tick-mark"></i> */}{" "}
                                <strong>
                                  Ring connectivity is established to provide
                                  uninterruptable network access with WiFi
                                  facility.
                                </strong>{" "}
                              </li>
                            </ul>
                            <br />
                            <h4>EXPERTS MANAGED SERVICES @Wincell</h4>
                            <hr />
                            <Container>
                              <Row>
                                <Col>
                                  <ul>
                                    <li>Web Servers</li>
                                    <li>Intranet Servers</li>
                                    <li>Mail Servers</li>
                                    <li>FTP Servers</li>
                                    <li>WSUS Servers</li>
                                    <li>Antivirus Servers</li>
                                  </ul>
                                </Col>
                                <Col>
                                  <ul>
                                    <li>Domain Server</li>
                                    <li>E-governance</li>
                                    <li>Application and Database Server</li>
                                    <li>Library Server</li>
                                    <li>Bio-metric Application</li>
                                    <li>Medical Application</li>
                                  </ul>
                                </Col>
                                <Col>
                                  <ul>
                                    <li>Account Server</li>
                                    <li>CCTV Console Server</li>
                                    <li>Networking Server</li>
                                    <li>HPC Setup</li>
                                    <li>Supercomputer</li>
                                    <li>Cloud Server</li>
                                  </ul>
                                </Col>
                              </Row>
                            </Container>
                            <br />
                            <h4>WINCELL TEAM</h4>
                            <hr />
                            <ul>
                              <li>
                                Mr. Ritesh Bhatt, Head Datacenter and University
                                Network Engineer - Ext. No. 5106
                              </li>
                              <li>
                                Mr. Viral Patel, Lab Technician - Ext. No. 5107
                              </li>
                              <li>
                                Mr. Kamlesh Patel, Lab Technician - Ext. No.
                                5107
                              </li>
                              <li>
                                Mr. Hardik Patel, Lab Technician - Ext. No. 5107
                              </li>
                              <li>
                                Mr. Harsh Patel, Lab Technician - Ext. No. 5107
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
              title="WINCell Contact"
              name="Mr Ritesh Bhatt"
              email="riteshbhatt.win@charusat.ac.in"
              phone="+91-2697-265106"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Wincell;
