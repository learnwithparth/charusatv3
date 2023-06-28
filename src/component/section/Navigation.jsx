import React, { useEffect, useState } from "react";
import { HashRouter, Link, Redirect } from "react-router-dom";
import Container from "react-bootstrap/Container";
import AdmissionEligibilityCriteria from "../../files/navigation/AdmissionsEligibility.pdf";
import EligibilityCriteria from "../../files/navigation/Eligibility_criteria.pdf";
import InterNationalFees from "../../files/navigation/International_Fee.pdf";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.css";
import "../../assets/css/navigation.css";
import Dropdown from "react-bootstrap/Dropdown";
import Scroll from "react-scroll";
import logo from "../../files/logo.webp";
const ScrollLink = Scroll.ScrollLink;

const Header = () => {
  const [activeLink, setActiveLink] = useState("");

  return (
    <>
      <div className="bg-white">
        <header
          className="container"
          style={{
            shadow: "none",
          }}
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
              <Link to="./home" class="charusat-main">
                <img
                  src={logo}
                  alt="CHARUSAT"
                  style={{
                    width: "17rem",
                  }}
                />
              </Link>
            </div>
            <div className="nav-links">
              <ul className={`links `}>
                <li
                  className={`link green-text`}
                  onMouseOver={() => {
                    document.getElementById("Academics").style.display = "grid";
                    setActiveLink("Academics");
                  }}
                  onMouseOut={() => {
                    document.getElementById("Academics").style.display = "none";
                  }}
                >
                  <a
                    href=""
                    className={`${
                      activeLink === "Academics" ? "green-text" : "green"
                    }`}
                  >
                    Academics
                  </a>
                </li>
                <li
                  className="link"
                  onMouseOver={() => {
                    document.getElementById("Admission").style.display = "grid";
                    setActiveLink("Admission");
                  }}
                  onMouseOut={() => {
                    document.getElementById("Admission").style.display = "none";
                  }}
                >
                  <a
                    href=""
                    className={`${
                      activeLink === "Admission" ? "green-text" : "green"
                    }`}
                  >
                    Admission
                  </a>
                </li>

                <li
                  className="link"
                  onMouseOver={() => {
                    document.getElementById("Research").style.display = "grid";
                    setActiveLink("Research");
                  }}
                  onMouseOut={() => {
                    document.getElementById("Research").style.display = "none";
                  }}
                >
                  <a
                    id="Research-link"
                    href=""
                    className={`${
                      activeLink === "Research" ? "green-text" : "green"
                    }`}
                  >
                    Research
                  </a>
                </li>
                <li
                  className="link"
                  onMouseOver={() => {
                    document.getElementById("IQAC").style.display = "grid";
                    setActiveLink("IQAC");
                  }}
                  onMouseOut={() => {
                    document.getElementById("IQAC").style.display = "none";
                  }}
                >
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
                    setActiveLink("KnowCHARUSAT");
                  }}
                  onMouseOut={() => {
                    document.getElementById("KnowCHARUSAT").style.display =
                      "none";
                  }}
                >
                  <a
                    id="KnowCHARUSAT-link"
                    href=""
                    className={`${
                      activeLink === "KnowCHARUSAT" ? "green-text" : "green"
                    }`}
                  >
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
              setActiveLink("Academics");
            }}
            onMouseOut={() => {
              document.getElementById("Academics").style.display = "none";
              setActiveLink("");
            }}
          >
            <div className="menu-div">
              <div className="menu-d border-b">
                <h5 className="menu-head">Learn Online</h5>
                <div className="menu-items">
                  <a
                    href="https://charuvidya.charusat.ac.in"
                    className="menu-link"
                  >
                    CharuVidya
                  </a>
                  {/* <a
                    href="http://172.16.11.116/LocalGuru/"
                    target="_blank"
                    className="menu-link"
                  >
                    NPTEL Resources (Intranet)
                  </a> */}
                </div>
              </div>

              <div className="menu-d ">
                <h5 className="menu-head">Other Programmes</h5>
                <div className="menu-items">
                  <Link to="./certification-courses" className="menu-link">
                    Certification & Audit Courses
                  </Link>
                  <Link to="./course-single#GNM" className="menu-link">
                    General Nursing & Midwifery (GNM)
                  </Link>
                  <Link to="./course-single#6303" className="menu-link">
                    Post Graduation Diploma in Clinical Hypnosis (PGDCH)
                  </Link>
                  <Link to="./course-single#6304" className="menu-link">
                    Post Graduation Diploma in Cyber Security (PGDCS)
                  </Link>
                  <Link to="./course-single#PGDMLT" className="menu-link">
                    Post Graduation Diploma in Medical Laboratory Technology
                    (PGDMLT)
                  </Link>
                </div>
              </div>
            </div>
            <div className="menu-div border-left">
              <h5 className="menu-head">Undergraduate Studies</h5>
              <div className="menu-items">
                <Link to="./course-single#1406" className="menu-link">
                  B.Tech
                </Link>
                <Link to="./course-single#2401" className="menu-link">
                  BCA
                </Link>
                <Link to="./course-single#2402" className="menu-link">
                  B.Sc(IT)
                </Link>
                <Link to="./course-single#3401" className="menu-link">
                  B.Pharm (Bachelor of Pharmacy)
                </Link>
                <Link to="./course-single#4401" className="menu-link">
                  BBA
                </Link>
                <Link to="./course-single#5401" className="menu-link">
                  B.Sc(Biology)
                </Link>
                <Link to="./course-single#6401" className="menu-link">
                  BPT(Bachelor of Physiotherapy)
                </Link>
                <Link to="./course-single#6402" className="menu-link">
                  B.Sc(Nursing)
                </Link>
                <Link to="./course-single#6405" className="menu-link">
                  Bachelor of Optometry (B.Optom.)
                </Link>
                <Link to="./course-single#6403" className="menu-link">
                  B.Sc (Imaging Technology)
                </Link>
                <Link to="./course-single#6406" className="menu-link">
                  B.Sc (Medical Technnology)
                </Link>
                <Link to="./course-single#6404" className="menu-link">
                  B.Sc (Operation Theatre & Anesthesia Technology)
                </Link>

                <Link to="./course-single#5401" className="menu-link">
                  B.Sc (Microbiology, Biotechnology, Biochemistry)
                </Link>
              </div>
            </div>
            <div className="menu-div border-left">
              <h5 className="menu-head">Postgraduate Studies</h5>
              <div className="menu-items">
                <Link to="./course-single#1406" className="menu-link">
                  M.Tech
                </Link>
                <Link to="./course-single#2501" className="menu-link">
                  MCA
                </Link>
                <Link to="./course-single#2502" className="menu-link">
                  M.Sc(IT)
                </Link>
                <Link to="./course-single#3501" className="menu-link">
                  M.Pharm
                </Link>
                <Link to="./course-single#4501" className="menu-link">
                  MBA
                </Link>
                <Link to="./course-single#5505" className="menu-link">
                  M.Sc (Advanced Organic Chemistry)
                </Link>
                <Link to="./course-single#5502" className="menu-link">
                  M.Sc (Biochemistry)
                </Link>
                <Link to="./course-single#5501" className="menu-link">
                  M.Sc (Biotechnology)
                </Link>
                <Link to="./course-single#5503" className="menu-link">
                  M.Sc (Microbiology)
                </Link>
                <Link to="./course-single#5506" className="menu-link">
                  M.Sc (Physics)
                </Link>
                <Link to="./course-single#6501" className="menu-link">
                  MPT (Master of Physiotherapy)
                </Link>
                <Link to="./course-single#6510" className="menu-link">
                  M.Sc (Nursing)
                </Link>
                <Link to="./course-single#6514" className="menu-link">
                  M.Sc (Medical Imaging Technology)
                </Link>
                <Link to="./course-single#6513" className="menu-link">
                  M.Sc (Medical Laboratory Technology)
                </Link>
                <Link to="./course-single#6513" className="menu-link">
                  M.Sc (Maths)
                </Link>
              </div>
            </div>
            <div className="menu-div border-left">
              <div className="menu-d">
                <h5 className="menu-head">Ph D Programs</h5>
                <div className="menu-items">
                  <Link to="./ph-d-programs" className="menu-link">
                    General Information
                  </Link>
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
                <Link to="./edic" className="menu-link">
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
              setActiveLink("Admission");
            }}
            onMouseOut={() => {
              document.getElementById("Admission").style.display = "none";
              setActiveLink("");
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
                  href={AdmissionEligibilityCriteria}
                  target="_blank"
                  className="menu-link"
                  rel="noopener noreferrer"
                >
                  Eligibility Criteria
                </a>
                <a
                  href="https://drive.google.com/file/d/1zzlAVorLJXqcde1JAKHlMyBc8sJuvUov/view"
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
                  href={EligibilityCriteria}
                  target="_blank"
                  className="menu-link"
                >
                  Eligibility Criteria
                </a>
                <a href={InterNationalFees} className="menu-link">
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
                <Link to="./admission-reprentatives" className="menu-link">
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
                <a href="./scholarship" className="menu-link">
                  Scholarship
                </a>
                <Link to="./hostels" className="menu-link">
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
          // className="menu"
          // id="IQAC"
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
                <Link to="./coming-soon" className="menu-link">
                  Student Activities & Events
                </Link>
                <Link to="./coming-soon" className="menu-link">
                  Student Clubs
                </Link>
              </div>
            </div>
            <div className="menu-div border-left">
              <h5 className="menu-head">Residencies & Amenities</h5>
              <div className="menu-items">
                <Link to="./coming-soon" className="menu-link">
                  Boy's Hostel
                </Link>
                <Link to="./coming-soon" className="menu-link">
                  Staff Quarters
                </Link>
                <Link to="./coming-soon" className="menu-link">
                  Food / Canteen
                </Link>
                <Link to="./coming-soon" className="menu-link">
                  Transportation
                </Link>
                <Link to="./coming-soon" className="menu-link">
                  Recreation
                </Link>
              </div>
            </div>
            <div className="menu-div border-left">
              <h5 className="menu-head">Student Helpline</h5>
              <div className="menu-items">
                <Link to="./coming-soon" className="menu-link">
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
              setActiveLink("Research");
            }}
            onMouseOut={() => {
              document.getElementById("Research").style.display = "none";
              setActiveLink("");
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
                <Link to="./edic" className="menu-link">
                  Enterpreneurship Development & Incubation Cell (EDIC)
                </Link>
                <a href="http://kradle.charusat.ac.in/" className="menu-link">
                  Dr. K. C. Patel Research and Development Centre (KRADLE)
                </a>

                <a
                  href="https://charusat.irins.org/faculty/index/International+Centre+for+Cosmology+ICC"
                  className="menu-link"
                >
                  International Center for Cosmology (ICC)
                </a>
                <Link to="./ipr" className="menu-link">
                  IPR Cell
                </Link>
                <Link to="./research" className="menu-link">
                  Research Facilitation
                </Link>
                <Link to="./csrtc" className="menu-link">
                  CHARUSAT Space Research Center
                </Link>
                <Link to="./IEC" className="menu-link">
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
                <Link to="./coming-soon" className="menu-link">
                  Publications
                </Link>
                <Link to="./coming-soon" className="menu-link">
                  Project Grants
                </Link>
                <Link to="./coming-soon" className="menu-link">
                  Patents
                </Link>
              </div>
            </div>
          </div>
          <div
            className="menu"
            id="KnowCHARUSAT"
            onMouseOver={() => {
              document.getElementById("KnowCHARUSAT").style.display = "grid";
              setActiveLink("KnowCHARUSAT");
            }}
            onMouseOut={() => {
              document.getElementById("KnowCHARUSAT").style.display = "none";
              setActiveLink("");
            }}
          >
            <div className="menu-div">
              <div className="menu-d ">
                <h5 className="menu-head">About University</h5>
                <div className="menu-items">
                  {/* <Link to="./about" className="menu-link">
                    About University
                  </Link> */}
                  <Link to="./about" className="menu-link">
                    Vision
                  </Link>
                  <Link to="./about" className="menu-link">
                    Mission
                  </Link>
                  <Link to="./about" className="menu-link">
                    Torchbearers
                  </Link>
                  <Link to="./president-desk" className="menu-link">
                    From President's Desk
                  </Link>
                  <Link to="./provost-desk" className="menu-link">
                    From Provost's Desk
                  </Link>
                  {/* <Link to="./coming-soon" className="menu-link">
                    Students' Reviews
                  </Link> */}
                  <Link to="./convocations" className="menu-link">
                    Convocations
                  </Link>
                  <Link to="./associates" className="menu-link">
                    Governing Body
                  </Link>
                  <Link to="./associates" className="menu-link">
                    Board of Management
                  </Link>
                  <Link to="./associates" className="menu-link">
                    Deans, Principals & Heads
                  </Link>
                  <Link to="./associates" className="menu-link">
                    University Officers
                  </Link>
                </div>
              </div>

              {/* <div className="menu-d"></div> */}
            </div>
            <div className="menu-div border-left">
              <h5 className="menu-head">Centers & Cells</h5>
              <div className="menu-items">
                <a href="./anti-ragging" className="menu-link">
                  Anti-Ragging Committee
                </a>
                <a href="./eoc" className="menu-link">
                  Equal Opportunity Cell
                </a>
                {/* <a
                  href="./ecc"
                  className="menu-link"
                >
                  Energy Conservation Cell
                </a> */}
                <Link to="./GRC" className="menu-link">
                  Grievance Redressal Cell
                </Link>
                <Link to="./edic" className="menu-link">
                  Enterpreneurship Development & Incubation Cell
                </Link>
                <Link
                  to="./university-industry-interaction-cell"
                  className="menu-link"
                >
                  University Industry Interaction Cell
                </Link>
                <a href="./wdc" className="menu-link">
                  Womens' Development Cell
                </a>
                <a href="./hrdc" className="menu-link">
                  Pri. B I Patel Human Resource Development Center
                </a>
                <a href="https://isc.charusat.ac.in/" className="menu-link">
                  International Students' Cell
                </a>
                <a href="./cpsh" className="menu-link">
                  Cell for Prevention of Sexual Harassment
                </a>
                {/* <a href="" className="menu-link">
                  Internal Quality Assurance Cell (IQAC)
                </a> */}
                <a href="./CREDP" className="menu-link">
                  Charusat Rural Education Development Program
                </a>
                <a href="./student-wellness-program" className="menu-link">
                  Student Wellness Programme
                </a>
                <Link to="./wincell" className="menu-link">
                  Data Center @ CHARUSAT - WINCELL
                </Link>
              </div>
            </div>

            {/*  */}
            <div className="menu-div border-left">
              {/* <div className="menu-d border-b">
                <h5 className="menu-head">Visit</h5>
                <div className="menu-items">
                  <Link to="./coming-soon" className="menu-link">
                    360 Campus Tour
                  </Link>
                </div>
              </div> */}

              {/* <div className="menu-d border-b">
                <h5 className="menu-head">Reach US</h5>
                <div className="menu-items">
                  <Link to="./contact-us" className="menu-link">
                    Connect with CHARUSAT
                  </Link>
                  <Link to="./coming-soon" className="menu-link">
                    Lodge Complaint
                  </Link>
                  <Link to="./coming-soon" className="menu-link">
                    Faculty & Staff Directory
                  </Link>
                </div>
              </div> */}

              <div className="menu-d">
                <h5 className="menu-head">Infrastructure & Resources</h5>
                <div className="menu-items border-b">
                  {/* <Link to="./coming-soon" className="menu-link">
                  Auditoria & Lectures Halls
                </Link> */}
                  <a href="https://youtu.be/Og4NMqI3q5M" className="menu-link">
                    Laboratories
                  </a>

                  <a
                    href="https://scpit.new.knimbus.com/user#/home"
                    className="menu-link"
                  >
                    Knowledge Resource Center
                  </a>
                  {/* <Link to="./coming-soon" className="menu-link">
                  Sports & Gym
                </Link> */}
                  <Link to="./coming-soon" className="menu-link">
                    Herbal Garden
                  </Link>
                </div>
                <h5 className="menu-head" style={{ marginTop: "10px" }}>
                  Others
                </h5>
                <div className="menu-items">
                  <Link to="./donation" className="menu-link">
                    Give & Support
                  </Link>
                  <a
                    href="https://www.charusat.ac.in/documents-access/"
                    target="_blank"
                    className="menu-link"
                  >
                    Finance Reports
                  </a>
                  <Link to="./annual-report" className="menu-link">
                    Annual Report
                  </Link>
                  <a
                    href="https://charusat.ac.in/Downloads/"
                    className="menu-link"
                  >
                    Downloads
                  </a>
                </div>
              </div>
            </div>
          </div>

          <nav className="mobile-nav"></nav>
        </header>

        {/* <Navbar bg="white" expand="lg" className="nav">
          <Container>
            <Navbar.Brand href="#home">
              <a href="./" class="charusat">
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
        </Navbar> */}
        <Navbar bg="white" expand="lg" className="nav">
          <Container>
            <Navbar.Brand href="#home">
              <a href="./" class="charusat">
                <img
                  src={logo}
                  alt="CHARUSAT"
                  style={{
                    width: "22rem",
                  }}
                />
              </a>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="Academics" id="basic-nav-dropdown">
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown">
                      Learn Online
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="https://charuvidya.charusat.ac.in/">
                        CharuVidya
                      </Dropdown.Item>
                      {/* <Dropdown.Item href="http://172.16.11.116/LocalGuru/">
                        NPTEL Resources (Intranet)
                      </Dropdown.Item> */}
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown">
                      Other Programmes
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="./certification-courses">
                        Certification & Audit Courses
                      </Dropdown.Item>
                      <Dropdown.Item href="./course-single#GNM">
                        General Nursing & Midwifery (GNM)
                      </Dropdown.Item>
                      <Dropdown.Item href="./course-single#6303">
                        Post Graduation Diploma in Clinical Hypnosis (PGDCH)
                      </Dropdown.Item>
                      <Dropdown.Item href="./course-single#6304">
                        Post Graduation Diploma in Cyber Security (PGDCS)
                      </Dropdown.Item>
                      <Dropdown.Item href="./course-single#PGDMLT">
                        Post Graduation Diploma in Medical Laboratory Technology
                        (PGDMLT)
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown">
                      Undergraduate Studies
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="./course-single#1406">
                        B.Tech
                      </Dropdown.Item>
                      <Dropdown.Item href="./course-single#2401">
                        BCA
                      </Dropdown.Item>
                      <Dropdown.Item href="./course-single#2402">
                        B.Sc(IT)
                      </Dropdown.Item>
                      <Dropdown.Item href="./course-single#3401">
                        B.Pharm (Bachelor of Pharmacy)
                      </Dropdown.Item>
                      <Dropdown.Item href="./course-single#4401">
                        BBA
                      </Dropdown.Item>
                      <Dropdown.Item href="./course-single#5401">
                        B.Sc(Biology)
                      </Dropdown.Item>
                      <Dropdown.Item href="./course-single#6401">
                        BPT(Bachelor of Physiotherapy)
                      </Dropdown.Item>
                      <Dropdown.Item href="./course-single#6402">
                        B.Sc(Nursing)
                      </Dropdown.Item>
                      <Dropdown.Item href="./course-single#6405">
                        Bachelor of Optometry (B.Optom)
                      </Dropdown.Item>
                      <Dropdown.Item href="./course-single#6403">
                        B.Sc (Imaging Technology)
                      </Dropdown.Item>
                      <Dropdown.Item href="./course-single#6406">
                        B.Sc (Medical Technnology)
                      </Dropdown.Item>
                      <Dropdown.Item href="./course-single#6404">
                        B.Sc (Operation Theatre & Anesthesia Technology)
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown">
                      Postgraduate Studies
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="./course-single#1406">
                        M.Tech
                      </Dropdown.Item>
                      <Dropdown.Item href="./course-single#2501">
                        MCA
                      </Dropdown.Item>
                      <Dropdown.Item href="./course-single#2502">
                        M.Sc(IT)
                      </Dropdown.Item>
                      <Dropdown.Item href="./course-single#3501">
                        M.Pharm
                      </Dropdown.Item>
                      <Dropdown.Item href="./course-single#4501">
                        MBA
                      </Dropdown.Item>
                      <Dropdown.Item href="./course-single#5505">
                        M.Sc (Advanced Organic Chemistry)
                      </Dropdown.Item>
                      <Dropdown.Item href="./course-single#5502">
                        M.Sc (Biochemistry)
                      </Dropdown.Item>
                      <Dropdown.Item href="./course-single#5501">
                        M.Sc (Biotechnology)
                      </Dropdown.Item>
                      <Dropdown.Item href="./course-single#5503">
                        M.Sc (Microbiology)
                      </Dropdown.Item>
                      <Dropdown.Item href="./course-single#5506">
                        M.Sc (Physics)
                      </Dropdown.Item>
                      <Dropdown.Item href="./course-single#6501">
                        MPT (Master of Physiotherapy)
                      </Dropdown.Item>
                      <Dropdown.Item href="./course-single#6510">
                        M.Sc (Nursing)
                      </Dropdown.Item>
                      <Dropdown.Item href="./course-single#6403">
                        M.Sc (Medical Imaging Technology)
                      </Dropdown.Item>
                      <Dropdown.Item href="./course-single#6511">
                        M.Sc (Medical Laboratory Technology)
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown">
                      Ph D Programs
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="ph-d-programs">
                        General Information
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown">
                      Information You May Need
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="https://charusat.ac.in/Downloads/Academic%20Calenders/">
                        Academic Calender
                      </Dropdown.Item>
                      <Dropdown.Item href="./student-corner">
                        Students' Corner
                      </Dropdown.Item>
                      <Dropdown.Item href="./cdpc">
                        Career Development and Placements
                      </Dropdown.Item>
                      <Dropdown.Item href="./edic">
                        Entrepreneurship and Innovations
                      </Dropdown.Item>
                      <Dropdown.Item href="./student-development-initiatives">
                        Initiatives
                      </Dropdown.Item>
                      <Dropdown.Item href="./library">
                        Knowledge Resource Center
                      </Dropdown.Item>
                      <Dropdown.Item href="./code-of-conduct">
                        Code of Conduct
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </NavDropdown>
                {/*  */}
                <NavDropdown title="Admission" id="basic-nav-dropdown">
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown">
                      National
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="https://admission2023.charusat.ac.in/">
                        Apply Now
                      </Dropdown.Item>
                      <Dropdown.Item href={AdmissionEligibilityCriteria}>
                        Eligibility criteria
                      </Dropdown.Item>
                      <Dropdown.Item href="https://drive.google.com/file/d/1zzlAVorLJXqcde1JAKHlMyBc8sJuvUov/view">
                        Fees
                      </Dropdown.Item>
                      <Dropdown.Item>+91 8905500500</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown">
                      International
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="https://admission2023.charusat.ac.in/">
                        Apply Now
                      </Dropdown.Item>
                      <Dropdown.Item href={EligibilityCriteria}>
                        Eligibility criteria
                      </Dropdown.Item>
                      <Dropdown.Item href={InterNationalFees}>
                        Fees
                      </Dropdown.Item>
                      <Dropdown.Item>+91 917370164</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown">
                      Other
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="https://admission2023.charusat.ac.in/">
                        Admission Login
                      </Dropdown.Item>
                      <Dropdown.Item href="./admission-reprentatives">
                        Have a query? Contact Admission Representative
                      </Dropdown.Item>
                      <Dropdown.Item href="https://charusat.ac.in/files/UGSF%20Application%20form.pdf">
                        Undergraduate Student Fellowship
                      </Dropdown.Item>
                      <Dropdown.Item href="https://charusat.ac.in/documents/pdfs/research/PGSF.pdf">
                        Postgraduate Student Fellowship
                      </Dropdown.Item>
                      <Dropdown.Item href="https://charusat.ac.in/documents/pdfs/research/PDF%20Policy%20CHARUSAT.pdf">
                        Ph. D. Scholars’ Fellowship
                      </Dropdown.Item>
                      <Dropdown.Item href="https://charusat.ac.in/documents/pdfs/research/PDF%20Policy%20CHARUSAT.pdf">
                        Post Doctoral Fellowship Programme
                      </Dropdown.Item>
                      {/* <Dropdown.Item href="https://charusat.ac.in/files/UGSF%20Application%20form.pdf">
                        Need Personal Guidance!!! Talk To us
                      </Dropdown.Item>
                      <Dropdown.Item href="https://charusat.ac.in/documents/pdfs/research/PGSF.pdf">
                        Fellowship
                      </Dropdown.Item> */}
                      <Dropdown.Item href="https://www.charusat.ac.in/admission/scholarship.html">
                        Scholarship
                      </Dropdown.Item>
                      <Dropdown.Item href="./hostels">Hostels</Dropdown.Item>
                      <Dropdown.Item href="./transport">
                        Transportation
                      </Dropdown.Item>
                      {/* <Dropdown.Item href="https://www.charusat.ac.in/admission/scholarship.html">
                        Frequently Asked Questions (FAQs)
                      </Dropdown.Item> */}
                    </Dropdown.Menu>
                  </Dropdown>
                </NavDropdown>

                {/*  */}
                {/* <NavDropdown title="Campus Life" id="basic-nav-dropdown">
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown">
                      Activity & Events
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-2">
                        NCC@CHARUSAT
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        NSS@CHARUSAT
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Sports & Gym
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Student Activities & Events
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Student Clubs
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown">
                      Residences & Amenities
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-2">
                        Girl's Hostel
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Boy's Hostel
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Staff Quarters
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Food</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Transportation
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Recreation
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown">
                      Student Helpline
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-2">
                        Helpline Contacts
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </NavDropdown> */}
                {/*  */}
                <NavDropdown title="Research" id="basic-nav-dropdown">
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown">
                      Initiatives
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="https://youtu.be/Og4NMqI3q5M">
                        Laboratories
                      </Dropdown.Item>
                      <Dropdown.Item href="https://charusat.ac.in/charusatjournal/">
                        CHARUSAT Journal
                      </Dropdown.Item>
                      <Dropdown.Item href="./edic">
                        Enterpreneurship Development & Incubation Cell (EDIC)
                      </Dropdown.Item>
                      <Dropdown.Item href="http://kradle.charusat.ac.in/">
                        Dr. K. C. Patel Research and Development Centre (KRADLE)
                      </Dropdown.Item>
                      <Dropdown.Item href="https://charusat.irins.org/faculty/index/International+Centre+for+Cosmology+ICC">
                        International Center for Cosmology (ICC)
                      </Dropdown.Item>
                      <Dropdown.Item href="./ipr">IPR Cell</Dropdown.Item>
                      <Dropdown.Item href="./research">
                        Research Facilitation
                      </Dropdown.Item>
                      <Dropdown.Item href="./csrtc">
                        CHARUSAT Space Research Center
                      </Dropdown.Item>
                      <Dropdown.Item href="./IEC">
                        Research Ethics Committee
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown">
                      Policies
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="https://charusat.ac.in/documents/pdfs/research/PDF%20Policy%20CHARUSAT.pdf">
                        Post Doctoral Fellowship Programme
                      </Dropdown.Item>
                      <Dropdown.Item href="https://charusat.ac.in/documents/pdfs/research/CPSF.pdf">
                        Ph. D. Scholars’ Fellowship (CPSF)
                      </Dropdown.Item>
                      <Dropdown.Item href="https://charusat.ac.in/documents/pdfs/research/CVSRI.pdf">
                        Visitor Student Research Internship (CVSRI)
                      </Dropdown.Item>
                      <Dropdown.Item href="https://charusat.ac.in/documents/pdfs/research/PGSF.pdf">
                        Postgraduate Student Fellowship (PGSF)
                      </Dropdown.Item>
                      <Dropdown.Item href="https://charusat.ac.in/documents/pdfs/research/PGSF.pdf">
                        SEED Grant for Research
                      </Dropdown.Item>
                      <Dropdown.Item href="https://charusat.ac.in/documents/pdfs/research/1.%20CHARUSAT%20Research%20Policy.pdf">
                        Research
                      </Dropdown.Item>
                      <Dropdown.Item href="https://charusat.ac.in/documents/pdfs/research/8.%20Research%20Paper%20Award%20Policy%202018.pdf">
                        Research Paper Award
                      </Dropdown.Item>
                      <Dropdown.Item href="https://charusat.ac.in/documents/pdfs/research/06.Plagiarism%20Policy.pdf">
                        Plagiarism
                      </Dropdown.Item>
                      <Dropdown.Item href="https://charusat.ac.in/documents/pdfs/research/05.INTELLECTUAL%20PROPERTY%20POLICY.pdf">
                        Patent, IPR and Royalty Sharing
                      </Dropdown.Item>
                      <Dropdown.Item href="https://drive.google.com/file/d/1CzmhA6azuxlWGMwdaJPd6DNIv5e5Vyc9/view?usp=sharing">
                        Consultancy
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown">
                      Outcomes
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="./coming-soon">
                        Publications
                      </Dropdown.Item>
                      <Dropdown.Item href="./coming-soon">
                        Project Grants
                      </Dropdown.Item>
                      <Dropdown.Item href="./coming-soon">
                        Patents
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </NavDropdown>

                {/*  */}
                <NavDropdown title="Know CHARUSAT" id="basic-nav-dropdown">
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown">
                      About University
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="./about">Vision</Dropdown.Item>
                      <Dropdown.Item href="./about">Mission</Dropdown.Item>
                      <Dropdown.Item href="./about">Torchbearers</Dropdown.Item>
                      <Dropdown.Item href="./president-desk">
                        From President's Desk
                      </Dropdown.Item>
                      <Dropdown.Item href="./provost-desk">
                        From Provost's Desk
                      </Dropdown.Item>
                      <Dropdown.Item href="./convocations">
                        Convocations
                      </Dropdown.Item>
                      <Dropdown.Item href="./associates">
                        Governing Body
                      </Dropdown.Item>
                      <Dropdown.Item href="./associates">
                        Board of Management
                      </Dropdown.Item>
                      <Dropdown.Item href="./associates">
                        Deans, Principals & Heads
                      </Dropdown.Item>
                      <Dropdown.Item href="./associates">
                        University Officers
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown">
                      Centers & Cells
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="./anti-ragging">
                        Anti-Ragging Committee
                      </Dropdown.Item>
                      <Dropdown.Item href="./eoc">
                        Equal Opportunity Cell
                      </Dropdown.Item>
                      {/* <Dropdown.Item href="./ecc">
                        Energy Conservation Cell
                      </Dropdown.Item> */}
                      <Dropdown.Item href="./GRC">
                        Grievance Redressal Cell
                      </Dropdown.Item>
                      <Dropdown.Item href="./edic">
                        Enterpreneurship Development & Incubation Cell
                      </Dropdown.Item>
                      <Dropdown.Item href="./university-industry-interaction-cell">
                        University Industry Interaction Cell
                      </Dropdown.Item>
                      <Dropdown.Item href="./wdc">
                        Womens' Development Cell
                      </Dropdown.Item>
                      <Dropdown.Item href="./hrdc">
                        Pri. B I Patel Human Resource Development Center
                      </Dropdown.Item>
                      <Dropdown.Item href="https://isc.charusat.ac.in/">
                        International Students' Cell
                      </Dropdown.Item>
                      <Dropdown.Item href="./cpsh">
                        Cell for Prevention of Sexual Harassment
                      </Dropdown.Item>
                      <Dropdown.Item href="./CREDP">
                        Charusat Rural Education Development Program
                      </Dropdown.Item>
                      <Dropdown.Item href="./student-wellness-program">
                        Student Wellness Programme
                      </Dropdown.Item>
                      <Dropdown.Item href="./wincell">
                        Data Center @ CHARUSAT - WINCELL
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown">
                      Infrastructure & Resources
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="https://youtu.be/Og4NMqI3q5M">
                        Laboratories
                      </Dropdown.Item>
                      <Dropdown.Item href="https://scpit.new.knimbus.com/user#/home">
                        Knowledge Resource Center
                      </Dropdown.Item>
                      <Dropdown.Item href="./coming-soon">
                        Herbal Garden
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown">
                      Others
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="./donation">
                        Give & Support
                      </Dropdown.Item>
                      <Dropdown.Item href="https://www.charusat.ac.in/documents-access/">
                        Finance Reports
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link to="./annual-report">Annual Reports</Link>
                      </Dropdown.Item>
                      <Dropdown.Item href="https://charusat.ac.in/Downloads/">
                        Downloads
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
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
