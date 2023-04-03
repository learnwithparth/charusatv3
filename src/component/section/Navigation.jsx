import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
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
              <a href="/charusatv3/home" class="charusat">
                CHARUSAT
              </a>
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
                <li
                  className="link"
                  onMouseOver={() => {
                    document.getElementById("IQAC").style.display = "grid";
                  }}
                  onMouseOut={() => {
                    document.getElementById("IQAC").style.display = "none";
                  }}
                >
                  <a id="IQAC-link" href="">
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
                  <a href="./coming-soon" className="menu-link">
                    Post Graduation Diploma in Medical Laboratory Technology
                    (PGDMLT)
                  </a>
                </div>
              </div>
              <div className="menu-d">
                <h5 className="menu-head">Ph D Programs</h5>
                <div className="menu-items">
                  <a href="./coming-soon" className="menu-link">
                    General Information
                  </a>
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
                <a href="" className="menu-link">
                  Master of Technology (M Tech)
                </a>
                <a href="" className="menu-link">
                  Master of Computer Applications (MCA)
                </a>
                <a href="" className="menu-link">
                  Master of Science (Information Technology)
                </a>
                <a href="" className="menu-link">
                  Master of Pharmacy (M Pharm)
                </a>
                <a href="" className="menu-link">
                  Master of Business Administration (MBA)
                </a>
                <a href="" className="menu-link">
                  Master of Science (Advanced Organic Chemistry)
                </a>
                <a href="" className="menu-link">
                  Master of Science (Biochemistry)
                </a>
                <a href="" className="menu-link">
                  Master of Science (Biotechnology)
                </a>
                <a href="" className="menu-link">
                  Master of Science (Microbiology)
                </a>
                <a href="" className="menu-link">
                  Master of Science (Physics)
                </a>
                <a href="" className="menu-link">
                  Master of Physiotherapy (MPT)
                </a>
                <a href="" className="menu-link">
                  Master of Science (Nursing)
                </a>
                <a href="" className="menu-link">
                  Master of Science (Nursing)
                </a>
                <a href="" className="menu-link">
                  Master of Science (Medical Imaging Teachnology)
                </a>
              </div>
            </div>
            <div className="menu-div border-left">
              <h5 className="menu-head">Information You May Need!!!</h5>
              <div className="menu-items">
                <a href="" className="menu-link">
                  Academic Calender
                </a>
                <a href="" className="menu-link">
                  Academic Services
                </a>
                <a href="" className="menu-link">
                  Career Development and Placements
                </a>
                <a href="" className="menu-link">
                  Distinguished Lecture Series
                </a>
                <a href="" className="menu-link">
                  Entrepreneurship and Innovations
                </a>
                <a href="" className="menu-link">
                  Endowment Chairs
                </a>
                <a href="" className="menu-link">
                  Initiatives
                </a>
                <a href="" className="menu-link">
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
                <a href="" className="menu-link">
                  Apply Now
                </a>
                <a href="" className="menu-link">
                  Eligibility Criteria
                </a>
                <a href="" className="menu-link">
                  Fees
                </a>
                <a href="" className="menu-link">
                  +91 8905500500
                </a>
              </div>
            </div>
            <div className="menu-div border-left">
              <h5 className="menu-head">International</h5>
              <div className="menu-items">
                <a href="" className="menu-link">
                  Apply Now
                </a>
                <a href="" className="menu-link">
                  Eligibility Criteria
                </a>
                <a href="" className="menu-link">
                  Fees
                </a>
                <a href="" className="menu-link">
                  +91 9173701614
                </a>
              </div>
            </div>
            <div className="menu-div border-left">
              <h5 className="menu-head">Other</h5>
              <div className="menu-items">
                <a href="" className="menu-link">
                  Admission Login
                </a>
                <a href="" className="menu-link">
                  Have a query? Contact Admission Representatives
                </a>
                <a href="" className="menu-link">
                  Need Personal Guidance!!! Talk to us
                </a>
                <a href="" className="menu-link">
                  Fellowship
                </a>
                <a href="" className="menu-link">
                  Scholarship
                </a>
                <a href="" className="menu-link">
                  Transportation
                </a>
                <a href="" className="menu-link">
                  Frequently Asked Questions (FAQs)
                </a>
              </div>
            </div>
          </div>
          <div
            className="menu"
            id="IQAC"
            onMouseOver={() => {
              document.getElementById("IQAC").style.display = "grid";
            }}
            onMouseOut={() => {
              document.getElementById("IQAC").style.display = "none";
            }}
          >
            <div className="menu-div">
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
            </div>
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
                <a href="" className="menu-link">
                  NCC@CHARUSAT
                </a>
                <a href="" className="menu-link">
                  NSS@CHARUSAT
                </a>
                <a href="" className="menu-link">
                  Sports & Gym
                </a>
                <a href="" className="menu-link">
                  Student Activities & Events
                </a>
                <a href="" className="menu-link">
                  Student Clubs
                </a>
              </div>
            </div>
            <div className="menu-div border-left">
              <h5 className="menu-head">Residencies & Amenities</h5>
              <div className="menu-items">
                <a href="" className="menu-link">
                  Girl's Hostel
                </a>
                <a href="" className="menu-link">
                  Boy's Hostel
                </a>
                <a href="" className="menu-link">
                  Staff Quarters
                </a>
                <a href="" className="menu-link">
                  Food
                </a>
                <a href="" className="menu-link">
                  Transportation
                </a>
                <a href="" className="menu-link">
                  Recreation
                </a>
              </div>
            </div>
            <div className="menu-div border-left">
              <h5 className="menu-head">Student Helpline</h5>
              <div className="menu-items">
                <a href="" className="menu-link">
                  Helpline Contacts
                </a>
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
                <a href="" className="menu-link">
                  Laboratories
                </a>
                <a href="" className="menu-link">
                  CHARUSAT Journal
                </a>
                <a href="" className="menu-link">
                  Enterpreneurship Development & Incubation Cell (EDIC)
                </a>
                <a href="" className="menu-link">
                  Dr. K. C. Patel Research and Development Centre (KRADLE)
                </a>
                <a href="" className="menu-link">
                  International Center for Cosmology (ICC)
                </a>
                <a href="" className="menu-link">
                  IPR Cell
                </a>
                <a href="" className="menu-link">
                  Research Facilitation
                </a>
                <a href="" className="menu-link">
                  CHARUSAT Space Research Center
                </a>
                <a href="" className="menu-link">
                  Research Ethics Committee
                </a>
              </div>
            </div>
            <div className="menu-div border-left">
              <h5 className="menu-head">Policies</h5>
              <div className="menu-items">
                <a href="" className="menu-link">
                  Publications
                </a>
                <a href="" className="menu-link">
                  CHARUSAT Ph. D. Scholars’ Fellowship (CPSF)
                </a>
                <a href="" className="menu-link">
                  CHARUSAT Visitor Student Research Internship (CVSRI)
                </a>
                <a href="" className="menu-link">
                  Postgraduate Student Fellowship (PGSF)
                </a>
                <a href="" className="menu-link">
                  CHARUSAT SEED Grant for Research (CSGR)
                </a>
                <a href="" className="menu-link">
                  Research
                </a>
                <a href="" className="menu-link">
                  Research Paper Award
                </a>
                <a href="" className="menu-link">
                  Intellectual Property
                </a>
                <a href="" className="menu-link">
                  Plagiarism
                </a>
                <a href="" className="menu-link">
                  Patent, IPR and Royalty Sharing
                </a>
                <a href="" className="menu-link">
                  Consultancy
                </a>
              </div>
            </div>
            <div className="menu-div border-left">
              <h5 className="menu-head">Outcomes</h5>
              <div className="menu-items">
                <a href="" className="menu-link">
                  Publications
                </a>
                <a href="" className="menu-link">
                  Project Grants
                </a>
                <a href="" className="menu-link">
                  Patents
                </a>
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
                  <a href="" className="menu-link">
                    About University
                  </a>
                  <a href="" className="menu-link">
                    Vision
                  </a>
                  <a href="" className="menu-link">
                    Mission
                  </a>
                  <a href="" className="menu-link">
                    Torchbearers
                  </a>
                  <a href="" className="menu-link">
                    From President's Desk
                  </a>
                  <a href="" className="menu-link">
                    From President's Desk
                  </a>
                  <a href="" className="menu-link">
                    Students' Reviews
                  </a>
                  <a href="" className="menu-link">
                    Convocations
                  </a>
                </div>
              </div>

              <div className="menu-d">
                <h5 className="menu-head">Governing Members</h5>
                <div className="menu-items">
                  <a href="" className="menu-link">
                    Governing Body
                  </a>
                  <a href="" className="menu-link">
                    Board of Management
                  </a>
                  <a href="" className="menu-link">
                    Deans, Principals & Heads
                  </a>
                  <a href="" className="menu-link">
                    University Officers
                  </a>
                </div>
              </div>
            </div>
            <div className="menu-div border-left">
              <h5 className="menu-head">Centers & Cells</h5>
              <div className="menu-items">
                <a href="" className="menu-link">
                  Anti-Ragging Committee
                </a>
                <a href="" className="menu-link">
                  Equal Opportunity Cell (EOC)
                </a>
                <a href="" className="menu-link">
                  Energy Conservation Cell (ECC)
                </a>
                <a href="" className="menu-link">
                  Grievance Redressal Cell (GRC)
                </a>
                <a href="" className="menu-link">
                  Enterpreneurship Development & Incubation Cell (EDIC)
                </a>
                <a href="" className="menu-link">
                  University Industry Interaction Cell (UIIC)
                </a>
                <a href="" className="menu-link">
                  Womens' Development Cell (WDC)
                </a>
                <a href="" className="menu-link">
                  Pri. B I Patel Human Resource Development Center (HRDC)
                </a>
                <a href="" className="menu-link">
                  International Students' Cell (ISC)
                </a>
                <a href="" className="menu-link">
                  Cell for Prevention of Sexual Harassment (CPSH)
                </a>
                <a href="" className="menu-link">
                  Internal Quality Assurance Cell (IQAC)
                </a>
                <a href="" className="menu-link">
                  Charusat Rural Education Development Program (CREDP)
                </a>
                <a href="" className="menu-link">
                  Student Wellness Programme (SWP)
                </a>
              </div>
            </div>
            <div className="menu-div border-left">
              <h5 className="menu-head">Infrastructure & Resources</h5>
              <div className="menu-items">
                <a href="" className="menu-link">
                  Auditoria & Lectures Halls
                </a>
                <a href="" className="menu-link">
                  Laboratories
                </a>
                <a href="" className="menu-link">
                  Data Center @ CHARUSAT - WINCELL
                </a>
                <a href="" className="menu-link">
                  Knowledge Resource Center
                </a>
                <a href="" className="menu-link">
                  Sports & Gym
                </a>
                <a href="" className="menu-link">
                  Herbal Garden
                </a>
              </div>
            </div>

            {/*  */}
            <div className="menu-div border-left">
              <div className="menu-d border-b">
                <h5 className="menu-head">Visit</h5>
                <div className="menu-items">
                  <a href="" className="menu-link">
                    360 Campus Tour
                  </a>
                </div>
              </div>

              <div className="menu-d border-b">
                <h5 className="menu-head">Reach US</h5>
                <div className="menu-items">
                  <a href="" className="menu-link">
                    Connect with CHARUSAT
                  </a>
                  <a href="" className="menu-link">
                    Lodge Complaint
                  </a>
                  <a href="" className="menu-link">
                    Faculty & Staff Directory
                  </a>
                </div>
              </div>
              <div className="menu-d">
                <h5 className="menu-head">Others</h5>
                <div className="menu-items">
                  <a href="" className="menu-link">
                    Give & Support
                  </a>
                  <a href="" className="menu-link">
                    Reports
                  </a>
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
