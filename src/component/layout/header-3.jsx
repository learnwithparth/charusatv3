import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../section/Navigation";
import "../../assets/css/blink-text.css";
import "../../assets/css/header.css";
import { TypeAnimation } from 'react-type-animation';

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

const HeaderThree = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFiexd, setHeaderFiexd] = useState(false);
  const [searchTrigger, setSearchTrigger] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
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
          // backgroundImage:
          //  "linear-gradient(to right,#642b73 0%,#c6426e 51%,#642b73 100%)",
          color: "white",
          fontSize: "0.8rem",
        }}
      >
        <div
          className="container"
          style={{
            margin: "0 auto",
          }}
        >
          <div className="header-top-area" style={{ position: "relative" }}>
            {/* <div className="header-top-contact  ">
              <a href="https://admission2023.charusat.ac.in" className="blink">
                Apply for Admission
              </a>
            </div> */}
            <div className="header-top-reglog ">
              <Link to="/accreditation-and-ranking" className="login">
                Accreditation & Ranking
              </Link>

              <a
                href="https://charusatalumni.org"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Alumni
              </a>
              <Link to="/careers" className="login">
                Careers
              </Link>
              <Link to="./accreditation-and-ranking">NIRF</Link>
              <Link to="./placement">Placement</Link>
              <a href="./scholarship">
                Scholarships
              </a>
              <a href="./scholarship">
                Samaj Scholarships
              </a>
              <Link to="./student-corner">Student Corner</Link>

              {/* <Link to="/signup" className="signup">
                Students' Corner
              </Link> */}
              <a
                href="https://charusat.edu.in:912/UniExamResult/"
                className="login"
                target="_blank"
              >
                Exam Result
              </a>
              <a
                href="https://charusat.edu.in:912/FeesPaymentApp/"
                className="signup"
                target="_blank"
              >
                Pay Fees
              </a>
              <Link to="/contact-us" className="signup">
                Contact Us
              </Link>

              <Link to="/donation">
                <span className="support-btn">Support <TypeAnimation
  sequence={[
    // Same substring at the start will only be typed once, initially
    "CHARUSAT",
    4500,
    "",
  ]}
  speed={50}
  repeat={Infinity}
  
/></span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Navigation />
    </header>
    // </Fragment>
  );
};

export default HeaderThree;
