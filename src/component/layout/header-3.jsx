import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
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

import Navigation from "../section/Navigation";

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
          // backgroundColor: "#0066b3",
          backgroundImage:
            "linear-gradient(to right,#642b73 0%,#c6426e 51%,#642b73 100%)",
          color: "white",
          fontSize: "0.8rem",
        }}
      >
        <div className="container">
          <div className="header-top-area">
            <div className="header-top-contact">
              <a href="tel:+880123456789">+91-2697-265011/21</a>
              <a href="mailto:contact@yourmail.com">info@charusat.ac.in</a>
            </div>
            <div className="header-top-reglog">
              <Link to="/accreditation" className="login">
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
              <Link to="/donation">
                <span>Support CHARUSAT</span>
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
