import { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageHeader from "../component/layout/pageheader";
import camus_map_img from "../assets/images/charusat-map.jpg";

const Campus_Map = () => {
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
                            {/* <h3>CHARUSAT CAMPUS MAP</h3> */}

                            <Container>
                              <Row className="p-2">
                                <Col>
                                  <img
                                    fluid
                                    src={camus_map_img}
                                    alt={"charusat campus map"}
                                    className="mx-auto d-block"
                                  />
                                </Col>
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

export default Campus_Map;
