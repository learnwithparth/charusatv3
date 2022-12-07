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

import Navigation from "./Navigation";

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
              <Link to="/signup" className="signup">
                Alumni
              </Link>
              <Link to="/login" className="login">
                Careers
              </Link>
              <Link to="/signup" className="signup">
                Students' Corner
              </Link>
              <Link to="/login" className="login">
                Exam Result
              </Link>
              <Link to="/signup" className="signup">
                Pay Fees
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
