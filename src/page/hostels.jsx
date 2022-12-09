import { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageHeader from "../component/layout/pageheader";
import Contact from "../component/section/contact";
import InquiryForm from "../files/InquiryForm.pdf";
import IPRBroucher from "../files/iprBrochuer.jpg";

const Hostels = () => {
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
                            <h3>Girls' Hostels</h3>
                            <br />
                            <div>
                              <h5>Capacity</h5>
                              <p>
                                CHARUSAT campus has 4 Girls’ hostels. These
                                hostels have a housing capacity for 1100 girls.
                                AC as well Non AC accommodation is available at
                                these Hostels. AC accommodations are on
                                requests.
                              </p>
                              <h5>Fee Structure</h5>
                              <ul>
                                <li>
                                  Rs. 5,000/- Security Deposit per Girl (One
                                  time payable for New admission & refundable
                                  while leaving the Hostel)
                                </li>
                                <li>Rs. 28,000/- per Year - with AC</li>
                                <li>
                                  Rs. 22,000/- per Year Hostel Fees per Girl
                                  Non-AC
                                </li>
                                <li>Rs. 2,500 – 3000 per Month Food bill</li>
                              </ul>
                            </div>
                            <h4>Facilities</h4>
                            <hr />
                            <p>
                              <strong>Recreational facilities:</strong>{" "}
                              Gymnasium, Badminton and Volleyball Courts, Indoor
                              sport like Table Tennis, Chess and Carom, separate
                              facilities for viewing TV and reading newspapers
                              and magazines and facilitation for celebration of
                              various days/festivals by the hostel residents.
                            </p>
                            <p>
                              <strong>Other facilities:</strong> Safe drinking
                              RO purified water, store for provisional items and
                              food, hot (through Gas Geysers and Solar water
                              heaters) and cold water, dining hall, mess, food
                              plazas, pantry, Internet and Wi-Fi facility with
                              computers, Housekeeping service and Security.
                            </p>
                            <p>
                              <strong>Students’ Care:</strong>Facilities for
                              medical emergencies. Resident rector and warden
                              look after the girl students staying in the
                              hostels.
                            </p>
                            <p>
                              <strong>Food Facility:</strong>Wholesome,
                              nutritious food is available in the mess.
                              Additionally, there are number of Food points to
                              serve the taste of young students.
                            </p>
                            <h4>Life @Girls Hostel</h4>
                            <hr />
                            <p>
                              Lorem ipsum, dolor sit amet consectetur
                              adipisicing elit. Nostrum perspiciatis minus,
                              eveniet placeat exercitationem praesentium
                              consequatur rem maxime necessitatibus nobis
                              temporibus quasi voluptatem vero earum cupiditate
                              error neque deleniti? Tempora?
                            </p>
                            <h4>Boys' Hostel</h4>
                            <hr />
                            <p>
                              Boys’ hostels are outsourced at 8 different
                              locations within a radius of 1 km. These hostels
                              have a housing capacity for about 1200 boys. AC as
                              well Non AC accommodation is available at these
                              Hostels. Facilities available at these hostels
                              include Dining hall, Sports, reading room, TV
                              room, Wi-Fi connectivity and transport facilities
                              to the campus and back. Guest rooms are also
                              available.For further information contact Jignesh
                              Patel – 98794 38045.
                            </p>
                            <h4> Mess Facility</h4>
                            <hr />
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Culpa quibusdam doloribus soluta, porro iure
                              deleniti hic eligendi. Obcaecati aliquid repellat
                              error explicabo minus sed doloremque quam mollitia
                              quibusdam? Architecto, molestiae.
                            </p>

                            <br />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            <Contact
              name="Dr x x ssfsafas sfsdf fdfsdfsdf"
              email="ssfsafas sfsdf fdfsdfsdf@charusat.ac.in"
              phone="+91-2697-2651xx"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Hostels;
