import { Fragment } from "react";
import Contact from "../component/section/contact";
import Image from "react-bootstrap/Image";
import servicesOffered from "../files/edic/services offered.png";
import edicModel from "../files/edic/edic model.png";
import incubationSummary from "../files/edic/incubation summary.png";
import activitySummary from "../files/edic/activity summary.png";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

const Edic = () => {
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
                            <h3>
                              Entrepreneurship Development and Incubation
                              Cell(EDIC)
                            </h3>
                            <hr />
                            <br />
                            <div className="meta-post">
                              {/* <Image src="./assets/images/CDPC_banner.jpg" /> */}
                              {/* <Image src="https://placehold.co/800x400?text=EDIC" /> */}
                              <br />
                              <br />
                              {/* <Row xs={1} md={2}>

      <Card className="m-3">
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Develop Spirit of Entrepreneurial Culture in Students & Faculty Members</Card.Title>
      </Card.Body>
    </Card>

    <Card className="m-3">
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Encourage Dynamic Start-ups</Card.Title>
      </Card.Body>
    </Card>

    <Card className="m-3">
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>To facilitate science and technology-based innovations</Card.Title>
      </Card.Body>
    </Card>

    <Card className="m-3">
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>To train rural poor as entrepreneurs</Card.Title>
      </Card.Body>
    </Card>

    </Row> */}

                              <p>
                                <Image src={servicesOffered} alt="service" />
                              </p>
                              <br />
                              <hr />
                              <br />
                              <p>
                                <Image src={edicModel} alt="service" />
                              </p>
                              <br />
                              <hr />
                              <br />
                              <p>
                                <Image src={activitySummary} alt="service" />
                              </p>
                              <br />
                              <hr />
                              <br />
                              <p>
                                <Image src={incubationSummary} alt="service" />
                              </p>
                              <br />
                              <p 
                              // style={{ color: "#3db166" }}
                              >
                                The cell is sensitized to function all through
                                the year towards generating placement and
                                training opportunities for the students.
                              </p>
                              <br />
                              {/* <p style={{ "text-align": "justify" }}>
                                CHARUSAT aims to make its students Job Creators and not Job Seekers. In the context of the same, the University has established an eco-system for innovations including Incubation center and other initiatives for creation and transfer of knowledge named Entrepreneurship Development and Incubation Cell (EDIC) (2014).
                                <br />
                                <br />
                                It works with a vision to develop successful entrepreneurs who can contribute (to nation building) through creativity, problem-solving and innovation for the growth and development of society at large. EDIC aims to create an entrepreneurial ecosystem within CHARUSAT that acts as a catalyst in identifying, motivating and nurturing entrepreneurial talents; mentoring them towards sustainable pursuits through entrepreneurship awareness, education, training and research.
                                <br />
                                <br />
                                Entrepreneurship Developmental activities are being undertaken by faculty members trained at IIMA, University of Madras, EDI, University of Texas, USA and we also have access to renowned resource persons. For effective integration of entrepreneurship in all available disciplines within CHARUSAT, EDIC has identified Faculty Entrepreneurship Champions (FEC) from each department of the constituent departments / Institution through scientific tests.
                                <br />
                                <br />
                                Under the Student Startup and Innovation Policy (SSIP) initiated by Gujarat Knowledge Society, Commissionerate of Technical Education, Govt. of Gujarat, CHARUSAT EDIC has received / commitment for a grant of - Rs. 20 lakhs for next five years starting from 2017-18 onwards and the equal amount has been committed from CHARUSAT University. It has established Student Start-up and Innovation Cell (SSIP Cell) and Intellectual Property & Research Cell (IPR Cell). Under this, Establishment of State of Art Tinkering and Fabrication Laboratories with facilities like IoT, Electronic Equipment, 3D Printer Tools & Kits, Internet of Things & Sensors, Robotic Equipment, Microcontroller Boards, Development Boards, Robotic / DIY Kits is established at CHARUSAT.
                                <br />
                                <br />
                                CHARUSAT EDIC has collaborated with The Centre for Entrepreneurship Development (CED) - Govt. of Gujarat (2016) and has started “Business Accelerator and Startup Cell” (BASC) which is nurturing ideas and jointly organizing various programmes like Entrepreneurship Development Programme (EDP) for different stakeholders of the society like for Differently Abled People.
                                <br />
                                <br />
                                With the help and support of the Government of Gujarat, CHARUSAT EDIC has established CHARUSAT STARTUP AND INNOVATION CENTRE on December 16, 2020.
                                <br />

                              </p> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            <Contact
              name="Coordinator: Mr. Pranav Desai"
              email="edic@charusat.ac.in"
              phone="+91-2697265171/5133/5134"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Edic;
