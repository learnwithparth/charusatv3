import { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageHeader from "../component/layout/pageheader";
import camus_map_img from "../assets/images/charusat-map.jpg";
import { Helmet } from "react-helmet";

const Campus_Map = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Campus of CHARUSAT</title>
        <meta http-equiv="Content-Type" content=" text/html; charset=utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="CHARUSAT Campus" />
        <meta name="keywords" content="Campus, CHARUSAT Campus, Campus view, Facility on CHARUSAT campus" />
        <meta name="robots" content="index" />
        <meta name="robots" content="follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="translate" />
        <meta name="google" content="nopagereadaloud" />
        <meta property="og:type" content="homepage" />
        <meta property="og:title" content="Campus Homepage" />
        <meta property="og:description" content="Campus and its facility" />
        <meta name="author" content="CHARUSAT Web Team" />
      </Helmet>
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
