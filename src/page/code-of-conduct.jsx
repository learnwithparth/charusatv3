import { Component, Fragment } from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageHeader from "../component/layout/pageheader";
import career1_img from "../assets/images/advertisment_nov_2022.webp";
const CodeofConduct = () => {
  return (
    <Fragment>
      {/* <PageHeader title={'4 Results found for: Business'} curPage={'Search Result'} /> */}
      <div className="blog-section padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          <div className="post-content">
                            <h3>Code of Conduct</h3>
                            <hr />
                            <br />
                            <Container>
                              <Row className="p-2">
                                <Col>
                                  <Table striped bordered hover>
                                    <thead>
                                      <tr>
                                        <th>#</th>
                                        <th>Particular</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>
                                          
                                          <a
                                            href="https://charusat.ac.in/documents/pdfs/data_1/Code_Of_Conduct/Code%20of%20Conduct%20for%20the%20members%20for%20GB-BOM.pdf"
                                            target="blank"
                                          >
                                            Member of Governing Body{" "}
                                            <i className="icofont-file-pdf"></i>
                                          </a>{" "}
                                        </td>
                                      </tr>

                                      <tr>
                                        <td>2</td>
                                        <td>
                                          <a
                                            href="https://charusat.ac.in/documents/pdfs/data_1/Code_Of_Conduct/Employee%20Code%20of%20Conduct.pdf"
                                            target="blank"
                                          >
                                            
                                          {" "}
                                          Employees{" "}
                                            <i className="icofont-file-pdf"></i>
                                          </a>{" "}
                                        </td>
                                      </tr>

                                      <tr>
                                        <td>3</td>
                                        <td>
                                          <a
                                            href="https://charusat.ac.in/documents/pdfs/data_1/Code_Of_Conduct/Administrators%20code%20of%20conduct.pdf"
                                            target="blank"
                                          >
                                            
                                          {" "}
                                          Administrator{" "}
                                            {" "}
                                            <i className="icofont-file-pdf"></i>
                                          </a>
                                        </td>
                                      </tr>

                                      <tr>
                                        <td>4</td>
                                        <td>
                                          <a
                                            href="https://charusat.ac.in/documents/pdfs/data_1/Code_Of_Conduct/Student%20code%20of%20Conduct.pdf"
                                            target="blank"
                                          >
                                            
                                          {" "}
                                          Students{" "}
                                            <i className="icofont-file-pdf"></i>
                                          </a>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </Table>
                                  {/* <p>
                                    Member of Governing Body{" "}
                                    <a
                                      class="lab-btn"
                                      href="https://charusat.ac.in/documents/pdfs/data_1/Code_Of_Conduct/Code%20of%20Conduct%20for%20the%20members%20for%20GB-BOM.pdf"
                                      target="blank"
                                    >
                                      <i
                                        className="fa fa-download text-white"
                                        aria-hidden="true"
                                      >
                                        {" "}
                                        Download
                                      </i>
                                    </a>
                                  </p>
                                  <p>
                                    Employees{" "}
                                    <Button variant="danger" size="sm">
                                      <a
                                        href="https://charusat.ac.in/documents/pdfs/data_1/Code_Of_Conduct/Employee%20Code%20of%20Conduct.pdf"
                                        target="blank"
                                      >
                                        <i
                                          className="fa fa-download text-white"
                                          aria-hidden="true"
                                        >
                                          {" "}
                                          Download
                                        </i>
                                      </a>
                                    </Button>{" "}
                                  </p>
                                  <p>
                                    {" "}
                                    Administrator{" "}
                                    <Button variant="danger" size="sm">
                                      <a
                                        href="https://charusat.ac.in/documents/pdfs/data_1/Code_Of_Conduct/Administrators%20code%20of%20conduct.pdf"
                                        target="blank"
                                      >
                                        <i
                                          className="fa fa-download text-white"
                                          aria-hidden="true"
                                        >
                                          {" "}
                                          Download
                                        </i>
                                      </a>
                                    </Button>{" "}
                                  </p>
                                  <p>
                                    {" "}
                                    Students{" "}
                                    <Button variant="danger" size="sm">
                                      <a
                                        href="https://charusat.ac.in/documents/pdfs/data_1/Code_Of_Conduct/Student%20code%20of%20Conduct.pdf"
                                        target="blank"
                                      >
                                        <i
                                          className="fa fa-download text-white"
                                          aria-hidden="true"
                                        >
                                          {" "}
                                          Download
                                        </i>
                                      </a>
                                    </Button>{" "}
                                  </p> */}
                                </Col>
                              </Row>
                            </Container>
                            <br />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CodeofConduct;
