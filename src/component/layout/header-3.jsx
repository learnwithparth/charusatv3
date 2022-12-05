import { Fragment, useState } from "react";
import { Link, NavLink } from "react-router-dom";
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

const menuList = [
  {
    text: "Academics",
    subMenu: [
      {
        text: "Undergraduate Studies",
        subSubMenu: [
          {
            text: "Engineering (B Tech)",
            link: "undergraduateCourses",
            subSubSubMenu: [],
          },
          {
            text: "Computer Applications (BCA)",
            link: "undergraduateCourses",
            subSubSubMenu: [],
          },
          {
            text: "Pharmacy (B Pharm)",
            link: "undergraduateCourses",
            subSubSubMenu: [],
          },
          {
            text: "Business Administration (BBA)",
            link: "undergraduateCourses",
            subSubSubMenu: [],
          },
          {
            text: "Physiotherapy (BPT)",
            link: "undergraduateCourses",
            subSubSubMenu: [],
          },
          {
            text: "Optometry (B Optom)",
            link: "undergraduateCourses",
            subSubSubMenu: [],
          },
          {
            text: "Science",
            subSubSubMenu: [
              {
                text: "Information Technology",
                link: "undergraduateCourses",
              },
              {
                text: "Biology",
                link: "undergraduateCourses",
              },
              {
                text: "Nursing",
                link: "undergraduateCourses",
              },
              {
                text: "Imaging Technology",
                link: "undergraduateCourses",
              },
              {
                text: "Medical Technnology",
                link: "undergraduateCourses",
              },
              {
                text: "Op. Theatre & Anesthesia Tech",
                link: "undergraduateCourses",
              },
            ],
          },
        ],
      },
      {
        text: "Postgraduate Studies",
        subSubMenu: [
          {
            text: "Engineering (M Tech)",
            link: "postgraduateCourses",
            subSubSubMenu: [],
          },
          {
            text: "Computer Applications (MCA)",
            link: "postgraduateCourses",
            subSubSubMenu: [],
          },
          {
            text: "Pharmacy (M Pharm)",
            link: "postgraduateCourses",
            subSubSubMenu: [],
          },
          {
            text: "Business Administration (MBA)",
            link: "postgraduateCourses",
            subSubSubMenu: [],
          },
          {
            text: "Physiotherapy (MPT)",
            link: "postgraduateCourses",
            subSubSubMenu: [],
          },
          {
            text: "Science",
            subSubSubMenu: [
              {
                text: "Advanced Organic Chemistry",
                link: "postgraduateCourses",
              },
              {
                text: "Biochemistry",
                link: "postgraduateCourses",
              },
              {
                text: "Biotechnology",
                link: "postgraduateCourses",
              },
              {
                text: "Microbiology",
                link: "postgraduateCourses",
              },
              {
                text: "Physics",
                link: "postgraduateCourses",
              },
              {
                text: "Nursing",
                link: "postgraduateCourses",
              },
              {
                text: "Medical Laboratory Tech.",
                link: "postgraduateCourses",
              },
              {
                text: "Medical Imaging Tech.",
                link: "postgraduateCourses",
              },
            ],
          },
        ],
      },
      {
        text: "Doctor of Philosphy",
        subSubMenu: [],
      },
      {
        text: "Other Programms",
        subSubMenu: [
          {
            text: "Certification Courses",
            subSubSubMenu: [],
          },
          {
            text: "General Nursing & Midwifery",
            subSubSubMenu: [],
          },
          {
            text: "Post Graduate Diploma",
            subSubSubMenu: [
              { text: "Clinical Hypnosis (PGDCH)", link: "" },
              { text: "Cyber Security (PGDCS)", link: "" },
              { text: "Medical Laboratory Tech. (PGDMLT)", link: "" },
            ],
          },
        ],
      },
      {
        text: "Learn Online",
        subSubMenu: [
          {
            text: "CharuVidya",
            link: "charuvidya",
            subSubSubMenu: [],
          },
          {
            text: "NPTEL",
            link: "nptel",
            subSubSubMenu: [],
          },
        ],
      },
      {
        text: "Others",
        subSubMenu: [
          {
            text: "Academic Calender",
            link: "",
            subSubSubMenu: [],
          },
          {
            text: "Academic Services",
            link: "",
            subSubSubMenu: [],
          },
          {
            text: "Career Development and Placements",
            link: "",
            subSubSubMenu: [],
          },
          {
            text: "Distinguished Lecture Series",
            link: "",
            subSubSubMenu: [],
          },
          {
            text: "Entrepreneurship and Innovations",
            link: "",
            subSubSubMenu: [],
          },
          {
            text: "Endowment Chairs",
            link: "",
            subSubSubMenu: [],
          },
          {
            text: "Initiatives",
            link: "",
            subSubSubMenu: [],
          },
          {
            text: "Knowledge Resource Center",
            link: "krc",
            subSubSubMenu: [],
          },
        ],
      },
    ],
  },
  {
    text: "Admission",
    subMenu: [
      {
        text: "National",
        subSubMenu: [
          {
            text: "Apply now",
            link: "admissionApplyNow",
            subSubSubMenu: [],
          },
          {
            text: "Eligibility Criteria",
            link: "#",
            subSubSubMenu: [],
          },
          {
            text: "Fees",
            link: "#",
            subSubSubMenu: [],
          },
          {
            text: "Contact Us - +918905500500",
            link: "#",
            subSubSubMenu: [],
          },
        ],
      },
      {
        text: "International",
        subSubMenu: [
          {
            text: "Apply now",
            link: "admissionApplyNow",
            subSubSubMenu: [],
          },
          {
            text: "Eligibility Criteria",
            link: "#",
            subSubSubMenu: [],
          },
          {
            text: "Fees",
            link: "#",
            subSubSubMenu: [],
          },
          {
            text: "Contact Us - +919173701614",
            link: "#",
            subSubSubMenu: [],
          },
        ],
      },
      {
        text: "Login",
        link: "admissionApplyNow",
        subSubMenu: [],
      },
      {
        text: "Fellowship",
        subSubMenu: [],
      },
      {
        text: "Scholarship",
        subSubMenu: [],
      },
      {
        text: "Transportation",
        subSubMenu: [],
      },
      {
        text: "FAQ",
        subSubMenu: [],
      },
    ],
  },
  {
    text: "Campus Life",
    subMenu: [
      {
        text: "Activity & Events",
        subSubMenu: [
          {
            text: "NCC@CHARUSAT",
            subSubSubMenu: [],
          },
          {
            text: "NSS@CHARUSAT",
            subSubSubMenu: [],
          },
          {
            text: "Sports & Gym",
            subSubSubMenu: [],
          },
          {
            text: "Activities & Events",
            subSubSubMenu: [],
          },
          {
            text: "Clubs",
            subSubSubMenu: [],
          },
        ],
      },
      {
        text: "Residencies & Amenities",
        subSubMenu: [
          {
            text: "Girl's Hostel",
            subSubSubMenu: [],
          },
          {
            text: "Boy's Hostel",
            subSubSubMenu: [],
          },
          {
            text: "Staff Quarters",
            subSubSubMenu: [],
          },
          {
            text: "Food",
            subSubSubMenu: [],
          },
          {
            text: "Transportation",
            subSubSubMenu: [],
          },
          {
            text: "Recreation",
            subSubSubMenu: [],
          },
        ],
      },
      {
        text: "Student Helpline",
        subSubMenu: [
          {
            text: "Helpline No.",
            subSubSubMenu: [],
          },
        ],
      },
    ],
  },
  {
    text: "Research",
    subMenu: [
      {
        text: "Initiatives",
        subSubMenu: [
          {
            text: "Laboratories",
            link: "laboratories",
            subSubSubMenu: [],
          },
          {
            text: "CHARUSAT Journal",
            subSubSubMenu: [],
          },
          {
            text: "EDIC",
            subSubSubMenu: [],
          },
          {
            text: "KRADLE",
            link: "kradle",
            subSubSubMenu: [],
          },
          {
            text: "ICC",
            link: "icc",
            subSubSubMenu: [],
          },
          {
            text: "IPR Cell",
            subSubSubMenu: [],
          },
          {
            text: "Research Facilitation",
            subSubSubMenu: [],
          },
          {
            text: "CSRTC",
            subSubSubMenu: [],
          },
          {
            text: "Ethics Committee",
            subSubSubMenu: [],
          },
        ],
      },
      {
        text: "Policies",
        subSubMenu: [
          {
            text: "Publications",
            subSubSubMenu: [],
          },
          {
            text: "Ph. D. Scholars’ Fellowship",
            subSubSubMenu: [],
          },
          {
            text: "Visitor Student Research Internship",
            subSubSubMenu: [],
          },
          {
            text: "Undergraduate & Postgraduate Student Fellowship ",
            subSubSubMenu: [],
          },
          {
            text: "Seed Grant",
            subSubSubMenu: [],
          },
          {
            text: "Research",
            subSubSubMenu: [],
          },
          {
            text: "Research Paper Award",
            subSubSubMenu: [],
          },
          {
            text: "Intellectual Property",
            subSubSubMenu: [],
          },
          {
            text: "Plagiarism",
            subSubSubMenu: [],
          },
          {
            text: "Patent, IPR and Royalty Sharing",
            subSubSubMenu: [],
          },
          {
            text: "Consultancy",
            subSubSubMenu: [],
          },
        ],
      },
      {
        text: "Outcomes",
        subSubMenu: [
          {
            text: "Publications",
            subSubSubMenu: [],
          },
          {
            text: "Project Grants",
            subSubSubMenu: [],
          },
          {
            text: "Patents",
            subSubSubMenu: [],
          },
        ],
      },
    ],
  },
  {
    text: "IQAC",
    link: "iqac",
    subMenu: [
      
    ],
  },
  {
    text: "Know CHARUSAT",
    subMenu: [
      {
        text: "About CAHRUSAT",
        subSubMenu: [
          {
            text: "About University",
            subSubSubMenu: [],
          },
          {
            text: "Vision",
            subSubSubMenu: [],
          },
          {
            text: "Mission",
            subSubSubMenu: [],
          },
          {
            text: "Torchbearers",
            subSubSubMenu: [],
          },
          {
            text: "From President's Desk",
            subSubSubMenu: [],
          },
          {
            text: "From Provost's Desk",
            subSubSubMenu: [],
          },
          {
            text: "Convocations",
            subSubSubMenu: [],
          },
        ],
      },
      {
        text: "Governing Members",
        subSubMenu: [
          {
            text: "Governing Body",
            subSubSubMenu: [],
          },
          {
            text: "Board of Management",
            subSubSubMenu: [],
          },
          {
            text: "Deans, Principals & Heads",
            subSubSubMenu: [],
          },
          {
            text: "University Officers",
            subSubSubMenu: [],
          },
        ],
      },
      {
        text: "Centers & Cells",
        subSubMenu: [
          {
            text: "Anti-Ragging Committee",
            subSubSubMenu: [],
          },
          {
            text: "Equal Opportunity Cell",
            subSubSubMenu: [],
          },
          {
            text: "Energy Conservation Cell",
            subSubSubMenu: [],
          },
          {
            text: "Grievance Redressal Cell",
            subSubSubMenu: [],
          },
          {
            text: "Enterpreneurship Development & Incubation Cell",
            subSubSubMenu: [],
          },
          {
            text: "University Industry Interaction Cell",
            subSubSubMenu: [],
          },
          {
            text: "Womens' Development Cell",
            subSubSubMenu: [],
          },
          {
            text: "Human Resource Development Center",
            subSubSubMenu: [],
          },
          {
            text: "International Students' Cell",
            subSubSubMenu: [],
          },
          {
            text: "Cell for Prevention of Sexual Harassment",
            subSubSubMenu: [],
          },
          {
            text: "Internal Quality Assurance Cell",
            subSubSubMenu: [],
          },
          {
            text: "Rural Education Development Program",
            subSubSubMenu: [],
          },
          {
            text: "Student Wellness Programme",
            subSubSubMenu: [],
          },
        ],
      },
      {
        text: "Infrastructure & Resources",
        subSubMenu: [
          {
            text: "Auditoria & Lectures Halls",
            subSubSubMenu: [],
          },
          {
            text: "Laboratories",
            subSubSubMenu: [],
          },
          {
            text: "Data Center @ CHARUSAT",
            subSubSubMenu: [],
          },
          {
            text: "Knowledge Resource Center",
            linl: "krc",
            subSubSubMenu: [],
          },
          {
            text: "Sports & Gym",
            subSubSubMenu: [],
          },
          {
            text: "Herbal Garden",
            subSubSubMenu: [],
          },
        ],
      },
      {
        text: "360 Campus Tour",
        link: "360view",
        subSubMenu: [],
      },
      {
        text: "Reach US",
        subSubMenu: [
          {
            text: "Connect with CHARUSAT",
            subSubSubMenu: [],
          },
          {
            text: "Staff Directory",
            subSubSubMenu: [],
          },
        ],
      },
      {
        text: "Others",
        subSubMenu: [
          {
            text: "Give & Support US",
            subSubSubMenu: [],
          },
          {
            text: "Reports",
            subSubSubMenu: [],
          },
          {
            text: "Strategic Plan",
            subSubSubMenu: [],
          },
        ],
      },
    ],
  },
];

