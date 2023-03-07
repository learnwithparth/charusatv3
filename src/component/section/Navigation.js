import {
  Nav,
  Navbar,
  Container,
  Dropdown,
  NavDropdown,
  Col,
  Row,
} from "react-bootstrap";

export default function Navigation() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      style={{ padding: "0" }}
    >
      <Container>
        <Navbar.Brand href="#home">
          <div className="logo">
            <Nav.Link href="./">
              <img
                src="assets/images/logo/05.png"
                alt="logo"
                style={{ height: "50px" }}
              />
            </Nav.Link>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Container fluid>
            <Nav className="mx-auto">
              <NavDropdown
                className=" align-text-top"
                title="Academics"
                id="basic-nav-dropdown"
              >
                <Container className="eventsNav pt-0 mt-0">
                  <div class="flex-container">
                    <div>
                      <Dropdown.Header>Undergraduate Studies</Dropdown.Header>
                      <Nav.Link href="./undergraduateCourses">B.Tech</Nav.Link>
                      <Nav.Link href="./undergraduateCourses">BCA</Nav.Link>
                      <Nav.Link href="./undergraduateCourses">BBA</Nav.Link>
                      <Nav.Link href="./undergraduateCourses">
                        Bachelor of Pharmacy (B.Pharm)
                      </Nav.Link>
                      <Nav.Link href="./undergraduateCourses">
                        B.Sc (Information Technology)
                      </Nav.Link>
                      <Nav.Link href="./undergraduateCourses">
                        B.Sc (Nursing)
                      </Nav.Link>
                      <Nav.Link href="./undergraduateCourses">
                        Bachelor of Pysiotherapy (BPT)
                      </Nav.Link>
                      <Nav.Link href="./undergraduateCourses">
                        B.Sc (Biology)
                      </Nav.Link>
                      <Nav.Link href="./undergraduateCourses">
                        B.Sc (B Optom)
                      </Nav.Link>
                      <Nav.Link href="./undergraduateCourses">
                        B.Sc (Imaging Technology)
                      </Nav.Link>
                      <Nav.Link href="./undergraduateCourses">
                        B.Sc (Medical Technology)
                      </Nav.Link>
                      <Nav.Link href="./undergraduateCourses">
                        B.Sc (Operation Theatre & Anesthesia Technology)
                      </Nav.Link>
                    </div>
                    <div>
                      <Dropdown.Header>Postgraduate Studies</Dropdown.Header>
                      <Nav.Link href="./postgraduateCourses">M.Tech</Nav.Link>
                      <Nav.Link href="./postgraduateCourses">MCA</Nav.Link>
                      <Nav.Link href="./postgraduateCourses">M.Pharm</Nav.Link>
                      <Nav.Link href="./postgraduateCourses">MBA</Nav.Link>
                      <Nav.Link href="./postgraduateCourses">
                        M.Sc (IT)
                      </Nav.Link>
                      <Nav.Link href="./postgraduateCourses">
                        M.Sc (Advanced Organic Chemistry)
                      </Nav.Link>
                      <Nav.Link href="./postgraduateCourses">
                        M.Sc (Biochemistry)
                      </Nav.Link>
                      <Nav.Link href="./postgraduateCourses">
                        M.Sc (Biotechnology)
                      </Nav.Link>
                      <Nav.Link href="./postgraduateCourses">
                        M.Sc (Microbiology)
                      </Nav.Link>
                      <Nav.Link href="./postgraduateCourses">
                        M.Sc (Physics)
                      </Nav.Link>
                      <Nav.Link href="./postgraduateCourses">
                        Master of Physiotherapy (MPT)
                      </Nav.Link>
                      <Nav.Link href="./postgraduateCourses">
                        M.Sc (Nursing)
                      </Nav.Link>
                      <Nav.Link href="./postgraduateCourses">
                        M.Sc (Medical Lab. Technology)
                      </Nav.Link>
                      <Nav.Link href="./postgraduateCourses">
                        M.Sc (Medical Lab. Technology)
                      </Nav.Link>
                    </div>
                    <div>
                      <Dropdown.Header>Phd</Dropdown.Header>
                      <Nav.Link href="./assets/files/PhD_Regulations.pdf">
                        PhD Regulations
                      </Nav.Link>
                      <Dropdown.Header>Online Learning</Dropdown.Header>
                      <Nav.Link
                        href="https://charuvidya.charusat.ac.in"
                        target="_blank"
                      >
                        CharuVidya
                      </Nav.Link>
                      <Nav.Link
                        href="http://172.16.11.116/LocalGuru/"
                        target="_blank"
                      >
                        NPTEL Guru
                      </Nav.Link>
                      <Dropdown.Header>Academic Links</Dropdown.Header>
                      <Nav.Link>Academic Calender --X</Nav.Link>
                      <Nav.Link>Academic Services --X</Nav.Link>
                      {/* <Nav.Link>Code of Conduct</Nav.Link> */}
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
                      <Nav.Link href="https://charusat.nopaperforms.com/">
                        Admission Enquiry
                      </Nav.Link>
                      <Nav.Link
                        href="https://charusat.nopaperforms.com/"
                        target="_blank"
                      >
                        Apply Now
                      </Nav.Link>
                      <Nav.Link
                        href="https://charusat.ac.in/admission/doc/AdmissionsEligibility.pdf"
                        target="_blank"
                      >
                        Eligibility Criteria
                      </Nav.Link>
                      <Nav.Link
                        href="https://charusat.ac.in/files/CHARUSAT%20Admission%20FAQ%2004-06-2022.pdf"
                        target="_blank"
                      >
                        Fees
                      </Nav.Link>
                      <Nav.Link>+91 8905500500</Nav.Link>
                    </div>
                    <div>
                      <Dropdown.Header>
                        For International Students
                      </Dropdown.Header>
                      <Nav.Link
                        href="https://charusat.nopaperforms.com/"
                        target="_blank"
                      >
                        Apply Now
                      </Nav.Link>
                      <Nav.Link
                        href="https://charusat.ac.in/international/Eligibility_criteria.pdf "
                        target="_blank"
                      >
                        Eligibility Criteria
                      </Nav.Link>
                      <Nav.Link
                        href="https://charusat.ac.in/international/International_Fee.pdf"
                        target="_blank"
                      >
                        Fees
                      </Nav.Link>
                      <Nav.Link>+91 9173701614</Nav.Link>
                    </div>
                    <div>
                      <Dropdown.Header> Admission Information</Dropdown.Header>
                      <Nav.Link
                        href="./admission_reprentatives"
                        target="_blank"
                      >
                        Contact Admission Cell
                      </Nav.Link>
                      <Nav.Link
                        href="https://charusat.ac.in/admission/"
                        target="_blank"
                      >
                        Admission Portal Login
                      </Nav.Link>
                      <Nav.Link>Fellowship --x</Nav.Link>
                      <Nav.Link>Scholarships --x</Nav.Link>
                      <Nav.Link href="./transport">Transportation </Nav.Link>
                      <Nav.Link href="./hostels">Hostels</Nav.Link>
                      <Nav.Link>FAQ --x</Nav.Link>
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
                <Container className="  eventsNav pt-0 mt-0 dropdown-menu-end">
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
                      <Nav.Link href="./hostels">Girl's Hostle</Nav.Link>
                      <Nav.Link href="./hostels">Boy's Hostle</Nav.Link>
                      <Nav.Link>Staff Quaters --x</Nav.Link>
                      <Nav.Link>Canteen & Food --x</Nav.Link>
                      {/* <Nav.Link>Transportation</Nav.Link> */}
                      <Nav.Link>Recreation --x</Nav.Link>
                    </div>
                    <div>
                      <Dropdown.Header>Student Helplines</Dropdown.Header>
                      <Nav.Link>Helpline Contact --x</Nav.Link>
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
                      <Nav.Link href="./">Laboratories --x</Nav.Link>
                      <Nav.Link
                        href="https://charusat.ac.in/charusatjournal/"
                        target="_blank"
                      >
                        CHARUSAT Journal
                      </Nav.Link>
                      <Nav.Link href="./">
                        Enterpreneurship Development & Incubation Cell --x
                      </Nav.Link>
                      <Nav.Link
                        href="https://kradle.charusat.ac.in/"
                        target="_blank"
                      >
                        Dr. K. C. Patel Research and Development Centre (KRADLE)
                      </Nav.Link>
                      <Nav.Link href="#" target="_blank">
                        International Center For Consomology (ICC) --x
                      </Nav.Link>
                      <Nav.Link href="./ipr">IPR Cell</Nav.Link>
                      <Nav.Link href="./research">
                        Research Facilitation
                      </Nav.Link>
                      <Nav.Link href="">
                        CHARUSAT Space and Research Center --x
                      </Nav.Link>
                      <Nav.Link href="./ethics">
                        Research Ethics Committee
                      </Nav.Link>
                    </div>
                    <div>
                      <Dropdown.Header>Policies</Dropdown.Header>
                      <Nav.Link href="">Publication Policy</Nav.Link>
                      <Nav.Link>Research Paper Award --x</Nav.Link>

                      <Dropdown.Header>Outcomes</Dropdown.Header>
                      <Nav.Link>Publications</Nav.Link>
                      <Nav.Link>Project Grants</Nav.Link>
                      <Nav.Link>Patents</Nav.Link>
                    </div>
                  </div>
                </Container>
              </NavDropdown>
              {/* <NavDropdown
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
              </NavDropdown> */}

              <NavDropdown
                className=" align-text-top"
                title="Know CHARUSAT"
                id="basic-nav-dropdown"
              >
                <Container className="  eventsNav pt-0 mt-0">
                  <div class="flex-container">
                    <div>
                      <Dropdown.Header>About University</Dropdown.Header>
                      <Nav.Link href="./about">About University</Nav.Link>
                      <Nav.Link href="./about">Journy of CHARUSAT</Nav.Link>
                      <Nav.Link href="./about">Vision</Nav.Link>
                      <Nav.Link href="./about">Mission</Nav.Link>
                      <Nav.Link href="./PresidentDesk">
                        President's Message
                      </Nav.Link>
                      <Nav.Link href="./PresidentDesk">
                        Provost's Message
                      </Nav.Link>
                      <Nav.Link>Student Reviews --x</Nav.Link>
                      <Nav.Link href="./convocations">Convocations</Nav.Link>
                    </div>
                    <div>
                      <Dropdown.Header>Governing Members</Dropdown.Header>
                      <Nav.Link href="./people">Governing Body</Nav.Link>
                      <Nav.Link href="./people">Board of Management</Nav.Link>
                      <Nav.Link href="./people">
                        Deans, Principals & Heads
                      </Nav.Link>
                      <Nav.Link href="./people">University Officers</Nav.Link>
                      <Dropdown.Header>Contact Us</Dropdown.Header>
                      <Nav.Link href="./contact_us">
                        Contact University
                      </Nav.Link>
                      <Nav.Link href="./campus-map">Campus Map</Nav.Link>
                      <Nav.Link href="./">Virtual Campus Tour --x</Nav.Link>
                      <Nav.Link>Help and Support Team --x</Nav.Link>
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
              <Nav.Link href="#">Careers</Nav.Link>
              <Nav.Link href="#">Student Corner</Nav.Link>
              <Nav.Link href="https://iqac.charusat.ac.in">IQAC</Nav.Link>
            </Nav>
          </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
