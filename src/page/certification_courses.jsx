import { Component, Fragment } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageHeader from "../component/layout/pageheader";
import aws_img from "../assets/images/certification_courses/aws.png";
const Certification_Courses = () => {
  const data = [
    {
      Name: "Finite Element Modeling & Simulation with ANSYS Workbench",
      "Course Code": "-",
      "Year of offering": "2021-22",
      "No. of times offered during the same year": 1,
      "Duration of course": "36 hours",
    },
    {
      Name: "Pneumatics and Electro-Pneumatics",
      "Course Code": "-",
      "Year of offering": "2021-22",
      "No. of times offered during the same year": 1,
      "Duration of course": "36 hours",
    },
    {
      Name: "Finite Element Analysis: with hands-on practice using simulation tool with hands-on practice using software Abaqus/CAE.",
      "Course Code": "-",
      "Year of offering": "2021-22",
      "No. of times offered during the same year": 1,
      "Duration of course": "36 hours",
    },
    {
      Name: "Cisco Certified Network Associate (CCNA)",
      "Course Code": "-",
      "Year of offering": "2021-22",
      "No. of times offered during the same year": 1,
      "Duration of course": "40 hours",
    },
    {
      Name: "Aptitude Session",
      "Course Code": "-",
      "Year of offering": "2021-22",
      "No. of times offered during the same year": 1,
      "Duration of course": "32 hours",
    },
    {
      Name: "AWS Academy",
      "Course Code": "-",
      "Year of offering": "2021-22",
      "No. of times offered during the same year": 2,
      "Duration of course": "47.5 hours",
    },
    {
      Name: "Quantitative Aptitude and Logical Reasoning",
      "Course Code": "-",
      "Year of offering": "2021-22",
      "No. of times offered during the same year": 1,
      "Duration of course": "32 hours",
    },
    {
      Name: "Quantitative Aptitude and Logical Reasoning",
      "Course Code": "-",
      "Year of offering": "2021-22",
      "No. of times offered during the same year": 1,
      "Duration of course": "32 hours",
    },
    {
      Name: "Aptitude Building and Soft Skill Development",
      "Course Code": "-",
      "Year of offering": "2021-22",
      "No. of times offered during the same year": 1,
      "Duration of course": "46 hours",
    },
    {
      Name: "Impurities in Pharmaceuticals: Generation, Identification and Profiling (Certificate Course)",
      "Course Code": "-",
      "Year of offering": "2021-22",
      "No. of times offered during the same year": 1,
      "Duration of course": "60 hours",
    },
    {
      Name: "Student Development Program",
      "Course Code": "-",
      "Year of offering": "2021-22",
      "No. of times offered during the same year": 2,
      "Duration of course": "30 hours",
    },
    {
      Name: "E-Bridge Course on Beginner Skills to Excel at University (1st Sem BBA)",
      "Course Code": "-",
      "Year of offering": "2021-22",
      "No. of times offered during the same year": 1,
      "Duration of course": "44 hours",
    },
    {
      Name: "E-Bridge Course on Student Development: Technical and Interpersonal Skills (3rd Sem BBA)",
      "Course Code": "-",
      "Year of offering": "2021-22",
      "No. of times offered during the same year": 1,
      "Duration of course": "44 hours",
    },
    {
      Name: "E-Bridge Course on Advanced Skill Development towards Career Enhancement (5th Sem BBA)",
      "Course Code": "-",
      "Year of offering": "2021-22",
      "No. of times offered during the same year": 1,
      "Duration of course": "44 hours",
    },
    {
      Name: "Placement Assistance Programme",
      "Course Code": "-",
      "Year of offering": "2021-22",
      "No. of times offered during the same year": 1,
      "Duration of course": "40 hours",
    },
    {
      Name: "R-Programming for Beginners",
      "Course Code": "-",
      "Year of offering": "2021-22",
      "No. of times offered during the same year": 1,
      "Duration of course": "48 hours",
    },
    {
      Name: "Community Outreach",
      "Course Code": "-",
      "Year of offering": "2021-22",
      "No. of times offered during the same year": 1,
      "Duration of course": "86 hours",
    },
  ];

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
                            <h3>Certification Courses </h3>
                            <hr />
                            <br />
                            <Container>
                              <Row className="p-2 text-center">
                                <Table striped bordered hover>
                                  <thead>
                                    <tr>
                                      <th>Course Name</th>
                                      <th>Course Code</th>
                                      <th>Year of offering</th>
                                      <th>
                                        No. of times offered during the same
                                        year
                                      </th>
                                      <th>Duration of course</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {data.map((item, index) => {
                                      return (
                                        <tr key={index}>
                                          <td>{item.Name}</td>
                                          <td>{item["Course Code"]}</td>
                                          <td>{item["Year of offering"]}</td>
                                          <td>
                                            {
                                              item[
                                                "No. of times offered during the same year"
                                              ]
                                            }
                                          </td>
                                          <td>{item["Duration of course"]}</td>
                                        </tr>
                                      );
                                    })}
                                  </tbody>
                                </Table>
                                {/* <Col className="p-2">
                                  <div>
                                    <div className=" style-4">
                                      <div className="course-inner pb-2">
                                        <a
                                          href="https://asc.charusat.ac.in"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          <div className="course-thumb p-2">
                                            <img
                                              src={aws_img}
                                              alt={"AWS Student Club (ASC)"}
                                            />
                                          </div>

                                          <div className="text-center">
                                            <div className="course-category">
                                              <div className="course-cate">
                                                <a href="#">
                                                  AWS Student Club (ASC)
                                                </a>
                                              </div>
                                            </div>
                                            <h6>Get More Details</h6>
                                          </div>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </Col> */}
                                {/* <Col className="p-2">
                                  <div>
                                    <div className=" style-4">
                                      <div className="course-inner pb-2">
                                        <a
                                          href="https://asc.charusat.ac.in"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          <div className="course-thumb p-2">
                                            <img
                                              src={aws_img}
                                              alt={"AWS Student Club (ASC)"}
                                            />
                                          </div>

                                          <div className="text-center">
                                            {/* <div className="course-category">
                                              <div className="course-cate">
                                                <a href="#">
                                                  AWS Student Club (ASC)
                                                </a>
                                              </div>
                                            </div> }
                                            <h6>Get More Details</h6>
                                          </div>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </Col>
                                <Col className="p-2">
                                  <div>
                                    <div className=" style-4">
                                      <div className="course-inner pb-2">
                                        <a
                                          href="https://asc.charusat.ac.in"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          <div className="course-thumb p-2">
                                            <img
                                              src={aws_img}
                                              alt={"AWS Student Club (ASC)"}
                                            />
                                          </div>

                                          <div className="text-center">
                                            {/* <div className="course-category">
                                              <div className="course-cate">
                                                <a href="#">
                                                  AWS Student Club (ASC)
                                                </a>
                                              </div>
                                            </div> }
                                            <h6>Get More Details</h6>
                                          </div>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </Col>
                                <Col className="p-2 ">
                                  <div>
                                    <div className=" style-4">
                                      <div className="course-inner pb-2">
                                        <a
                                          href="https://asc.charusat.ac.in"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          <div className="course-thumb p-2">
                                            <img
                                              src={aws_img}
                                              alt={"AWS Student Club (ASC)"}
                                            />
                                          </div>

                                          <div className="text-center">
                                            {/* <div className="course-category">
                                              <div className="course-cate">
                                                <a href="#">
                                                  AWS Student Club (ASC)
                                                </a>
                                              </div>
                                            </div> }
                                            <h6>Get More Details</h6>
                                          </div>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </Col> */}
                              </Row>
                            </Container>
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

export default Certification_Courses;