const HeaderThree = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFiexd, setHeaderFiexd] = useState(false);
  const [searchTrigger, setSearchTrigger] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setHeaderFiexd(true);
    } else {
      setHeaderFiexd(false);
    }
  });

  return (
    // <Fragment>
    <header
      className={`header-section style-3 ${
        headerFiexd ? "header-fixed fadeInUp" : ""
      }`}
    >
      <div
        className={`header-top ${socialToggle ? "open" : ""}`}
        style={{
          backgroundColor: "#0066b3",
          color: "white",
          fontSize: "17px",
        }}
      >
        <div className="container">
          <div className="header-top-area">
            <div className="header-top-contact">
              <a href="#" className="lab-btn">
                <span>Support CHARUSAT</span>
              </a>
              <a href="tel:+880123456789">+91-2697-265011/21</a>
              <a href="mailto:contact@yourmail.com">info@charusat.ac.in</a>
            </div>
            <div className="header-top-reglog">
              <Link to="/login" className="login">
                Accreditation & Ranking
              </Link>

              <a
                target="_blank"
                href="https://charusatalumni.org/"
                title="example"
              >
                Alumni
              </a>

              <Link to="/login" className="login">
                Careers
              </Link>
              <Link to="/signup" className="signup">
                Students' Corner
              </Link>
              <a
                target="_blank"
                href="https://charusatalumni.org/"
                
              >
                Exam Result
              </a>
              <a
                target="_blank"
                href="https://charusat.edu.in:912/FeesPaymentApp/"
                
              >
                Pay Fees
              </a>
            </div>
          </div>
        </div>
      </div>

      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="primary"
        style={{ fontWeight: "bold" }}
      >
        <Container className="menu">
          <Navbar.Brand href="#home">
            <div className="logo">
              <Link to="/">
                <img src="assets/images/logo/02.png" alt="logo" />
              </Link>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          {/* <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  </NavDropdown>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse> */}
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {menuList.map((menu) =>
                menu.subMenu.length > 0 ? (
                  <NavDropdown
                    className=" align-text-top"
                    title={menu.text}
                    id="collasible-nav-dropdown"
                  >
                    {menu.subMenu.map((subMenu) =>
                      subMenu.subSubMenu.length > 0 ? (
                        <NavDropdown
                          title={subMenu.text}
                          id="collasible-nav-dropdown"
                        >
                          {subMenu.subSubMenu.map((subSubMenu) =>
                            subSubMenu.subSubSubMenu.length > 0 ? (
                              <NavDropdown
                                title={subSubMenu.text}
                                id="collasible-nav-dropdown"
                              >
                                {subSubMenu.subSubSubMenu.map(
                                  (subSubSubMenu) => (
                                    <Nav.Link href={subSubSubMenu.link}>
                                      {subSubSubMenu.text}
                                    </Nav.Link>
                                  )
                                )}
                              </NavDropdown>
                            ) : (
                              <Nav.Link href={subSubMenu.link}>
                                {subSubMenu.text}
                              </Nav.Link>
                            )
                          )}
                        </NavDropdown>
                      ) : (
                        <Nav.Link href={subMenu.link}>{subMenu.text}</Nav.Link>
                      )
                    )}
                  </NavDropdown>
                ) : (
                  <Nav.Link href={menu.link}>{menu.text}</Nav.Link>
                )
              )}
            </Nav>
            <Nav>
              <div
                className="search-icon"
                onClick={() => setSearchTrigger(!searchTrigger)}
              >
                <i className="icofont-search"></i>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
    // </Fragment>
  );
};

export default HeaderThree;
