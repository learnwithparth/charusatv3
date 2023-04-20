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
        <header
          className="header"
          onClick={() => {
            document.getElementById("Academics").style.display = "none";
            document.getElementById("Admission").style.display = "none";
            // document.getElementById("CampusLife").style.display = "none";
            document.getElementById("Research").style.display = "none";
            document.getElementById("KnowCHARUSAT").style.display = "none";
          }}
        >
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
                  <a
                    href="http://172.16.11.116/LocalGuru/"
                    target="_blank"
                    className="menu-link"
                  >
                    NPTEL Resources
                  </a>
                </div>
              </div>

              <div className="menu-d ">
                <h5 className="menu-head">Other Programmes</h5>
                <div className="menu-items">
                  <Link to="/certification-courses" className="menu-link">
                    Certification & Audit Courses
                  </Link>
                  <Link to="./course-single" className="menu-link">
                    General Nursing & Midwifery (GNM)
                  </Link>
                  <Link to="./course-single" className="menu-link">
                    Post Graduation Diploma in Clinical Hypnosis (PGDCH)
                  </Link>
                  <a href="https://pgdcs.charusat.ac.in/" className="menu-link">
                    Post Graduation Diploma in Cyber Security (PGDCS)
                  </a>
                  <Link to="./course-single" className="menu-link">
                    Post Graduation Diploma in Medical Laboratory Technology
                    (PGDMLT)
                  </Link>
                </div>
              </div>
            </div>
            <div className="menu-div border-left">
              <h5 className="menu-head">Undergraduate Studies</h5>
              <div className="menu-items">
                <Link to="./course-single" className="menu-link">
                  B.Tech
                </Link>
                <Link to="./course-single" className="menu-link">
                  BCA
                </Link>
                <Link to="/course-single" className="menu-link">
                  B.Sc(IT)
                </Link>
                <Link to="/course-single" className="menu-link">
                  B Pharm (Bachelor of Pharmacy)
                </Link>
                <Link to="/course-single" className="menu-link">
                  BBA
                </Link>
                <Link to="/course-single" className="menu-link">
                  B.Sc(Biology)
                </Link>
                <Link to="/course-single" className="menu-link">
                  BPT(Bachelor of Physiotherapy)
                </Link>
                <Link to="/course-single" className="menu-link">
                  B.Sc(Nursing)
                </Link>
                <Link to="/course-single" className="menu-link">
                  Bachelor of Optometry (B Optom)
                </Link>
                <Link to="/course-single" className="menu-link">
                  B.Sc (Imaging Technology)
                </Link>
                <Link to="/course-single" className="menu-link">
                  B.Sc (Medical Technnology)
                </Link>
                <Link to="/course-single" className="menu-link">
                  B.Sc (Operation Theatre & Anesthesia Technology)
                </Link>
              </div>
            </div>
            <div className="menu-div border-left">
              <h5 className="menu-head">Postgraduate Studies</h5>
              <div className="menu-items">
                <Link to="/course-single" className="menu-link">
                  M.Tech
                </Link>
                <Link to="/course-single" className="menu-link">
                  MCA
                </Link>
                <Link to="/course-single" className="menu-link">
                  M.Sc(IT)
                </Link>
                <Link to="/course-single" className="menu-link">
                  M.Pharm
                </Link>
                <Link to="/course-single" className="menu-link">
                  MBA
                </Link>
                <Link to="/course-single" className="menu-link">
                  M.Sc (Advanced Organic Chemistry)
                </Link>
                <Link to="/course-single" className="menu-link">
                  M.Sc (Biochemistry)
                </Link>
                <Link to="/course-single" className="menu-link">
                  M.Sc (Biotechnology)
                </Link>
                <Link to="/course-single" className="menu-link">
                  M.Sc (Microbiology)
                </Link>
                <Link to="/course-single" className="menu-link">
                  M.Sc (Physics)
                </Link>
                <Link to="/course-single" className="menu-link">
                  MPT (Master of Physiotherapy)
                </Link>
                <Link to="/course-single" className="menu-link">
                  M.Sc (Nursing)
                </Link>
                <Link to="/course-single" className="menu-link">
                  M.Sc (Medical Imaging Teachnology)
                </Link>
              </div>
            </div>
            <div className="menu-div border-left">
              <div className="menu-d">
                <h5 className="menu-head">Ph D Programs</h5>
                <div className="menu-items">
                  <a
                    href="https://charusat.ac.in/files/PhD%20Regulations.pdf"
                    className="menu-link"
                  >
                    General Information
                  </a>
                </div>
              </div>
              <hr />
              <h5 className="menu-head">Information You May Need!!!</h5>
              <div className="menu-items">
                <a
                  href="https://charusat.ac.in/Downloads/Academic%20Calenders"
                  className="menu-link"
                >
                  Academic Calender
                </a>
                <Link to="./student-corner" className="menu-link">
                  Students' Corner
                </Link>
                <Link to="./cdpc" className="menu-link">
                  Career Development and Placements
                </Link>
                {/* <a href="" className="menu-link">
                  Distinguished Lecture Series
                </a> */}
                <Link to="/edic" className="menu-link">
                  Entrepreneurship and Innovations
                </Link>

                <Link
                  to="./student-development-initiatives"
                  className="menu-link"
                >
                  Initiatives
                </Link>
                <Link to="./library" className="menu-link">
                  Knowledge Resource Center
                </Link>
                <Link to="./code-of-conduct" className="menu-link">
                  Code of Conduct
                </Link>
                {/* <a href="" className="menu-link">
                  Academic Regulations
                </a> */}
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
                  href="https://drive.google.com/file/d/14qe_BKwzOQfK8M-yjN8YnYMAH4RcKHSS/view?usp=share_link"
                  className="menu-link"
                >
                  Fees
                </a>
                <a href="#" className="menu-link">
                  <i
                    class="icofont-brand-whatsapp"
                    style={{ color: "#3db166" }}
                  ></i>{" "}
                  +91 9825961830
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
                  href="https://admission2023.charusat.ac.in/"
                  className="menu-link"
                >
                  Admission Login
                </a>
                <Link to="/admission-reprentatives" className="menu-link">
                  Have a query? Contact Admission Representatives
                </Link>

                <a
                  href="https://charusat.ac.in/files/UGSF%20Application%20form.pdf"
                  className="menu-link"
                >
                  Undergraduate Student Fellowship
                </a>
                <a
                  href="https://charusat.ac.in/documents/pdfs/research/PGSF.pdf"
                  className="menu-link"
                >
                  Postgraduate Student Fellowship
                </a>
                <a
                  href="https://charusat.ac.in/documents/pdfs/research/PDF%20Policy%20CHARUSAT.pdf"
                  className="menu-link"
                >
                  Ph. D. Scholars’ Fellowship
                </a>
                <a
                  href="https://charusat.ac.in/documents/pdfs/research/PDF%20Policy%20CHARUSAT.pdf"
                  className="menu-link"
                >
                  Post Doctoral Fellowship Programme
                </a>
                <a
                  href="https://www.charusat.ac.in/admission/scholarship.html"
                  className="menu-link"
                >
                  Scholarship
                </a>
                <Link to="/hostels" className="menu-link">
                  Hostels
                </Link>
                <Link to="./transport" className="menu-link">
                  Transportation
                </Link>
                {/* <a
                  href="https://www.charusat.ac.in/files/CHARUSAT%20Admission%20FAQ%2004-06-2022.pdf"
                  className="menu-link"
                >
                  Frequently Asked Questions (FAQs)
                </a> */}
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
          {/* <div
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
          </div> */}

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
                <a
                  href="https://youtu.be/Og4NMqI3q5M"
                  target="_blank"
                  className="menu-link"
                >
                  Laboratories
                </a>
                <a
                  href="https://charusat.ac.in/charusatjournal/"
                  className="menu-link"
                >
                  CHARUSAT Journal
                </a>
                <Link to="/edic" className="menu-link">
                  Enterpreneurship Development & Incubation Cell (EDIC)
                </Link>
                <a href="http://kradle.charusat.ac.in/" className="menu-link">
                  Dr. K. C. Patel Research and Development Centre (KRADLE)
                </a>
                <a href="http://icccharusat.com/" className="menu-link">
                  International Center for Cosmology (ICC)
                </a>
                <Link to="/ipr" className="menu-link">
                  IPR Cell
                </Link>
                <Link to="./research" className="menu-link">
                  Research Facilitation
                </Link>
                <Link to="./csrtc" className="menu-link">
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
                <a
                  href="https://charusat.ac.in/documents/pdfs/research/PDF%20Policy%20CHARUSAT.pdf"
                  className="menu-link"
                >
                  Post Doctoral Fellowship Programme
                </a>

                <a
                  href="https://charusat.ac.in/documents/pdfs/research/CPSF.pdf"
                  className="menu-link"
                >
                  Ph. D. Scholars’ Fellowship (CPSF)
                </a>
                <a
                  href="https://charusat.ac.in/documents/pdfs/research/CVSRI.pdf"
                  className="menu-link"
                >
                  Visitor Student Research Internship (CVSRI)
                </a>
                <a
                  href="https://charusat.ac.in/documents/pdfs/research/PGSF.pdf"
                  className="menu-link" //charusat.ac.in/documents/pdfs/research/PGSF.pdf
                >
                  Postgraduate Student Fellowship (PGSF)
                </a>
                <a
                  href="https://charusat.ac.in/documents/pdfs/research/7.%20Policy%20for%20CHARUSAT%20SEED%20Grant%20for%20Research.pdf"
                  className="menu-link"
                >
                  SEED Grant for Research
                </a>
                <a
                  href="https://charusat.ac.in/documents/pdfs/research/1.%20CHARUSAT%20Research%20Policy.pdf"
                  className="menu-link"
                >
                  Research
                </a>
                <a
                  href="https://charusat.ac.in/documents/pdfs/research/8.%20Research%20Paper%20Award%20Policy%202018.pdf"
                  className="menu-link"
                >
                  Research Paper Award
                </a>

                <a
                  href="https://charusat.ac.in/documents/pdfs/research/06.Plagiarism%20Policy.pdf"
                  className="menu-link"
                >
                  Plagiarism
                </a>
                <a
                  href="https://charusat.ac.in/documents/pdfs/research/05.INTELLECTUAL%20PROPERTY%20POLICY.pdf"
                  className="menu-link"
                >
                  Patent, IPR and Royalty Sharing
                </a>
                <a
                  href="https://drive.google.com/file/d/1CzmhA6azuxlWGMwdaJPd6DNIv5e5Vyc9/view?usp=sharing"
                  className="menu-link"
                >
                  Consultancy
                </a>
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
              <div className="menu-d ">
                <h5 className="menu-head">About University</h5>
                <div className="menu-items">
                  {/* <Link to="/about" className="menu-link">
                    About University
                  </Link> */}
                  <Link to="/about" className="menu-link">
                    Vision
                  </Link>
                  <Link to="/about" className="menu-link">
                    Mission
                  </Link>
                  <Link to="/about" className="menu-link">
                    Torchbearers
                  </Link>
                  <Link to="/president-desk" className="menu-link">
                    From President's Desk
                  </Link>
                  <Link to="/provost-desk" className="menu-link">
                    From Provost's Desk
                  </Link>
                  {/* <Link to="/coming-soon" className="menu-link">
                    Students' Reviews
                  </Link> */}
                  <Link to="/convocations" className="menu-link">
                    Convocations
                  </Link>
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

              {/* <div className="menu-d"></div> */}
            </div>
            <div className="menu-div border-left">
              <h5 className="menu-head">Centers & Cells</h5>
              <div className="menu-items">
                <a
                  href="https://charusat.ac.in/centers_and_cells.php#1554362166908-0b671f03-4fa1"
                  className="menu-link"
                >
                  Anti-Ragging Committee
                </a>
                <a
                  href="https://charusat.ac.in/centers_and_cells.php#1554362045144-400387d3-6442"
                  className="menu-link"
                >
                  Equal Opportunity Cell
                </a>
                <a
                  href="https://charusat.ac.in/centers_and_cells.php#1554362194011-f9e0c138-01d9"
                  className="menu-link"
                >
                  Energy Conservation Cell
                </a>
                <Link
                  href="https://charusat.ac.in/centers_and_cells.php#1554362110799-38894aa1-5bd0"
                  className="menu-link"
                >
                  Grievance Redressal Cell
                </Link>
                <Link to="/edic" className="menu-link">
                  Enterpreneurship Development & Incubation Cell
                </Link>
                <Link
                  to="https://charusat.ac.in/centers_and_cells.php#1543642618187-ee214d9c-cbcd"
                  className="menu-link"
                >
                  University Industry Interaction Cell
                </Link>
                <a
                  href="https://charusat.ac.in/centers_and_cells.php#1554362037016-55a33e41-7d90"
                  className="menu-link"
                >
                  Womens' Development Cell
                </a>
                <a
                  href="https://charusat.ac.in/centers_and_cells.php#1543642622193-b288c9ef-6e1a"
                  className="menu-link"
                >
                  Pri. B I Patel Human Resource Development Center
                </a>
                <a href="https://isc.charusat.ac.in/" className="menu-link">
                  International Students' Cell
                </a>
                <a
                  href="https://charusat.ac.in/centers_and_cells.php#1554362142242-fdc7c869-c0cf"
                  className="menu-link"
                >
                  Cell for Prevention of Sexual Harassment
                </a>
                {/* <a href="" className="menu-link">
                  Internal Quality Assurance Cell (IQAC)
                </a> */}
                <a
                  href="https://charusat.ac.in/centers_and_cells.php#1543642621602-5e7edef6-54cb"
                  className="menu-link"
                >
                  Charusat Rural Education Development Program
                </a>
                <a
                  href="https://charusat.ac.in/wellness_program.php"
                  className="menu-link"
                >
                  Student Wellness Programme
                </a>
                <Link to="/wincell" className="menu-link">
                  Data Center @ CHARUSAT - WINCELL
                </Link>
              </div>
            </div>
            <div className="menu-div border-left">
              <h5 className="menu-head">Infrastructure & Resources</h5>
              <div className="menu-items">
                {/* <Link to="/coming-soon" className="menu-link">
                  Auditoria & Lectures Halls
                </Link> */}
                <Link to="/coming-soon" className="menu-link">
                  Laboratories
                </Link>

                <a
                  href="https://scpit.new.knimbus.com/user#/home"
                  className="menu-link"
                >
                  Knowledge Resource Center
                </a>
                {/* <Link to="/coming-soon" className="menu-link">
                  Sports & Gym
                </Link> */}
                <Link to="/coming-soon" className="menu-link">
                  Herbal Garden
                </Link>
              </div>
            </div>

            {/*  */}
            <div className="menu-div border-left">
              {/* <div className="menu-d border-b">
                <h5 className="menu-head">Visit</h5>
                <div className="menu-items">
                  <Link to="/coming-soon" className="menu-link">
                    360 Campus Tour
                  </Link>
                </div>
              </div> */}

              {/* <div className="menu-d border-b">
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
              </div> */}
              <div className="menu-d">
                <h5 className="menu-head">Others</h5>
                <div className="menu-items">
                  <Link to="/donation" className="menu-link">
                    Give & Support
                  </Link>
                  <a
                    href="https://www.charusat.ac.in/documents-access/"
                    target="_blank"
                    className="menu-link"
                  >
                    Finance Reports
                  </a>

                  <a
                    href="/files/CHARUSAT_12thAnnualReport.pdf"
                    target="_blank"
                    className="menu-link"
                  >
                    Annual Report 2020-21
                  </a>

                  <a
                    href="/files/CHARUSAT_11thAnnualReport.pdf"
                    target="_blank"
                    className="menu-link"
                  >
                    Annual Report 2019-20
                  </a>

                  <a
                    href="/files/CHARUSAT_10thAnnualReport.pdf"
                    target="_blank"
                    className="menu-link"
                  >
                    Annual Report 2018-19
                  </a>
                  <a
                    href="/files/CHARUSAT_9thAnnualReport.pdf"
                    target="_blank"
                    className="menu-link"
                  >
                    Annual Report 2017-18{" "}
                  </a>

                  <a
                    href="/files/CHARUSAT_8thAnnualReport.pdf"
                    target="_blank"
                    className="menu-link"
                  >
                    Annual Report 2016-17
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
