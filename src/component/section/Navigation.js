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
  const navStyles = {
    fontSize: "16px",
    padding: 0,
    fontWeight: 500,
    "-webkit-box-shadow": "0px 1px 4px rgb(0 0 0 / 10%)",
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      style={navStyles}
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
            <Nav className="mx-auto custom-hover">
              <NavDropdown
                className=" align-text-top"
                title="Academics"
                id="basic-nav-dropdown"
              >
                <Container className="eventsNav pt-0 mt-0">
                  <div className="flex-container">
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
                  <div className="flex-container">
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
                  <div className="flex-container">
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
                  <div className="flex-container">
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
                      <Nav.Link href="./research">Publication Policy</Nav.Link>
                      <Nav.Link href="./research">
                        Research Paper Award{" "}
                      </Nav.Link>

                      <Dropdown.Header>Outcomes</Dropdown.Header>
                      <Nav.Link>Publications --x</Nav.Link>
                      <Nav.Link>Project Grants --x</Nav.Link>
                      <Nav.Link>Patents --x</Nav.Link>
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
                  <div className="flex-container">
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
                  <div className="flex-container">
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
              <Nav.Link href="./careers">Careers</Nav.Link>
              {/* <Nav.Link href="./ComingSoon">Student Corner</Nav.Link> */}
              <Nav.Link href="https://iqac.charusat.ac.in">IQAC</Nav.Link>
            </Nav>
          </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    // <header
    //   className="kingster-header-wrap kingster-header-style-plain kingster-style-menu-right kingster-sticky-navigation kingster-style-fixed"
    //   data-navigation-offset="75px"
    // >
    //   <div className="kingster-header-background"></div>
    //   <div className="kingster-header-container kingster-container">
    //     <div className="kingster-header-container-inner clearfix">
    //       <div className="kingster-logo kingster-item-pdlr">
    //         <div className="kingster-logo-inner">
    //           <a className="" href="./home">
    //             <div
    //               className="tp-caption tp-resizeme"
    //               //     style="
    //               //   font-size: 53px;
    //               //   font-weight: 700;
    //               //   color: #0066b3;
    //               //   letter-spacing: 2px;
    //               //   font-family: 'Poppins', sans-seri;
    //               //   visibility: inherit;
    //               //   transition: none;
    //               //   text-align: inherit;
    //               //   border-width: 0px;
    //               //   margin: 0px;
    //               //   padding: 0px;
    //               //   min-height: 0px;
    //               //   min-width: 0px;
    //               //   max-height: none;
    //               //   max-width: none;
    //               //   opacity: 1;
    //               //   transform: matrix3d(
    //               //     1,
    //               //     0,
    //               //     0,
    //               //     0,
    //               //     0,
    //               //     1,
    //               //     0,
    //               //     0,
    //               //     0,
    //               //     0,
    //               //     1,
    //               //     0,
    //               //     0,
    //               //     0,
    //               //     0,
    //               //     1
    //               //   );
    //               //   transform-origin: 50% 50% 0px;
    //               // "
    //             >
    //               CHARUSAT
    //             </div>
    //           </a>
    //         </div>
    //       </div>

    //       <div className="kingster-navigation kingster-item-pdlr clearfix">
    //         <div
    //           className="kingster-main-menu sf-js-enabled sf-arrows"
    //           id="kingster-main-menu"
    //           // style="touch-action: pan-y"
    //         >
    //           <ul id="menu-main-navigation-1" className="sf-menu">
    //             <li className="menu-item menu-item-has-children kingster-mega-menu">
    //               <a href="#" className="sf-with-ul-pre sf-with-ul">
    //                 Academics
    //               </a>
    //               <div
    //                 className="sf-mega sf-mega-full"
    //                 // style="display: none"
    //               >
    //                 {/* <!--Removed megaimg class--> */}
    //                 <div className="sf-mega-section-wrap">
    //                   <div className="sf-mega-section kingster-column-15">
    //                     <div className="sf-mega-section-inner menu-item menu-item-has-children">
    //                       <a
    //                         href="#"
    //                         className="sf-with-ul-pre"
    //                         //     style="
    //                         //   font-size: 17px !important;
    //                         //   display: block;
    //                         //   letter-spacing: 0px;
    //                         //   font-weight: 600;
    //                         //   padding: 0px 12px;
    //                         //   color: #192f59;
    //                         // "
    //                       >
    //                         Learn Online
    //                       </a>
    //                       <ul className="sub-menu">
    //                         <li className="menu-item">
    //                           <a href="http://117.239.83.200:9000/">
    //                             CharuVidya
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="#">NPTEL Resources</a>
    //                         </li>
    //                         <hr />
    //                         <li className="menu-item" data-size="15">
    //                           <a
    //                             href="#"
    //                             //     style="
    //                             //   font-size: 17px !important;
    //                             //   display: block;
    //                             //   letter-spacing: 0px;
    //                             //   font-weight: 600;
    //                             //   padding: 0px 12px;
    //                             //   color: #192f59;
    //                             // "
    //                           >
    //                             Other Programs
    //                           </a>
    //                         </li>
    //                         {/* <!-- sub title in column --> */}

    //                         <li className="menu-item">
    //                           <a href="./certification_courses">
    //                             Non-Credit &amp; Certification Courses
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./programs#GNM">
    //                             General Nursing &amp; Midwifery (GNM)
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./programs#PGDCH">
    //                             Post Graduate Diploma in Clinical Hypnosis
    //                             (PGDCH)
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./programs#PGDCS">
    //                             Post Graduate Diploma in Cyber Security (PGDCS)
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./programs#PGDMLT">
    //                             Post Graduate Diploma in Medical Laboratory
    //                             Technology (PGDMLT)
    //                           </a>
    //                         </li>
    //                         <hr />
    //                         <li className="menu-item" data-size="15">
    //                           <a
    //                             href="#"
    //                             className="sf-with-ul-pre"
    //                             //     style="
    //                             //   font-size: 17px !important;
    //                             //   display: block;
    //                             //   letter-spacing: 0px;
    //                             //   font-weight: 600;
    //                             //   padding: 0px 12px;
    //                             //   color: #192f59;
    //                             // "
    //                           >
    //                             Ph D Programs
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./comming_soon">General Information</a>
    //                         </li>
    //                       </ul>
    //                     </div>
    //                   </div>
    //                   <div className="sf-mega-section kingster-column-15">
    //                     <div className="sf-mega-section-inner menu-item menu-item-has-children">
    //                       <a className="sf-with-ul-pre">
    //                         Undergraduate Studies
    //                       </a>
    //                       <ul className="sub-menu">
    //                         <li className="menu-item">
    //                           <a href="./programs#BTECH">
    //                             Bachelor of Technology (B Tech)
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./programs#BCA">
    //                             Bachelor of Computer Applications (BCA)
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./programs#BSCIT">
    //                             Bachelor of Science (Information Technology)
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./programs#BPHARM">
    //                             Bachelor of Pharmacy (B Pharm)
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./programs#BBA">
    //                             Bachelor of Business Administration (BBA)
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./programs#BSCAS">
    //                             Bachelor of Science (Biology)
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./programs#BPT">
    //                             Bachelor of Physiotherapy (BPT)
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./programs#BSCNUR">
    //                             Bachelor of Science (Nursing)
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./programs#BOPTO">
    //                             Bachelor of Optometry (B Optom)
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./programs#BSCPS">
    //                             Bachelor of Science (Imaging Technology)
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./programs#BSCPS">
    //                             Bachelor of Science (Medical Technnology)
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./programs#BSCPS">
    //                             Bachelor of Science (Operation Theatre &amp;
    //                             Anesthesia Technology)
    //                           </a>
    //                         </li>
    //                       </ul>
    //                     </div>
    //                   </div>
    //                   <div className="sf-mega-section kingster-column-15">
    //                     <div className="sf-mega-section-inner menu-item menu-item-has-children">
    //                       <a href="#" className="sf-with-ul-pre">
    //                         Postgraduate Studies
    //                       </a>
    //                       <ul className="sub-menu">
    //                         <li className="menu-item">
    //                           <a href="./programs#MTECH">
    //                             Master of Technology (M Tech)
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./programs#MCA">
    //                             Master of Computer Applications (MCA)
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./programs#MSCIT">
    //                             Master of Science (Information Technology)
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./programs#MPHARM">
    //                             Master of Pharmacy (M Pharm)
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./programs#MBA">
    //                             Master of Business Administration (MBA)
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./programs#MSCAS">
    //                             Master of Science (Advanced Organic Chemistry)
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./programs#MSCAS">
    //                             Master of Science (Biochemistry)
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./programs#MSCAS">
    //                             Master of Science (Biotechnology)
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./programs#MSCAS">
    //                             Master of Science (Microbiology)
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./programs#MSCAS">
    //                             Master of Science (Physics)
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./programs#MPT">
    //                             Master of Physiotherapy (MPT)
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./programs#MSCNUR">
    //                             Master of Science (Nursing)
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./programs#MSCMLT">
    //                             Master of Science (Medical Laboratory
    //                             Technology)
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./programs#MSCMLT">
    //                             Master of Science (Medical Imaging Teachnology)
    //                           </a>
    //                         </li>
    //                       </ul>
    //                     </div>
    //                   </div>
    //                   <div className="sf-mega-section kingster-column-15">
    //                     <div className="sf-mega-section-inner menu-item menu-item-has-children">
    //                       <a href="#" className="sf-with-ul-pre">
    //                         Information You May Need!!!
    //                       </a>
    //                       <ul className="sub-menu">
    //                         <li className="menu-item">
    //                           <a href="/Downloads/Academic%20Calenders">
    //                             Academic Calender
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./academic_services">
    //                             Academic Services
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./cdpc">
    //                             Career Development and Placements
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./cdpc">Distinguished Lecture Series</a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./technology_and_entrepreneurial_thinking">
    //                             Entrepreneurship and Innovations
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./">Endowment Chairs</a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./">Initiatives</a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="https://scpit.new.knimbus.com/user#/home">
    //                             Knowledge Resource Center
    //                           </a>
    //                         </li>

    //                         {/* <!--<li className="menu-item " data-size="15"><a href="#"
    //                                          style="font-size: 17px !important;
    //                                                 display: block;
    //                                                 letter-spacing: 0px;
    //                                                 font-weight: 600;
    //                                                 padding: 0px 12px;
    //                                                 color:#192f59;" >Rules & Regulations</a>

    //                                         </li>--> */}
    //                         <li className="menu-item">
    //                           <a href="">Code of Conduct</a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="">Academic Regulations</a>
    //                         </li>
    //                       </ul>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </li>
    //             <li className="menu-item menu-item-has-children kingster-mega-menu">
    //               <a href="#" className="sf-with-ul-pre sf-with-ul">
    //                 Admission
    //               </a>
    //               <div
    //                 className="sf-mega sf-mega-full"
    //                 // style="display: none"
    //               >
    //                 <div className="sf-mega-section-wrap">
    //                   <div className="sf-mega-section kingster-column-20">
    //                     <div className="sf-mega-section-inner menu-item menu-item-has-children">
    //                       <a href="#" className="sf-with-ul-pre">
    //                         National
    //                       </a>
    //                       <ul className="sub-menu">
    //                         <li className="menu-item">
    //                           <a href="https://charusat.nopaperforms.com/">
    //                             Apply now
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="https://charusat.ac.in/admission/doc/AdmissionsEligibility.pdf">
    //                             Eligibility Criteria
    //                           </a>
    //                         </li>
    //                         {/* <!--<i className="fa fa-whatsapp" style="color:#3db166;float:right;"> Call or Text</i> */}

    //                         {/* <li className="menu-item"><a href="upload/files/Policy-for-CHARUSAT-Postgraduate-Student-Fellowship.html">Assistantship for Post Graduate Students</a></li>--> */}
    //                         <li className="menu-item">
    //                           <a href="https://charusat.ac.in/admission/doc/FeeStructure(2020-21)_Domestic.pdf">
    //                             Fees
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="">
    //                             <i
    //                               className="fa fa-whatsapp"
    //                               // style="color: #3db166; font-size: 20px"
    //                             ></i>
    //                             +91 8905500500
    //                           </a>
    //                         </li>
    //                       </ul>
    //                     </div>
    //                   </div>
    //                   <div className="sf-mega-section kingster-column-20">
    //                     <div className="sf-mega-section-inner menu-item menu-item-has-children">
    //                       <a href="#" className="sf-with-ul-pre">
    //                         International
    //                       </a>
    //                       <ul className="sub-menu">
    //                         <li className="menu-item">
    //                           <a href="https://charusat.nopaperforms.com/">
    //                             Apply now
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a
    //                             href="https://charusat.ac.in/international/Eligibility_Criteria.pdf"
    //                             target="_blank"
    //                           >
    //                             Eligibility Criteria
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="" target="_blank">
    //                             Fees
    //                           </a>
    //                         </li>
    //                         {/* <!--<i className="fa fa-whatsapp" style="color:#3db166;float:right;"> Call or Text</i> --> */}

    //                         <li className="menu-item">
    //                           <a href="">
    //                             <i
    //                               className="fa fa-whatsapp"
    //                               // style="color: #3db166; font-size: 20px"
    //                             ></i>
    //                             +91 9173701614
    //                           </a>
    //                         </li>
    //                       </ul>
    //                     </div>
    //                   </div>
    //                   <div className="sf-mega-section kingster-column-20">
    //                     <div className="sf-mega-section-inner menu-item menu-item-has-children">
    //                       <a href="#" className="sf-with-ul-pre">
    //                         Others
    //                       </a>
    //                       <ul className="sub-menu">
    //                         <li className="menu-item">
    //                           <a href="https://charusat.nopaperforms.com/">
    //                             Admission Login
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./admission_representative">
    //                             Have a query? Contact Admission Representatives
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="https://calendly.com/charusat_campus?embed_domain=charusat.ac.in&amp;embed_type=PopupWidget">
    //                             Need Personal Guidance!!! Talk to us
    //                           </a>
    //                         </li>

    //                         <li className="menu-item">
    //                           <a href="./upload/files/Policy-for-CHARUSAT-Postgraduate-Student-Fellowship.html">
    //                             Fellowship
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./scholarships">Scholarship</a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./Transportation">Transportation</a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a
    //                             href="../../files/CHARUSAT_Admissions_FAQ2020%20_Version11.pdf"
    //                             target="_blank"
    //                           >
    //                             Frequently Asked Questions (FAQ)
    //                           </a>
    //                         </li>
    //                       </ul>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </li>
    //             <li className="menu-item menu-item-has-children kingster-mega-menu">
    //               <a href="#" className="sf-with-ul-pre sf-with-ul">
    //                 Campus Life
    //               </a>
    //               <div
    //                 className="sf-mega sf-mega-full"
    //                 // style="display: none"
    //               >
    //                 <div className="sf-mega-section-wrap">
    //                   <div className="sf-mega-section kingster-column-20">
    //                     <div className="sf-mega-section-inner menu-item menu-item-has-children">
    //                       <a href="#" className="sf-with-ul-pre">
    //                         Activity &amp; Events
    //                       </a>
    //                       <ul className="sub-menu">
    //                         <li className="menu-item">
    //                           <a href="">NCC@CHARUSAT</a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="">NSS@CHARUSAT</a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./Sports">Sports &amp; Gym</a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="">Students Activities &amp; Events</a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="">Students Clubs</a>
    //                         </li>
    //                       </ul>
    //                     </div>
    //                   </div>
    //                   <div className="sf-mega-section kingster-column-20">
    //                     <div className="sf-mega-section-inner menu-item menu-item-has-children">
    //                       <a href="#" className="sf-with-ul-pre">
    //                         Residencies &amp; Amenities
    //                       </a>
    //                       <ul className="sub-menu">
    //                         <li className="menu-item">
    //                           <a href="./hostels">Girl's Hostel</a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./hostels">Boy's Hostel</a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="">Staff Quarters</a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="">Food</a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./Transportation">Transportation</a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="">Recreation</a>
    //                         </li>
    //                       </ul>
    //                     </div>
    //                   </div>
    //                   <div className="sf-mega-section kingster-column-20">
    //                     <div className="sf-mega-section-inner menu-item menu-item-has-children">
    //                       <a href="#" className="sf-with-ul-pre">
    //                         Student Helpline
    //                       </a>
    //                       <ul className="sub-menu">
    //                         {/* <!--<li className="menu-item"><a href="">College Merchandise</a></li>--> */}
    //                         {/* <!--<li className="menu-item"><a href="">Recreation and Refreshment</a></li>
    //                                         <hr>
    //                                         <li className="menu-item " data-size="15"><a href="#"
    //                                          style="font-size: 17px !important;
    //                                                 display: block;
    //                                                 letter-spacing: 0px;
    //                                                 font-weight: 600;
    //                                                 padding: 0px 12px;
    //                                                 color:#192f59;" >Student Helpline</a></li>--> */}
    //                         <li className="menu-item">
    //                           <a href="">Helpline Contacts</a>
    //                         </li>
    //                       </ul>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </li>
    //             <li className="menu-item menu-item-has-children kingster-mega-menu">
    //               <a href="#" className="sf-with-ul-pre sf-with-ul">
    //                 Research
    //               </a>
    //               <div
    //                 className="sf-mega sf-mega-full"
    //                 // style="display: none"
    //               >
    //                 <div className="sf-mega-section-wrap">
    //                   <div className="sf-mega-section kingster-column-20">
    //                     <div className="sf-mega-section-inner menu-item menu-item-has-children">
    //                       <a href="#" className="sf-with-ul-pre">
    //                         Initiatives
    //                       </a>
    //                       <ul className="sub-menu">
    //                         <li className="menu-item">
    //                           <a href="https://youtu.be/Og4NMqI3q5M">
    //                             Laboratories
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="https://charusat.ac.in/charusatjournal/">
    //                             CHARUSAT Journal
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./technology_and_entrepreneurial_thinking">
    //                             Enterpreneurship Development &amp; Incubation
    //                             Cell (EDIC)
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="https://kradle.charusat.ac.in/">
    //                             Dr. K. C. Patel Research and Development Centre
    //                             (KRADLE)
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="http://icccharusat.com/">
    //                             International Center for Cosmology (ICC)
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./ipr_cell"> IPR Cell</a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./research facilitation">
    //                             Research Facilitation
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./csrtc">
    //                             CHARUSAT Space Research Center
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./EthicsCommittee">
    //                             Research Ethics Committee
    //                           </a>
    //                         </li>
    //                       </ul>
    //                     </div>
    //                   </div>
    //                   <div className="sf-mega-section kingster-column-20">
    //                     <div className="sf-mega-section-inner menu-item menu-item-has-children">
    //                       <a href="#" className="sf-with-ul-pre">
    //                         Policies
    //                       </a>
    //                       <ul className="sub-menu">
    //                         <li className="menu-item">
    //                           <a href="upload/Publication_Policy.docx">
    //                             Publications
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="https://charusat.ac.in/documents/pdfs/research/CPSF.pdf">
    //                             CHARUSAT Ph. D. Scholars’ Fellowship (CPSF)
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="https://charusat.ac.in/documents/pdfs/research/CVSRI.pdf">
    //                             CHARUSAT Visitor Student Research Internship
    //                             (CVSRI)
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="https://charusat.ac.in/documents/pdfs/research/PGSF.pdf">
    //                             Postgraduate Student Fellowship (PGSF)
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="https://charusat.ac.in/documents/pdfs/research/7.%20Policy%20for%20CHARUSAT%20SEED%20Grant%20for%20Research.pdf">
    //                             CHARUSAT SEED Grant for Research (CSGR)
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="https://charusat.ac.in/documents/pdfs/research/1.%20CHARUSAT%20Research%20Policy.pdf">
    //                             Research
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="https://charusat.ac.in/documents/pdfs/research/8.%20Research%20Paper%20Award%20Policy%202018.pdf">
    //                             Research Paper Award
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="https://charusat.ac.in/documents/pdfs/research/05.INTELLECTUAL%20PROPERTY%20POLICY.pdf">
    //                             Intellectual Property
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="https://charusat.ac.in/documents/pdfs/research/06.Plagiarism%20Policy.pdf">
    //                             Plagiarism
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="https://charusat.ac.in/documents/pdfs/research/9.%20Annexure%20V_Patent,%20IPR%20and%20Royalty%20Sharing%20Policy%20.pdf">
    //                             Patent, IPR and Royalty Sharing
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="https://drive.google.com/file/d/1CzmhA6azuxlWGMwdaJPd6DNIv5e5Vyc9/view?usp=sharing">
    //                             Consultancy
    //                           </a>
    //                         </li>
    //                       </ul>
    //                     </div>
    //                   </div>
    //                   <div className="sf-mega-section kingster-column-20">
    //                     <div className="sf-mega-section-inner menu-item menu-item-has-children">
    //                       <a href="#" className="sf-with-ul-pre">
    //                         Outcomes
    //                       </a>
    //                       <ul className="sub-menu">
    //                         <li className="menu-item">
    //                           <a href="./arboretum">Publications</a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./arboretum">Project Grants</a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./arboretum">Patents</a>
    //                         </li>
    //                       </ul>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </li>
    //             <li className="menu-item menu-item-has-children kingster-mega-menu">
    //               <a href="#" className="sf-with-ul-pre sf-with-ul">
    //                 IQAC
    //               </a>
    //               <div
    //                 className="sf-mega sf-mega-full"
    //                 //  style="display: none"
    //               >
    //                 <div className="sf-mega-section-wrap">
    //                   <div className="sf-mega-section kingster-column-20">
    //                     <div className="sf-mega-section-inner menu-item menu-item-has-children">
    //                       <a href="#" className="sf-with-ul-pre">
    //                         Academic Calendars
    //                       </a>
    //                       <ul className="sub-menu">
    //                         <li className="menu-item">
    //                           <a href="https://drive.google.com/file/d/1jf3ICgcWqYbDMyHEhzLLMpoxezCCsMaj/view">
    //                             2021-22
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="https://drive.google.com/file/d/10d2J8fElj33bbHVIY3iDC2Wqn-bHzm68/view">
    //                             2020-21
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="https://drive.google.com/file/d/1zLG3jMMMEhs3u3VYIcwBOeMVXDqrgfoZ/view">
    //                             2019-20
    //                           </a>
    //                         </li>
    //                         <hr />
    //                         <li className="menu-item" data-size="15">
    //                           <a
    //                             href="#"
    //                             //     style="
    //                             //   font-size: 17px !important;
    //                             //   display: block;
    //                             //   letter-spacing: 0px;
    //                             //   font-weight: 600;
    //                             //   padding: 0px 12px;
    //                             //   color: #192f59;
    //                             // "
    //                           >
    //                             Academic &amp; Administrative Audit
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a
    //                             href="https://drive.google.com/file/d/1yzWZS2xJDPGgNYo4Bsosfk_gtSdHVRa6/view"
    //                             target="_blank"
    //                           >
    //                             AAA Process
    //                           </a>
    //                         </li>
    //                       </ul>
    //                     </div>
    //                   </div>
    //                   <div className="sf-mega-section kingster-column-20">
    //                     <div className="sf-mega-section-inner menu-item menu-item-has-children">
    //                       <a href="#" className="sf-with-ul-pre">
    //                         Meetings
    //                       </a>
    //                       <ul className="sub-menu">
    //                         <li className="menu-item">
    //                           <a href="https://drive.google.com/file/d/1wgKblLfSUFQJkuSnuKTji92iJUEOfDUm/view">
    //                             17th IQAC Meeting Minutes
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="https://drive.google.com/file/d/1x9eHrgOfaf1Fjqw4YyjBlOrjuMSwjJl2/view">
    //                             16th IQAC Meeting Minutes
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="https://drive.google.com/file/d/1d31er45Sk2a4hzAybDllom-lwsdpxXOP/view">
    //                             15th IQAC Meeting Minutes
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="https://drive.google.com/file/d/1v2rwV8TTHHuggH2RNYAJuysUbVNrj9V3/view">
    //                             14th IQAC Meeting Minutes
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="https://drive.google.com/file/d/1mu8-m575kWEc1zWIvI1DYAvOU2Pd5GKY/view">
    //                             13th IQAC Meeting Minutes
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="https://drive.google.com/file/d/1lgu7sqXzOa4QY7PW8GxB00j1UtlAITXJ/view">
    //                             12th IQAC Meeting Minutes
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="https://drive.google.com/file/d/1UaPrFex2sQ7z0_78bI8F3FM1jIer06VS/view">
    //                             11th IQAC Meeting Minutes
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="https://drive.google.com/file/d/19fKNOg9RjPttLZNrI8Aej5lfyY7IyNDq/view">
    //                             10th IQAC Meeting Minutes
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="https://drive.google.com/file/d/1nuVz_6zTTuo8FaPDkwlgs1GTS4Hir8dg/view">
    //                             9th IQAC Meeting Minutes
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="https://drive.google.com/file/d/1HrHqUaxz6QnmgQO_lq1lRK3ILnVBiHCk/view">
    //                             8th IQAC Meeting Minutes
    //                           </a>
    //                         </li>
    //                       </ul>
    //                     </div>
    //                   </div>
    //                   <div className="sf-mega-section kingster-column-20">
    //                     <div className="sf-mega-section-inner menu-item menu-item-has-children">
    //                       <a
    //                         href="https://charusat.ac.in/accreditation.php"
    //                         className="sf-with-ul-pre"
    //                       >
    //                         Accreditation &amp; Ranking
    //                       </a>
    //                       <hr />
    //                       <ul className="sub-menu">
    //                         <li className="menu-item" data-size="15">
    //                           <a
    //                             href="https://iqac.charusat.ac.in/Best%20Practices.php"
    //                             //     style="
    //                             //   font-size: 17px !important;
    //                             //   display: block;
    //                             //   letter-spacing: 0px;
    //                             //   font-weight: 600;
    //                             //   padding: 0px 12px;
    //                             //   color: #192f59;
    //                             // "
    //                           >
    //                             Best Practices
    //                           </a>
    //                         </li>
    //                         <hr />
    //                         <li className="menu-item" data-size="15">
    //                           <a
    //                             href="https://iqac.charusat.ac.in/inst_distinct.html#1"
    //                             //     style="
    //                             //   font-size: 17px !important;
    //                             //   display: block;
    //                             //   letter-spacing: 0px;
    //                             //   font-weight: 600;
    //                             //   padding: 0px 12px;
    //                             //   color: #192f59;
    //                             // "
    //                           >
    //                             Institutional Distinctiveness
    //                           </a>
    //                         </li>
    //                         <hr />
    //                         <li className="menu-item" data-size="15">
    //                           <a
    //                             href="https://iqac.charusat.ac.in/Feedback.php"
    //                             //     style="
    //                             //   font-size: 17px !important;
    //                             //   display: block;
    //                             //   letter-spacing: 0px;
    //                             //   font-weight: 600;
    //                             //   padding: 0px 12px;
    //                             //   color: #192f59;
    //                             // "
    //                           >
    //                             Feedback on Curriculum
    //                           </a>
    //                         </li>
    //                         <hr />
    //                         <li className="menu-item" data-size="15">
    //                           <a
    //                             href="#"
    //                             //     style="
    //                             //   font-size: 17px !important;
    //                             //   display: block;
    //                             //   letter-spacing: 0px;
    //                             //   font-weight: 600;
    //                             //   padding: 0px 12px;
    //                             //   color: #192f59;
    //                             // "
    //                           >
    //                             Student Satisfaction Survey
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="https://charusat.ac.in/files/studentCorner/Student-Satisfaction-Survey-SSS%20Poster.pdf">
    //                             SSS Poster
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a
    //                             href="https://drive.google.com/file/d/1uoluWSQKYxMZj_UGRWLH4-oeZfnquTRW/view"
    //                             target="_blank"
    //                           >
    //                             SSS Analysis
    //                           </a>
    //                         </li>
    //                       </ul>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </li>
    //             <li className="menu-item menu-item-has-children kingster-mega-menu">
    //               <a href="#" className="sf-with-ul-pre sf-with-ul">
    //                 Know CHARUSAT
    //               </a>
    //               <div
    //                 className="sf-mega sf-mega-full"
    //                 // style="display: none"
    //               >
    //                 <div className="sf-mega-section-wrap">
    //                   <div className="sf-mega-section kingster-column-15">
    //                     <div className="sf-mega-section-inner menu-item menu-item-has-children">
    //                       <a href="#" className="sf-with-ul-pre">
    //                         About University
    //                       </a>
    //                       <ul className="sub-menu">
    //                         <li className="menu-item">
    //                           <a href="./journey_of_charusat">
    //                             About University
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./Vision">Vision</a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./Mission">Mission</a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./journey_of_charusat">Torchbearers</a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="President_charusat">
    //                             From President's Desk
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="Provost_charusat">From Provost's Desk</a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="#">Students' Reviews</a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./convocations">Convocations</a>
    //                         </li>
    //                         <hr />
    //                         {/* <!--<li className="menu-item"><a href="">About CHARUSAT</a></li>--> */}
    //                         <li className="menu-item" data-size="15">
    //                           <a
    //                             href="#"
    //                             //     style="
    //                             //   font-size: 17px !important;
    //                             //   display: block;
    //                             //   letter-spacing: 0px;
    //                             //   font-weight: 600;
    //                             //   padding: 0px 12px;
    //                             //   color: #192f59;
    //                             // "
    //                           >
    //                             Governing Members
    //                           </a>
    //                         </li>
    //                         {/* <!--<li className="menu-item"><a href="./Connect_with_CHARUSAT">Connect with CHARUSAT</a></li>--> */}
    //                         <li className="menu-item">
    //                           <a href="people">Governing Body</a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="people">Board of Management</a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="people">Deans, Principals &amp; Heads</a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="people">University Officers</a>
    //                         </li>
    //                         {/* <!--<li className="menu-item"><a href="">Institutional Review Board</a></li>-->

    //                     <!--<li className="menu-item"><a href="">Office of The Registrar</a>
    //                                         </li>--> */}
    //                       </ul>
    //                     </div>
    //                   </div>
    //                   <div className="sf-mega-section kingster-column-15">
    //                     <div className="sf-mega-section-inner menu-item menu-item-has-children">
    //                       <a href="#" className="sf-with-ul-pre">
    //                         Centers &amp; Cells
    //                       </a>
    //                       {/* <!--<li className="menu-item menu-item-has-children" data-size="20">--> */}

    //                       <ul className="sub-menu">
    //                         {/* <!--<li className="menu-item"><a>Accessibility Services</a></li>--> */}
    //                         <li className="menu-item">
    //                           <a href="./antiragging">
    //                             Anti-Ragging Committee{" "}
    //                           </a>
    //                         </li>
    //                         {/* <!--<li className="menu-item"><a>Arts on Campus</a></li>--> */}

    //                         {/* <!--<li className="menu-item"><a href="">College Merchandise</a></li>--> */}

    //                         <li className="menu-item">
    //                           <a href="./eoc">Equal Opportunity Cell (EOC)</a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="">Energy Conservation Cell (ECC)</a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./grc">Grievance Redressal Cell (GRC)</a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./technology_and_entrepreneurial_thinking">
    //                             Enterpreneurship Development &amp; Incubation
    //                             Cell (EDIC)
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./UIIC">
    //                             University Industry Interaction Cell (UIIC)
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./wdc">Womens' Development Cell (WDC)</a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./hrdc">
    //                             Pri. B I Patel Human Resource Development Center
    //                             (HRDC)
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./gen_info_international">
    //                             International Students' Cell (ISC)
    //                           </a>
    //                         </li>
    //                         {/* <!--<li className="menu-item"><a href="">Life in Charotar Region</a></li>--> */}
    //                         <li className="menu-item">
    //                           <a href="./cpsh">
    //                             Cell for Prevention of Sexual Harassment (CPSH)
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./iqac">
    //                             Internal Quality Assurance Cell (IQAC)
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./credp">
    //                             Charusat Rural Education Development Program
    //                             (CREDP)
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./wellness_programs">
    //                             Student Wellness Programme (SWP)
    //                           </a>
    //                         </li>

    //                         {/* <!--<li className="menu-item"><a href="">Food Pantry</a></li>--> */}
    //                       </ul>
    //                     </div>
    //                   </div>
    //                   <div className="sf-mega-section kingster-column-15">
    //                     <div className="sf-mega-section-inner menu-item menu-item-has-children">
    //                       <a href="#" className="sf-with-ul-pre">
    //                         Infrastructure &amp; Resources
    //                       </a>
    //                       <ul className="sub-menu">
    //                         <li className="menu-item">
    //                           <a href="./">Auditoria &amp; Lectures Halls</a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="https://youtu.be/Og4NMqI3q5M">
    //                             Laboratories
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./wincell">
    //                             Data Center @ CHARUSAT - WINCELL
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="https://scpit.new.knimbus.com/user#/home">
    //                             Knowledge Resource Center
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./Sports">Sports &amp; Gym</a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./">Herbal Garden</a>
    //                         </li>

    //                         <li className="menu-item">
    //                           <a href=""></a>
    //                         </li>
    //                       </ul>
    //                     </div>
    //                   </div>
    //                   <div className="sf-mega-section kingster-column-15">
    //                     <div className="sf-mega-section-inner menu-item menu-item-has-children">
    //                       <a href="#" className="sf-with-ul-pre">
    //                         Visit
    //                       </a>
    //                       <ul className="sub-menu">
    //                         <li className="menu-item">
    //                           <a href="http://117.239.83.200:8110/CHARUSAT_Virtual_Tour/Charusat_Campus/">
    //                             360 Campus Tour
    //                           </a>
    //                         </li>
    //                         <hr />
    //                         {/* <!--<li className="menu-item"><a href="">About CHARUSAT</a></li>--> */}
    //                         <li className="menu-item" data-size="15">
    //                           <a
    //                             href="#"
    //                             //     style="
    //                             //   font-size: 17px !important;
    //                             //   display: block;
    //                             //   letter-spacing: 0px;
    //                             //   font-weight: 600;
    //                             //   padding: 0px 12px;
    //                             //   color: #192f59;
    //                             // "
    //                           >
    //                             Reach US
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./Connect_with_CHARUSAT">
    //                             Connect with CHARUSAT
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="https://charusat.ac.in/cms/">
    //                             Lodge Complaint
    //                           </a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="./emp_info">
    //                             Faculty &amp; Staff Directory
    //                           </a>
    //                         </li>
    //                         <hr />
    //                         <li className="menu-item" data-size="15">
    //                           <a
    //                             href="#"
    //                             //     style="
    //                             //   font-size: 17px !important;
    //                             //   display: block;
    //                             //   letter-spacing: 0px;
    //                             //   font-weight: 600;
    //                             //   padding: 0px 12px;
    //                             //   color: #192f59;
    //                             // "
    //                           >
    //                             Others
    //                           </a>
    //                         </li>

    //                         <li className="menu-item">
    //                           <a href="give-to-charusat">Give &amp; Support</a>
    //                         </li>
    //                         <li className="menu-item">
    //                           <a href="Reports">Reports</a>
    //                         </li>
    //                         {/* <!--<li className="menu-item"><a href="">Strategic Plan</a></li>--> */}
    //                       </ul>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </li>
    //           </ul>
    //           <div
    //             className="kingster-navigation-slide-bar"
    //             id="kingster-navigation-slide-bar"
    //             //     style="
    //             //   width: 0px;
    //             //   left: 555.734px;
    //             //   display: block;
    //             //   overflow: hidden;
    //             // "
    //           ></div>
    //         </div>
    //         <div className="kingster-main-menu-right-wrap clearfix">
    //           <div
    //             className="kingster-main-menu-search"
    //             id="kingster-top-search"
    //           >
    //             <i className="icon_search"></i>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </header>
  );
}
