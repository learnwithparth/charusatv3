import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.css";
import "../../assets/css/navigation.css";

const Header = () => {
  return (
    <>
      <div>
        <header className="header">
          <nav className="nav">
            <div className="logo">
              <Link to="/home" class="charusat">
                CHARUSAT
              </Link>
            </div>
            <div className="nav-links">
              <ul className="links">
                <li
                  className="link"
                  onMouseOver={() => {
                    document.getElementById("Academics").style.display = "grid";
                  }}
                  onMouseOut={() => {
                    document.getElementById("Academics").style.display = "none";
                  }}
                >
                  <a href="">Academics</a>
                </li>
                <li
                  className="link"
                  onMouseOver={() => {
                    document.getElementById("Admission").style.display = "grid";
                  }}
                  onMouseOut={() => {
                    document.getElementById("Admission").style.display = "none";
                  }}
                >
                  <a href="">Admission</a>
                </li>
                <li
                  className="link"
                  onMouseOver={() => {
                    document.getElementById("CampusLife").style.display =
                      "grid";
                  }}
                  onMouseOut={() => {
                    document.getElementById("CampusLife").style.display =
                      "none";
                  }}
                >
                  <a id="CampusLife-link" href="">
                    Campus Life
                  </a>
                </li>
                <li
                  className="link"
                  onMouseOver={() => {
                    document.getElementById("Research").style.display = "grid";
                  }}
                  onMouseOut={() => {
                    document.getElementById("Research").style.display = "none";
                  }}
                >
                  <a id="Research-link" href="">
                    Research
                  </a>
                </li>
                <li className="link">
                  <a
                    id="IQAC-link"
                    target="_blank"
                    href="https://iqac.charusat.ac.in/"
                  >
                    IQAC
                  </a>
                </li>
                <li
                  className="link"
                  onMouseOver={() => {
                    document.getElementById("KnowCHARUSAT").style.display =
                      "grid";
                  }}
                  onMouseOut={() => {
                    document.getElementById("KnowCHARUSAT").style.display =
                      "none";
                  }}
                >
                  <a id="KnowCHARUSAT-link" href="">
                    Know CHARUSAT
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div
            className="menu-4"
            id="Academics"
            onMouseOver={() => {
              document.getElementById("Academics").style.display = "grid";
            }}
            onMouseOut={() => {
              document.getElementById("Academics").style.display = "none";
            }}
          >
            <div className="menu-div">
              <div className="menu-d border-b">
                <h5 className="menu-head">Learn Online</h5>
                <div className="menu-items">
                  <a href="http://117.239.83.200:9000/" className="menu-link">
                    CharuVidya
                  </a>
                  <a href="./coming-soon" className="menu-link">
                    NPTEL Resources
                  </a>
                </div>
              </div>

              <div className="menu-d border-b">
                <h5 className="menu-head">Other Programmes</h5>
                <div className="menu-items">
                  <Link to="/certification-courses" className="menu-link">
                    Non-Credit & Certification Courses
                  </Link>
                  <a href="" className="menu-link">
                    General Nursing & Midwifery (GNM)
                  </a>
                  <a href="./coming-soon" className="menu-link">
                    Post Graduation Diploma in Clinical Hypnosis (PGDCH)
                  </a>
                  <a href="https://pgdcs.charusat.ac.in/" className="menu-link">
                    Post Graduation Diploma in Cyber Security (PGDCS)
                  </a>
                  <Link to="./coming-soon" className="menu-link">
                    Post Graduation Diploma in Medical Laboratory Technology
                    (PGDMLT)
                  </Link>
                </div>
              </div>
              <div className="menu-d">
                <h5 className="menu-head">Ph D Programs</h5>
                <div className="menu-items">
                  <Link to="./coming-soon" className="menu-link">
                    General Information
                  </Link>
                </div>
              </div>
            </div>
            <div className="menu-div border-left">
              <h5 className="menu-head">Undergraduate Studies</h5>
              <div className="menu-items">
                <Link to="/course-single" className="menu-link">
                  Bachelor of Technology (B Tech)
                </Link>
                <Link to="/course-single" className="menu-link">
                  Bachelor of Computer Application (BCA)
                </Link>
                <Link to="/course-single" className="menu-link">
                  Bachelor Science (Information Technology)
                </Link>
                <Link to="/course-single" className="menu-link">
                  Bachelor of Pharmacy (B Pharm)
                </Link>
                <Link to="/course-single" className="menu-link">
                  Bachelor of Business Administration (BBA)
                </Link>
                <Link to="/course-single" className="menu-link">
                  Bachelor of Science (Biology)
                </Link>
                <Link to="/course-single" className="menu-link">
                  Bachelor of Physiotherapy (BPT)
                </Link>
                <Link to="/course-single" className="menu-link">
                  Bachelor of Science (Nursing)
                </Link>
                <Link to="/course-single" className="menu-link">
                  Bachelor of Optometry (B Optom)
                </Link>
                <Link to="/course-single" className="menu-link">
                  Bachelor of Science (Imaging Technology)
                </Link>
                <Link to="/course-single" className="menu-link">
                  Bachelor of Science (Medical Technnology)
                </Link>
                <Link to="/course-single" className="menu-link">
                  Bachelor of Science (Operation Theatre & Anesthesia
                  Technology)
                </Link>
              </div>
            </div>
            <div className="menu-div border-left">
              <h5 className="menu-head">Postgraduate Studies</h5>
              <div className="menu-items">
                <Link to="/course-single" className="menu-link">
                  Master of Technology (M Tech)
                </Link>
                <Link to="/course-single" className="menu-link">
                  Master of Computer Applications (MCA)
                </Link>
                <Link to="/course-single" className="menu-link">
                  Master of Science (Information Technology)
                </Link>
                <Link to="/course-single" className="menu-link">
                  Master of Pharmacy (M Pharm)
                </Link>
                <Link to="/course-single" className="menu-link">
                  Master of Business Administration (MBA)
                </Link>
                <Link to="/course-single" className="menu-link">
                  Master of Science (Advanced Organic Chemistry)
                </Link>
                <Link to="/course-single" className="menu-link">
                  Master of Science (Biochemistry)
                </Link>
                <Link to="/course-single" className="menu-link">
                  Master of Science (Biotechnology)
                </Link>
                <Link to="/course-single" className="menu-link">
                  Master of Science (Microbiology)
                </Link>
                <Link to="/course-single" className="menu-link">
                  Master of Science (Physics)
                </Link>
                <Link to="/course-single" className="menu-link">
                  Master of Physiotherapy (MPT)
                </Link>
                <Link to="/course-single" className="menu-link">
                  Master of Science (Nursing)
                </Link>
                <Link to="/course-single" className="menu-link">
                  Master of Science (Medical Imaging Teachnology)
                </Link>
              </div>
            </div>
            <div className="menu-div border-left">
              <h5 className="menu-head">Information You May Need!!!</h5>
              <div className="menu-items">
                <a
                  href="https://charusat.ac.in/Downloads/Academic%20Calenders"
                  className="menu-link"
                >
                  Academic Calender
                </a>
                <a href="" className="menu-link">
                  Academic Services
                </a>
                <Link to="/cdpc" className="menu-link">
                  Career Development and Placements
                </Link>
                <a href="" className="menu-link">
                  Distinguished Lecture Series
                </a>
                <Link to="/edic" className="menu-link">
                  Entrepreneurship and Innovations
                </Link>
                <a href="#" className="menu-link">
                  Endowment Chairs
                </a>
                <a href="#" className="menu-link">
                  Initiatives
                </a>
                <a
                  href="https://scpit.knimbus.com/user#/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="menu-link"
                >
                  Knowledge Resource Center
                </a>
                <a href="" className="menu-link">
                  Code of Conduct
                </a>
                <a href="" className="menu-link">
                  Academic Regulations
                </a>
              </div>
            </div>
          </div>

          <div
            className="menu"
            id="Admission"
            onMouseOver={() => {
              document.getElementById("Admission").style.display = "grid";
            }}
            onMouseOut={() => {
              document.getElementById("Admission").style.display = "none";
            }}
          >
            <div className="menu-div">
              <h5 className="menu-head">National</h5>
              <div className="menu-items">
                <a
                  href="https://admission2023.charusat.ac.in/"
                  className="menu-link"
                >
                  Apply Now
                </a>
                <a
                  href="https://charusat.ac.in/admission/doc/AdmissionsEligibility.pdf"
                  target="_blank"
                  className="menu-link"
                  rel="noopener noreferrer"
                >
                  Eligibility Criteria
                </a>
                <a
                  href="https://charusat.ac.in/files/CHARUSAT%20Admission%20FAQ%2004-06-2022.pdf"
                  className="menu-link"
                >
                  Fees
                </a>
                <a href="#" className="menu-link">
                  <i
                    class="icofont-brand-whatsapp"
                    style={{ color: "#3db166" }}
                  ></i>{" "}
                  +91 8905500500
                </a>
              </div>
            </div>
            <div className="menu-div border-left">
              <h5 className="menu-head">International</h5>
              <div className="menu-items">
                <a
                  href="https://admission2023.charusat.ac.in/"
                  className="menu-link"
                >
                  Apply Now
                </a>
                <a
                  href="https://charusat.ac.in/international/Eligibility_criteria.pdf"
                  target="_blank"
                  className="menu-link"
                >
                  Eligibility Criteria
                </a>
                <a
                  href="https://charusat.ac.in/international/International_Fee.pdf"
                  className="menu-link"
                >
                  Fees
                </a>
                <a href="#" className="menu-link">
                  <i
                    class="icofont-brand-whatsapp"
                    style={{ color: "#3db166" }}
                  ></i>{" "}
                  +91 9173701614
                </a>
              </div>
            </div>
            <div className="menu-div border-left">
              <h5 className="menu-head">Other</h5>
              <div className="menu-items">
                <a
                  href="https://charusat-admissions.extraaedge.com/"
                  className="menu-link"
                >
                  Admission Login
                </a>
                <Link to="/admission-reprentatives" className="menu-link">
                  Have a query? Contact Admission Representatives
                </Link>
                <Link to="/coming-soon" className="menu-link">
                  Need Personal Guidance!!! Talk to us
                </Link>
                <a
                  href="https://www.charusat.ac.in/documents/pdfs/research/PGSF.pdf"
                  className="menu-link"
                >
                  Fellowship
                </a>
                <Link to="/scholarship" className="menu-link">
                  Scholarship
                </Link>
                <Link to="/transport" className="menu-link">
                  Transportation
                </Link>
                <a
                  href="https://www.charusat.ac.in/files/CHARUSAT%20Admission%20FAQ%2004-06-2022.pdf"
                  className="menu-link"
                >
                  Frequently Asked Questions (FAQs)
                </a>
              </div>
            </div>
          </div>
          <div
            className="menu"
            id="IQAC"
            // onMouseOver={() => {
            //   document.getElementById("IQAC").style.display = "grid";
            // }}
            // onMouseOut={() => {
            //   document.getElementById("IQAC").style.display = "none";
            // }}
          >
            {/* <div className="menu-div">
              <div className="menu-d border-b">
                <h5 className="menu-head">Academic Calendars</h5>
                <div className="menu-items">
                  <a href="" className="menu-link">
                    2021-22
                  </a>
                  <a href="" className="menu-link">
                    2020-21
                  </a>
                  <a href="" className="menu-link">
                    2019-20
                  </a>
                </div>
              </div>

              <div className="menu-d">
                <h5 className="menu-head">Academic & Administrative Audit</h5>
                <div className="menu-items">
                  <a href="" className="menu-link">
                    AAA Process
                  </a>
                </div>
              </div>
            </div>
            <div className="menu-div border-left">
              <h5 className="menu-head">Undergraduate Studies</h5>
              <div className="menu-items">
                <a href="" className="menu-link">
                  17th IQAC Meeting Minutes
                </a>
                <a href="" className="menu-link">
                  16th IQAC Meeting Minutes
                </a>
                <a href="" className="menu-link">
                  15th IQAC Meeting Minutes
                </a>
                <a href="" className="menu-link">
                  14th IQAC Meeting Minutes
                </a>
                <a href="" className="menu-link">
                  13th IQAC Meeting Minutes
                </a>
                <a href="" className="menu-link">
                  12th IQAC Meeting Minutes
                </a>
                <a href="" className="menu-link">
                  11th IQAC Meeting Minutes
                </a>
                <a href="" className="menu-link">
                  10th IQAC Meeting Minutes
                </a>
                <a href="" className="menu-link">
                  9th IQAC Meeting Minutes
                </a>
                <a href="" className="menu-link">
                  8th IQAC Meeting Minutes
                </a>
              </div>
            </div>

            <div className="menu-div border-left">
              <div className="menu-d border-b">
                <h5 className="menu-head">Accreditation & Ranking</h5>
                <div className="menu-items"></div>
              </div>
              <div className="menu-d border-b">
                <h5 className="menu-head">Best Practices</h5>
                <div className="menu-items"></div>
              </div>
              <div className="menu-d border-b">
                <h5 className="menu-head">Institutional Distinctiveness</h5>
                <div className="menu-items"></div>
              </div>

              <div className="menu-d border-b">
                <h5 className="menu-head">Feedback on Curriculum</h5>
                <div className="menu-items"></div>
              </div>

              <div className="menu-d">
                <h5 className="menu-head">Student Satisfaction Survey</h5>
                <div className="menu-items">
                  <a href="" className="menu-link">
                    SSS Poster
                  </a>
                  <a href="" className="menu-link">
                    SSS Analysis
                  </a>
                </div>
              </div>
            </div> */}
          </div>
          <div
            className="menu"
            id="CampusLife"
            onMouseOver={() => {
              document.getElementById("CampusLife").style.display = "grid";
            }}
            onMouseOut={() => {
              document.getElementById("CampusLife").style.display = "none";
            }}
          >
            <div className="menu-div">
              <h5 className="menu-head">Activity & Events</h5>
              <div className="menu-items">
                <Link to="/coming-soon" className="menu-link">
                  NCC@CHARUSAT
                </Link>
                <Link to="/coming-soon" className="menu-link">
                  NSS@CHARUSAT
                </Link>
                <Link to="/coming-soon" className="menu-link">
                  Sports & Gym
                </Link>
                <Link to="/coming-soon" className="menu-link">
                  Student Activities & Events
                </Link>
                <Link to="/coming-soon" className="menu-link">
                  Student Clubs
                </Link>
              </div>
            </div>
            <div className="menu-div border-left">
              <h5 className="menu-head">Residencies & Amenities</h5>
              <div className="menu-items">
                <Link to="/hostels" className="menu-link">
                  Girl's Hostel
                </Link>
                <Link to="/coming-soon" className="menu-link">
                  Boy's Hostel
                </Link>
                <Link to="/coming-soon" className="menu-link">
                  Staff Quarters
                </Link>
                <Link to="/coming-soon" className="menu-link">
                  Food / Canteen
                </Link>
                <Link to="/coming-soon" className="menu-link">
                  Transportation
                </Link>
                <Link to="/coming-soon" className="menu-link">
                  Recreation
                </Link>
              </div>
            </div>
            <div className="menu-div border-left">
              <h5 className="menu-head">Student Helpline</h5>
              <div className="menu-items">
                <Link to="/coming-soon" className="menu-link">
                  Helpline Contacts
                </Link>
              </div>
            </div>
          </div>

          <div
            className="menu"
            id="Research"
            onMouseOver={() => {
              document.getElementById("Research").style.display = "grid";
            }}
            onMouseOut={() => {
              document.getElementById("Research").style.display = "none";
            }}
          >
            <div className="menu-div">
              <h5 className="menu-head">Initiatives</h5>
              <div className="menu-items">
                <Link to="/coming-soon" className="menu-link">
                  Laboratories
                </Link>
                <Link to="/coming-soon" className="menu-link">
                  CHARUSAT Journal
                </Link>
                <Link to="/coming-soon" className="menu-link">
                  Enterpreneurship Development & Incubation Cell (EDIC)
                </Link>
                <Link to="/coming-soon" className="menu-link">
                  Dr. K. C. Patel Research and Development Centre (KRADLE)
                </Link>
                <Link to="/coming-soon" className="menu-link">
                  International Center for Cosmology (ICC)
                </Link>
                <Link to="/coming-soon" className="menu-link">
                  IPR Cell
                </Link>
                <Link to="/research" className="menu-link">
                  Research Facilitation
                </Link>
                <Link to="/coming-soon" className="menu-link">
                  CHARUSAT Space Research Center
                </Link>
                <Link to="/coming-soon" className="menu-link">
                  Research Ethics Committee
                </Link>
              </div>
            </div>
            <div className="menu-div border-left">
              <h5 className="menu-head">Policies</h5>
              <div className="menu-items">
                <Link to="/coming-soon" className="menu-link">
                  Publications
                </Link>
                <Link to="/coming-soon" className="menu-link">
                  CHARUSAT Ph. D. Scholars’ Fellowship (CPSF)
                </Link>
                <Link to="/coming-soon" className="menu-link">
                  CHARUSAT Visitor Student Research Internship (CVSRI)
                </Link>
                <Link to="/coming-soon" className="menu-link">
                  Postgraduate Student Fellowship (PGSF)
                </Link>
                <Link to="/coming-soon" className="menu-link">
                  CHARUSAT SEED Grant for Research (CSGR)
                </Link>
                <Link to="/coming-soon" className="menu-link">
                  Research
                </Link>
                <Link to="/coming-soon" className="menu-link">
                  Research Paper Award
                </Link>
                <Link to="/coming-soon" className="menu-link">
                  Intellectual Property
                </Link>
                <Link to="/coming-soon" className="menu-link">
                  Plagiarism
                </Link>
                <Link to="/coming-soon" className="menu-link">
                  Patent, IPR and Royalty Sharing
                </Link>
                <Link to="/coming-soon" className="menu-link">
                  Consultancy
                </Link>
              </div>
            </div>
            <div className="menu-div border-left">
              <h5 className="menu-head">Outcomes</h5>
              <div className="menu-items">
                <Link to="/coming-soon" className="menu-link">
                  Publications
                </Link>
                <Link to="/coming-soon" className="menu-link">
                  Project Grants
                </Link>
                <Link to="/coming-soon" className="menu-link">
                  Patents
                </Link>
              </div>
            </div>
          </div>
          <div
            className="menu-4"
            id="KnowCHARUSAT"
            onMouseOver={() => {
              document.getElementById("KnowCHARUSAT").style.display = "grid";
            }}
            onMouseOut={() => {
              document.getElementById("KnowCHARUSAT").style.display = "none";
            }}
          >
            <div className="menu-div">
              <div className="menu-d border-b">
                <h5 className="menu-head">About University</h5>
                <div className="menu-items">
                  <Link to="/about" className="menu-link">
                    About University
                  </Link>
                  <Link to="/coming-soon" className="menu-link">
                    Vision
                  </Link>
                  <Link to="/coming-soon" className="menu-link">
                    Mission
                  </Link>
                  <Link to="/coming-soon" className="menu-link">
                    Torchbearers
                  </Link>
                  <Link to="/president-desk" className="menu-link">
                    From President's Desk
                  </Link>
                  <Link to="/provost-desk" className="menu-link">
                    From Provost's Desk
                  </Link>
                  <Link to="/coming-soon" className="menu-link">
                    Students' Reviews
                  </Link>
                  <Link to="/convocations" className="menu-link">
                    Convocations
                  </Link>
                </div>
              </div>

              <div className="menu-d">
                <h5 className="menu-head">Governing Members</h5>
                <div className="menu-items">
                  <Link to="/people" className="menu-link">
                    Governing Body
                  </Link>
                  <Link to="/people" className="menu-link">
                    Board of Management
                  </Link>
                  <Link to="/people" className="menu-link">
                    Deans, Principals & Heads
                  </Link>
                  <Link to="/people" className="menu-link">
                    University Officers
                  </Link>
                </div>
              </div>
            </div>
            <div className="menu-div border-left">
              <h5 className="menu-head">Centers & Cells</h5>
              <div className="menu-items">
                <Link to="/coming-soon" className="menu-link">
                  Anti-Ragging Committee
                </Link>
                <Link to="/coming-soon" className="menu-link">
                  Equal Opportunity Cell (EOC)
                </Link>
                <Link to="/coming-soon" className="menu-link">
                  Energy Conservation Cell (ECC)
                </Link>
                <Link to="/coming-soon" className="menu-link">
                  Grievance Redressal Cell (GRC)
                </Link>
                <Link to="/edic" className="menu-link">
                  Enterpreneurship Development & Incubation Cell (EDIC)
                </Link>
                <Link to="/coming-soon" className="menu-link">
                  University Industry Interaction Cell (UIIC)
                </Link>
                <Link to="/coming-soon" className="menu-link">
                  Womens' Development Cell (WDC)
                </Link>
                <Link to="/coming-soon" className="menu-link">
                  Pri. B I Patel Human Resource Development Center (HRDC)
                </Link>
                <Link to="/coming-soon" className="menu-link">
                  International Students' Cell (ISC)
                </Link>
                <Link to="/coming-soon" className="menu-link">
                  Cell for Prevention of Sexual Harassment (CPSH)
                </Link>
                {/* <a href="" className="menu-link">
                  Internal Quality Assurance Cell (IQAC)
                </a> */}
                <Link to="/coming-soon" className="menu-link">
                  Charusat Rural Education Development Program (CREDP)
                </Link>
                <Link to="/coming-soon" className="menu-link">
                  Student Wellness Programme (SWP)
                </Link>
              </div>
            </div>
            <div className="menu-div border-left">
              <h5 className="menu-head">Infrastructure & Resources</h5>
              <div className="menu-items">
                <Link to="/coming-soon" className="menu-link">
                  Auditoria & Lectures Halls
                </Link>
                <Link to="/coming-soon" className="menu-link">
                  Laboratories
                </Link>
                <Link to="/wincell" className="menu-link">
                  Data Center @ CHARUSAT - WINCELL
                </Link>
                <a
                  href="https://scpit.new.knimbus.com/user#/home"
                  className="menu-link"
                >
                  Knowledge Resource Center
                </a>
                <Link to="/coming-soon" className="menu-link">
                  Sports & Gym
                </Link>
                <Link to="/coming-soon" className="menu-link">
                  Herbal Garden
                </Link>
              </div>
            </div>

            {/*  */}
            <div className="menu-div border-left">
              <div className="menu-d border-b">
                <h5 className="menu-head">Visit</h5>
                <div className="menu-items">
                  <Link to="/coming-soon" className="menu-link">
                    360 Campus Tour
                  </Link>
                </div>
              </div>

              <div className="menu-d border-b">
                <h5 className="menu-head">Reach US</h5>
                <div className="menu-items">
                  <Link to="/contact-us" className="menu-link">
                    Connect with CHARUSAT
                  </Link>
                  <Link to="/coming-soon" className="menu-link">
                    Lodge Complaint
                  </Link>
                  <Link to="/coming-soon" className="menu-link">
                    Faculty & Staff Directory
                  </Link>
                </div>
              </div>
              <div className="menu-d">
                <h5 className="menu-head">Others</h5>
                <div className="menu-items">
                  <Link to="/coming-soon" className="menu-link">
                    Give & Support
                  </Link>
                  <Link to="/coming-soon" className="menu-link">
                    Reports
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <nav className="mobile-nav"></nav>
        </header>
        <Navbar bg="white" expand="lg" className="nav">
          <Container>
            <Navbar.Brand href="#home">
              <a href="/" class="charusat">
                CHARUSAT
              </a>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
