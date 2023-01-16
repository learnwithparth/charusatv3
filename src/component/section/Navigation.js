import {
  Nav,
  Navbar,
  Container,
  Button,
  Image,
  Dropdown,
  NavDropdown,
  Col,
  Row,
} from "react-bootstrap";

export default function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">
          <div className="logo">
            <Nav.Link>
              <img src="assets/images/logo/02.png" alt="logo" />
            </Nav.Link>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Container fluid>
            <Nav className="ms-auto">
              <NavDropdown
                className=" align-text-top"
                title="Academics"
                id="basic-nav-dropdown"
              >
                <Container className="eventsNav pt-0 mt-0">
                  <div class="flex-container">
                    <div>
                      <Dropdown.Header>Undergraduate Studies</Dropdown.Header>
                      <Nav.Link>B.Tech</Nav.Link>
                      <Nav.Link>BCA</Nav.Link>
                      <Nav.Link>BBA</Nav.Link>
                      <Nav.Link>Bachelor of Pharmacy (B.Pharm)</Nav.Link>
                      <Nav.Link>B.Sc (Information Technology)</Nav.Link>
                      <Nav.Link>B.Sc (Nursing)</Nav.Link>
                      <Nav.Link>Bachelor of Pysiotherapy (BPT)</Nav.Link>
                      <Nav.Link>B.Sc (Biology)</Nav.Link>
                      <Nav.Link>B.Sc (B Optom)</Nav.Link>
                      <Nav.Link>B.Sc (Imaging Technology)</Nav.Link>
                      <Nav.Link>B.Sc (Medical Technology)</Nav.Link>
                      <Nav.Link>
                        B.Sc (Operation Theatre & Anesthesia Technology)
                      </Nav.Link>
                    </div>
                    <div>
                      <Dropdown.Header>Postgraduate Studies</Dropdown.Header>
                      <Nav.Link>M.Tech</Nav.Link>
                      <Nav.Link>MCA</Nav.Link>
                      <Nav.Link>M.Pharm</Nav.Link>
                      <Nav.Link>MBA</Nav.Link>
                      <Nav.Link>M.Sc (IT)</Nav.Link>
                      <Nav.Link>M.Sc (Advanced Organic Chemistry)</Nav.Link>
                      <Nav.Link>M.Sc (Biochemistry)</Nav.Link>
                      <Nav.Link>M.Sc (Biotechnology)</Nav.Link>
                      <Nav.Link>M.Sc (Microbiology)</Nav.Link>
                      <Nav.Link>M.Sc (Physics)</Nav.Link>
                      <Nav.Link>Master of Physiotherapy (MPT)</Nav.Link>
                      <Nav.Link>M.Sc (Nursing)</Nav.Link>
                      <Nav.Link>M.Sc (Medical Lab. Technology)</Nav.Link>
                      <Nav.Link>M.Sc (Medical Lab. Technology)</Nav.Link>
                    </div>
                    <div>
                      <Dropdown.Header>Phd</Dropdown.Header>
                      <Nav.Link>Link 1</Nav.Link>
                      <Nav.Link>Link 2</Nav.Link>
                      <Nav.Link>Link 3</Nav.Link>
                      <Dropdown.Header>Other Programs</Dropdown.Header>
                      <Nav.Link>Link 1</Nav.Link>
                      <Nav.Link>Link 2</Nav.Link>
                      <Nav.Link>Link 3</Nav.Link>
                    </div>
                    <div>
                      <Dropdown.Header>Online Learning</Dropdown.Header>
                      <Nav.Link>CharuVidya</Nav.Link>
                      <Nav.Link>Link 2</Nav.Link>
                      <Nav.Link>Link 3</Nav.Link>
                      <Dropdown.Header>Academic Links</Dropdown.Header>
                      <Nav.Link>Academic Calender</Nav.Link>
                      <Nav.Link>Academic Services</Nav.Link>
                      <Nav.Link>Code of Conduct</Nav.Link>
                      <Nav.Link>Academic Regulations</Nav.Link>
                    </div>
                  </div>
                </Container>
              </NavDropdown>

              <NavDropdown
                className=" align-text-top"
                title="Admission"
                id="basic-nav-dropdown"
              >
                <Container className="  eventsNav pt-0 mt-0">
                  <div class="flex-container">
                    <div>
                      <Dropdown.Header>For National Students</Dropdown.Header>
                      <Nav.Link>Apply Now</Nav.Link>
                      <Nav.Link>Eligibility Criteria</Nav.Link>
                      <Nav.Link>Fees</Nav.Link>
                      <Nav.Link>+91 8905500500</Nav.Link>
                    </div>
                    <div>
                      <Dropdown.Header>
                        For International Students
                      </Dropdown.Header>
                      <Nav.Link>Apply Now</Nav.Link>
                      <Nav.Link>Eligibility Criteria</Nav.Link>
                      <Nav.Link>Fees</Nav.Link>
                      <Nav.Link>+91 9173701614</Nav.Link>
                    </div>
                    <div>
                      <Dropdown.Header> Admission Information</Dropdown.Header>
                      <Nav.Link>Contact Admission Cell</Nav.Link>
                      <Nav.Link>Admission Portal Login</Nav.Link>
                      <Nav.Link>Fellowship</Nav.Link>
                      <Nav.Link>Scholarships</Nav.Link>
                      <Nav.Link>Transportation</Nav.Link>
                      <Nav.Link>Hostels</Nav.Link>
                      <Nav.Link>FAQ</Nav.Link>
                    </div>
                  </div>

                  {/* <Row>
                  <Col xs="12" md="6" className="text-left">
                    <Dropdown.Header>
                      <FontAwesomeIcon
                        color="black"
                        icon={"concierge-bell"}
                        size="1x"
                        className="pr-1"
                      />
                      {"  "}
                      Undergraduate Studies
                    </Dropdown.Header>
                    <Dropdown.Item>
                      <Link href="/">
                        <a className="nav-link" role="button">
                          Bachelor of Science ( Information Technology )
                        </a>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link href="/">
                        <a className="nav-link" role="button">
                          Bachelor of Science ( Operation Theatre & Anesthesia
                          Technology )
                        </a>
                      </Link>
                    </Dropdown.Item>

                    <Dropdown.Divider />
                    <Dropdown.Header>
                      <FontAwesomeIcon
                        color="black"
                        icon={"chalkboard-teacher"}
                        size="1x"
                        className="pr-1"
                      />
                      {"  "}
                      Information You May Need !!!
                    </Dropdown.Header>
                    <Dropdown.Item>
                      <Link href="/">
                        <a className="nav-link" role="button">
                          Barista 101
                        </a>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link href="/">
                        <a className="nav-link" role="button">
                          History of Coffee
                        </a>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link href="/">
                        <a className="nav-link" role="button">
                          Intro to Cafe Snobbery
                        </a>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Divider className="d-md-none" />
                  </Col>

                  <Col xs="12" md="6" className="text-left">
                    <Dropdown.Header>
                      <FontAwesomeIcon
                        color="black"
                        icon={"building"}
                        size="1x"
                        className="pr-1"
                      />
                      {"  "}
                      Postgraduate Studies
                    </Dropdown.Header>
                    <Dropdown.Item>
                      <Link href="/">
                        <a className="nav-link" role="button">
                          Fireside Room
                        </a>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link href="/">
                        <a className="nav-link" role="button">
                          Roasting Room
                        </a>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Header>
                      <FontAwesomeIcon
                        color="black"
                        icon={"sun"}
                        size="1x"
                        className="pr-1"
                      />
                      {"  "}
                      Seasonal
                    </Dropdown.Header>
                    <Dropdown.Item>
                      <Link href="/">
                        <a className="nav-link" role="button">
                          Coldbrew Night
                        </a>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link href="/">
                        <a className="nav-link text-wrap" role="button">
                          Campfire Coffee Class
                        </a>
                      </Link>
                    </Dropdown.Item>
                  </Col>
                </Row> */}
                </Container>
              </NavDropdown>

              <NavDropdown
                className=" align-text-top"
                title="Campus Life"
                id="basic-nav-dropdown"
              >
                <Container className="  eventsNav pt-0 mt-0">
                  <div class="flex-container">
                    <div>
                      <Dropdown.Header>Events & Activities</Dropdown.Header>
                      <Nav.Link>NCC @CHARUSAT</Nav.Link>
                      <Nav.Link>NSS @CHARUSAT</Nav.Link>
                      <Nav.Link>Sports & Gym</Nav.Link>
                      <Nav.Link>Student Clubs</Nav.Link>
                      <Nav.Link>Student Activities</Nav.Link>
                    </div>
                    <div>
                      <Dropdown.Header>Amenities</Dropdown.Header>
                      <Nav.Link>Girl's Hostle</Nav.Link>
                      <Nav.Link>Boy's Hostle</Nav.Link>
                      <Nav.Link>Staff Quaters</Nav.Link>
                      <Nav.Link>Canteen & Food</Nav.Link>
                      <Nav.Link>Transportation</Nav.Link>
                      <Nav.Link>Recreation</Nav.Link>
                    </div>
                    <div>
                      <Dropdown.Header>Student Helplines</Dropdown.Header>
                      <Nav.Link>Helpline Contact</Nav.Link>
                      <Nav.Link>Link 2</Nav.Link>
                      <Nav.Link>Link 3</Nav.Link>
                    </div>
                  </div>
                </Container>
              </NavDropdown>

              <NavDropdown
                className=" align-text-top"
                title="Research"
                id="basic-nav-dropdown"
              >
                <Container className="  eventsNav pt-0 mt-0">
                  <div class="flex-container">
                    <div>
                      <Dropdown.Header>Initiatives</Dropdown.Header>
                      <Nav.Link>Laboratories</Nav.Link>
                      <Nav.Link>CHARUSAT Journal</Nav.Link>
                      <Nav.Link>
                        Enterpreneurship Development & Incubation Cell
                      </Nav.Link>
                      <Nav.Link>
                        Dr. K. C. Patel Research and Development Centre (KRADLE)
                      </Nav.Link>
                      <Nav.Link>
                        International Center For Consomology (ICC)
                      </Nav.Link>
                      <Nav.Link>IPR Cell</Nav.Link>
                      <Nav.Link>Research Facilitation</Nav.Link>
                      <Nav.Link>CHARUSAT Space and Research Center</Nav.Link>
                      <Nav.Link>Research Ethics Committee</Nav.Link>
                    </div>
                    <div>
                      <Dropdown.Header>Policies</Dropdown.Header>
                      <Nav.Link>Publication Policy</Nav.Link>
                      <Nav.Link>Research Paper Award</Nav.Link>
                      <Nav.Link>Link 3</Nav.Link>
                    </div>
                    <div>
                      <Dropdown.Header>Outcomes</Dropdown.Header>
                      <Nav.Link>Publications</Nav.Link>
                      <Nav.Link>Project Grants</Nav.Link>
                      <Nav.Link>Patents</Nav.Link>
                    </div>
                  </div>
                </Container>
              </NavDropdown>
              <NavDropdown
                className=" align-text-top"
                title="IQAC"
                id="basic-nav-dropdown"
              >
                <Container className="  eventsNav pt-0 mt-0">
                  <div class="flex-container">
                    <div>
                      <Dropdown.Header>IQAC Meetings</Dropdown.Header>
                      <Nav.Link>17th IQAC Meeting Minutes</Nav.Link>
                      <Nav.Link>16th IQAC Meeting Minutes</Nav.Link>
                      <Nav.Link>15th IQAC Meeting Minutes</Nav.Link>
                    </div>
                    <div>
                      <Dropdown.Header>IQAC Activities</Dropdown.Header>
                      <Nav.Link>Best Practices</Nav.Link>
                      <Nav.Link>Accreditation & Ranking</Nav.Link>
                      <Nav.Link>Academic & Administrative Audit (AAA)</Nav.Link>
                      <Nav.Link>Feedback on Curriculum</Nav.Link>
                      <Nav.Link>Student Satisfaction Survey</Nav.Link>
                    </div>
                  </div>
                </Container>
              </NavDropdown>
              <NavDropdown
                className=" align-text-top"
                title="Know CHARUSAT"
                id="basic-nav-dropdown"
              >
                <Container className="  eventsNav pt-0 mt-0">
                  <div class="flex-container">
                    <div>
                      <Dropdown.Header>About University</Dropdown.Header>
                      <Nav.Link>About University</Nav.Link>
                      <Nav.Link>Journy of CHARUSAT</Nav.Link>
                      <Nav.Link>Vision</Nav.Link>
                      <Nav.Link>Mission</Nav.Link>
                      <Nav.Link>Journy of CHARUSAT</Nav.Link>
                      <Nav.Link>President's Message</Nav.Link>
                      <Nav.Link>Provost's Message</Nav.Link>
                      <Nav.Link>Student Reviews</Nav.Link>
                      <Nav.Link>Convocations</Nav.Link>
                    </div>
                    <div>
                      <Dropdown.Header>Governing Members</Dropdown.Header>
                      <Nav.Link>Governing Body</Nav.Link>
                      <Nav.Link>Board of Management</Nav.Link>
                      <Nav.Link>Deans, Principals & Heads</Nav.Link>
                      <Nav.Link>University Officers</Nav.Link>
                    </div>
                    <div>
                      <Dropdown.Header>Contact Us</Dropdown.Header>
                      <Nav.Link>Contact University</Nav.Link>
                      <Nav.Link>Google Map</Nav.Link>
                      <Nav.Link>Virtual Campus Tour</Nav.Link>
                      <Nav.Link>Help and Support Team</Nav.Link>
                    </div>
                  </div>

                  {/* <Row>
                  <Col xs="12" md="6" className="text-left">
                    <Dropdown.Header>
                      <FontAwesomeIcon
                        color="black"
                        icon={"concierge-bell"}
                        size="1x"
                        className="pr-1"
                      />
                      {"  "}
                      Undergraduate Studies
                    </Dropdown.Header>
                    <Dropdown.Item>
                      <Link href="/">
                        <a className="nav-link" role="button">
                          Bachelor of Science ( Information Technology )
                        </a>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link href="/">
                        <a className="nav-link" role="button">
                          Bachelor of Science ( Operation Theatre & Anesthesia
                          Technology )
                        </a>
                      </Link>
                    </Dropdown.Item>

                    <Dropdown.Divider />
                    <Dropdown.Header>
                      <FontAwesomeIcon
                        color="black"
                        icon={"chalkboard-teacher"}
                        size="1x"
                        className="pr-1"
                      />
                      {"  "}
                      Information You May Need !!!
                    </Dropdown.Header>
                    <Dropdown.Item>
                      <Link href="/">
                        <a className="nav-link" role="button">
                          Barista 101
                        </a>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link href="/">
                        <a className="nav-link" role="button">
                          History of Coffee
                        </a>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link href="/">
                        <a className="nav-link" role="button">
                          Intro to Cafe Snobbery
                        </a>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Divider className="d-md-none" />
                  </Col>

                  <Col xs="12" md="6" className="text-left">
                    <Dropdown.Header>
                      <FontAwesomeIcon
                        color="black"
                        icon={"building"}
                        size="1x"
                        className="pr-1"
                      />
                      {"  "}
                      Postgraduate Studies
                    </Dropdown.Header>
                    <Dropdown.Item>
                      <Link href="/">
                        <a className="nav-link" role="button">
                          Fireside Room
                        </a>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link href="/">
                        <a className="nav-link" role="button">
                          Roasting Room
                        </a>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Header>
                      <FontAwesomeIcon
                        color="black"
                        icon={"sun"}
                        size="1x"
                        className="pr-1"
                      />
                      {"  "}
                      Seasonal
                    </Dropdown.Header>
                    <Dropdown.Item>
                      <Link href="/">
                        <a className="nav-link" role="button">
                          Coldbrew Night
                        </a>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link href="/">
                        <a className="nav-link text-wrap" role="button">
                          Campfire Coffee Class
                        </a>
                      </Link>
                    </Dropdown.Item>
                  </Col>
                </Row> */}
                </Container>
              </NavDropdown>
            </Nav>
          </Container>
          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
