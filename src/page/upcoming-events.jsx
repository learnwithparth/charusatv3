import { Component, Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageHeader from "../component/layout/pageheader";
import career1_img from "../assets/images/advertisment_nov_2022.webp";
const UpcomingEvents = () => {
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
                            <h3>Announcements</h3>
                            <hr />
                            <br />
                            <Container>
                              <Row className="p-2">
                                <Col md={12}>
                                  <h6>Event 1 Title</h6>
                                  <img
                                    src={career1_img}
                                    alt="event 1"
                                    height="50%"
                                    width="50%"
                                  />

                                  <div>
                                    <br />
                                    <p>
                                      Short Event Description Lorem ipsum dolor
                                      sit amet consectetur adipisicing elit.
                                      Nobis minus beatae iusto esse aperiam.
                                      Excepturi dolores ducimus repellat quis
                                      cupiditate fuga voluptatum, explicabo
                                      provident? Similique, obcaecati atque nisi
                                      ullam sit nobis perferendis sunt unde, id
                                      vero cupiditate quam eos recusandae alias?
                                    </p>
                                    <strong>
                                      Event Date & Time: 28 November, 2022
                                    </strong>
                                    <br />
                                    <strong>
                                      Event Venue: CSPIT, A5 Building
                                    </strong>
                                    <br />
                                    <br />
                                  </div>

                                  <a
                                    class="lab-btn text-white"
                                    href="https://charusat.edu.in:912/OnlineJobPortal/"
                                  >
                                    View Details
                                  </a>
                                  <br />
                                  <br />
                                </Col>

                                <hr />
                                <Col md={12}>
                                  <h6>Event 2 Title</h6>
                                  <img
                                    src={career1_img}
                                    alt="event 1"
                                    height="50%"
                                    width="50%"
                                  />

                                  <div>
                                    <br />
                                    <p>
                                      Short Event Description Lorem ipsum dolor
                                      sit amet consectetur adipisicing elit.
                                      Nobis minus beatae iusto esse aperiam.
                                      Excepturi dolores ducimus repellat quis
                                      cupiditate fuga voluptatum, explicabo
                                      provident? Similique, obcaecati atque nisi
                                      ullam sit nobis perferendis sunt unde, id
                                      vero cupiditate quam eos recusandae alias?
                                    </p>
                                    <strong>
                                      Event Date & Time: 28 November, 2022
                                    </strong>
                                    <br />
                                    <strong>
                                      Event Venue: CSPIT, A5 Building
                                    </strong>
                                    <br />
                                    <br />
                                  </div>

                                  <a
                                    class="lab-btn text-white"
                                    href="https://charusat.edu.in:912/OnlineJobPortal/"
                                  >
                                    View Details
                                  </a>
                                  <br />
                                  <br />
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

export default UpcomingEvents;
