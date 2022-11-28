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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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
    <Fragment>
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
            fontSize: "15px",
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
        {/* For megamenu style App.css is created */}
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
            <Navbar.Brand
              href="#home"
              style={{ fontColor: "#0066B3 !important" }}
            >
              <div className="logo">
                <Link to="/">
                  <img src="assets/images/logo/02.png" alt="logo" />
                </Link>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown
                  className=" align-text-top"
                  title="Academics"
                  id="basic-nav-dropdown"
                >
                  <Container className="eventsNav pt-0 mt-0">
                    <Row>
                      <Col xs="12" md="6" className="text-left">
                        <Dropdown.Header>
                          <FontAwesomeIcon
                            color="black"
                            // icon={"concierge-bell"}
                            size="1x"
                            className="pr-1"
                          />
                          {"  "}
                          Learn Online
                        </Dropdown.Header>
                        <Dropdown.Item>
                          <Link to="/">
                            <a className="nav-link" role="button">
                              CharuVidya
                            </a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link to="/">
                            <a className="nav-link" role="button">
                              NPTEL
                            </a>
                          </Link>
                        </Dropdown.Item>

                        <Dropdown.Divider />
                        <Dropdown.Header>
                          <FontAwesomeIcon
                            color="black"
                            // icon={"chalkboard-teacher"}
                            size="1x"
                            className="pr-1"
                          />
                          {"  "}
                          Other Programs
                        </Dropdown.Header>
                        <Dropdown.Item>
                          <Link to="/">
                            <a className="nav-link" role="button">
                              Non Credit Courses
                            </a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link to="/">
                            <a className="nav-link" role="button">
                            General Nursing & Midwifery (GNM)
                            </a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link to="/">
                            <a className="nav-link" role="button">
                            Post Graduate Diploma in Clinical Hypnosis (PGDCH)
                            </a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Divider className="d-md-none" />
                        <Dropdown.Item>
                          <Link to="/">
                            <a className="nav-link" role="button">
                            Post Graduate Diploma in Cyber Security (PGDCS)
                            </a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Divider className="d-md-none" />
                        <Dropdown.Item>
                          <Link to="/">
                            <a className="nav-link" role="button">
                            Post Graduate Diploma in Medical <br/> Laboratory Technology (PGDMLT)
                            </a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Divider className="d-md-none" />
                      </Col>

                      <Col xs="12" md="6" className="text-left">
                        <Dropdown.Header>
                          <FontAwesomeIcon
                            color="black"
                            // icon={"building"}
                            size="1x"
                            className="pr-1"
                          />
                          {"  "}
                          Rentals
                        </Dropdown.Header>
                        <Dropdown.Item>
                          <Link to="/">
                            <a className="nav-link" role="button">
                              Fireside Room
                            </a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link to="/">
                            <a className="nav-link" role="button">
                              Roasting Room
                            </a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Header>
                          <FontAwesomeIcon
                            color="black"
                            // icon={"sun"}
                            size="1x"
                            className="pr-1"
                          />
                          {"  "}
                          Seasonal
                        </Dropdown.Header>
                        <Dropdown.Item>
                          <Link to="/">
                            <a className="nav-link" role="button">
                              Coldbrew Night
                            </a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link to="/">
                            <a className="nav-link text-wrap" role="button">
                              Campfire Coffee Class
                            </a>
                          </Link>
                        </Dropdown.Item>
                      </Col>
                      
                    </Row>
                  </Container>
                </NavDropdown>
                <NavDropdown
                  className=" align-text-top"
                  title="Admission"
                  id="basic-nav-dropdown"
                >
                  <Container className="eventsNav pt-0 mt-0">
                    <Row>
                      <Col xs="12" md="6" className="text-left">
                        <Dropdown.Header>
                          <FontAwesomeIcon
                            color="black"
                            // icon={"concierge-bell"}
                            size="1x"
                            className="pr-1"
                          />
                          {"  "}
                          Catering
                        </Dropdown.Header>
                        <Dropdown.Item>
                          <Link to="/">
                            <a className="nav-link" role="button">
                              Corporate
                            </a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link to="/">
                            <a className="nav-link" role="button">
                              Private
                            </a>
                          </Link>
                        </Dropdown.Item>

                        <Dropdown.Divider />
                        <Dropdown.Header>
                          <FontAwesomeIcon
                            color="black"
                            // icon={"chalkboard-teacher"}
                            size="1x"
                            className="pr-1"
                          />
                          {"  "}
                          Classes
                        </Dropdown.Header>
                        <Dropdown.Item>
                          <Link to="/">
                            <a className="nav-link" role="button">
                              Barista 101
                            </a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link to="/">
                            <a className="nav-link" role="button">
                              History of Coffee
                            </a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link to="/">
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
                            // icon={"building"}
                            size="1x"
                            className="pr-1"
                          />
                          {"  "}
                          Rentals
                        </Dropdown.Header>
                        <Dropdown.Item>
                          <Link to="/">
                            <a className="nav-link" role="button">
                              Fireside Room
                            </a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link to="/">
                            <a className="nav-link" role="button">
                              Roasting Room
                            </a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Header>
                          <FontAwesomeIcon
                            color="black"
                            // icon={"sun"}
                            size="1x"
                            className="pr-1"
                          />
                          {"  "}
                          Seasonal
                        </Dropdown.Header>
                        <Dropdown.Item>
                          <Link to="/">
                            <a className="nav-link" role="button">
                              Coldbrew Night
                            </a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link to="/">
                            <a className="nav-link text-wrap" role="button">
                              Campfire Coffee Class
                            </a>
                          </Link>
                        </Dropdown.Item>
                      </Col>
                    </Row>
                  </Container>
                </NavDropdown>
                <NavDropdown
                  className=" align-text-top"
                  title="Campus Life"
                  id="basic-nav-dropdown"
                >
                  <Container className="eventsNav pt-0 mt-0">
                    <Row>
                      <Col xs="12" md="6" className="text-left">
                        <Dropdown.Header>
                          <FontAwesomeIcon
                            color="black"
                            // icon={"concierge-bell"}
                            size="1x"
                            className="pr-1"
                          />
                          {"  "}
                          Catering
                        </Dropdown.Header>
                        <Dropdown.Item>
                          <Link to="/">
                            <a className="nav-link" role="button">
                              Corporate
                            </a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link to="/">
                            <a className="nav-link" role="button">
                              Private
                            </a>
                          </Link>
                        </Dropdown.Item>

                        <Dropdown.Divider />
                        <Dropdown.Header>
                          <FontAwesomeIcon
                            color="black"
                            // icon={"chalkboard-teacher"}
                            size="1x"
                            className="pr-1"
                          />
                          {"  "}
                          Classes
                        </Dropdown.Header>
                        <Dropdown.Item>
                          <Link to="/">
                            <a className="nav-link" role="button">
                              Barista 101
                            </a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link to="/">
                            <a className="nav-link" role="button">
                              History of Coffee
                            </a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link to="/">
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
                            // icon={"building"}
                            size="1x"
                            className="pr-1"
                          />
                          {"  "}
                          Rentals
                        </Dropdown.Header>
                        <Dropdown.Item>
                          <Link to="/">
                            <a className="nav-link" role="button">
                              Fireside Room
                            </a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link to="/">
                            <a className="nav-link" role="button">
                              Roasting Room
                            </a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Header>
                          <FontAwesomeIcon
                            color="black"
                            // icon={"sun"}
                            size="1x"
                            className="pr-1"
                          />
                          {"  "}
                          Seasonal
                        </Dropdown.Header>
                        <Dropdown.Item>
                          <Link to="/">
                            <a className="nav-link" role="button">
                              Coldbrew Night
                            </a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link to="/">
                            <a className="nav-link text-wrap" role="button">
                              Campfire Coffee Class
                            </a>
                          </Link>
                        </Dropdown.Item>
                      </Col>
                    </Row>
                  </Container>
                </NavDropdown>
                <NavDropdown
                  className=" align-text-top"
                  title="Research"
                  id="basic-nav-dropdown"
                >
                  <Container className="eventsNav pt-0 mt-0">
                    <Row>
                      <Col xs="12" md="6" className="text-left">
                        <Dropdown.Header>
                          <FontAwesomeIcon
                            color="black"
                            // icon={"concierge-bell"}
                            size="1x"
                            className="pr-1"
                          />
                          {"  "}
                          Catering
                        </Dropdown.Header>
                        <Dropdown.Item>
                          <Link to="/">
                            <a className="nav-link" role="button">
                              Corporate
                            </a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link to="/">
                            <a className="nav-link" role="button">
                              Private
                            </a>
                          </Link>
                        </Dropdown.Item>

                        <Dropdown.Divider />
                        <Dropdown.Header>
                          <FontAwesomeIcon
                            color="black"
                            // icon={"chalkboard-teacher"}
                            size="1x"
                            className="pr-1"
                          />
                          {"  "}
                          Classes
                        </Dropdown.Header>
                        <Dropdown.Item>
                          <Link to="/">
                            <a className="nav-link" role="button">
                              Barista 101
                            </a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link to="/">
                            <a className="nav-link" role="button">
                              History of Coffee
                            </a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link to="/">
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
                            // icon={"building"}
                            size="1x"
                            className="pr-1"
                          />
                          {"  "}
                          Rentals
                        </Dropdown.Header>
                        <Dropdown.Item>
                          <Link to="/">
                            <a className="nav-link" role="button">
                              Fireside Room
                            </a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link to="/">
                            <a className="nav-link" role="button">
                              Roasting Room
                            </a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Header>
                          <FontAwesomeIcon
                            color="black"
                            // icon={"sun"}
                            size="1x"
                            className="pr-1"
                          />
                          {"  "}
                          Seasonal
                        </Dropdown.Header>
                        <Dropdown.Item>
                          <Link to="/">
                            <a className="nav-link" role="button">
                              Coldbrew Night
                            </a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link to="/">
                            <a className="nav-link text-wrap" role="button">
                              Campfire Coffee Class
                            </a>
                          </Link>
                        </Dropdown.Item>
                      </Col>
                    </Row>
                  </Container>
                </NavDropdown>
                <NavDropdown
                  className=" align-text-top"
                  title="IQAC"
                  id="basic-nav-dropdown"
                >
                  <Container className="eventsNav pt-0 mt-0">
                    <Row>
                      <Col xs="12" md="6" className="text-left">
                        <Dropdown.Header>
                          <FontAwesomeIcon
                            color="black"
                            // icon={"concierge-bell"}
                            size="1x"
                            className="pr-1"
                          />
                          {"  "}
                          Catering
                        </Dropdown.Header>
                        <Dropdown.Item>
                          <Link to="/">
                            <a className="nav-link" role="button">
                              Corporate
                            </a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link to="/">
                            <a className="nav-link" role="button">
                              Private
                            </a>
                          </Link>
                        </Dropdown.Item>

                        <Dropdown.Divider />
                        <Dropdown.Header>
                          <FontAwesomeIcon
                            color="black"
                            // icon={"chalkboard-teacher"}
                            size="1x"
                            className="pr-1"
                          />
                          {"  "}
                          Classes
                        </Dropdown.Header>
                        <Dropdown.Item>
                          <Link to="/">
                            <a className="nav-link" role="button">
                              Barista 101
                            </a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link to="/">
                            <a className="nav-link" role="button">
                              History of Coffee
                            </a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link to="/">
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
                            // icon={"building"}
                            size="1x"
                            className="pr-1"
                          />
                          {"  "}
                          Rentals
                        </Dropdown.Header>
                        <Dropdown.Item>
                          <Link to="/">
                            <a className="nav-link" role="button">
                              Fireside Room
                            </a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link to="/">
                            <a className="nav-link" role="button">
                              Roasting Room
                            </a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Header>
                          <FontAwesomeIcon
                            color="black"
                            // icon={"sun"}
                            size="1x"
                            className="pr-1"
                          />
                          {"  "}
                          Seasonal
                        </Dropdown.Header>
                        <Dropdown.Item>
                          <Link to="/">
                            <a className="nav-link" role="button">
                              Coldbrew Night
                            </a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link to="/">
                            <a className="nav-link text-wrap" role="button">
                              Campfire Coffee Class
                            </a>
                          </Link>
                        </Dropdown.Item>
                      </Col>
                    </Row>
                  </Container>
                </NavDropdown>
                <NavDropdown
                  className=" align-text-top"
                  title="Know CHARUSAT"
                  id="basic-nav-dropdown"
                >
                  <Container className="eventsNav pt-0 mt-0">
                    <Row>
                      <Col xs="12" md="6" className="text-left">
                        <Dropdown.Header>
                          <FontAwesomeIcon
                            color="black"
                            // icon={"concierge-bell"}
                            size="1x"
                            className="pr-1"
                          />
                          {"  "}
                          Catering
                        </Dropdown.Header>
                        <Dropdown.Item>
                          <Link to="/">
                            <a className="nav-link" role="button">
                              Corporate
                            </a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link to="/">
                            <a className="nav-link" role="button">
                              Private
                            </a>
                          </Link>
                        </Dropdown.Item>

                        <Dropdown.Divider />
                        <Dropdown.Header>
                          <FontAwesomeIcon
                            color="black"
                            // icon={"chalkboard-teacher"}
                            size="1x"
                            className="pr-1"
                          />
                          {"  "}
                          Classes
                        </Dropdown.Header>
                        <Dropdown.Item>
                          <Link to="/">
                            <a className="nav-link" role="button">
                              Barista 101
                            </a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link to="/">
                            <a className="nav-link" role="button">
                              History of Coffee
                            </a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link to="/">
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
                            // icon={"building"}
                            size="1x"
                            className="pr-1"
                          />
                          {"  "}
                          Rentals
                        </Dropdown.Header>
                        <Dropdown.Item>
                          <Link to="/">
                            <a className="nav-link" role="button">
                              Fireside Room
                            </a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link to="/">
                            <a className="nav-link" role="button">
                              Roasting Room
                            </a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Header>
                          <FontAwesomeIcon
                            color="black"
                            // icon={"sun"}
                            size="1x"
                            className="pr-1"
                          />
                          {"  "}
                          Seasonal
                        </Dropdown.Header>
                        <Dropdown.Item>
                          <Link to="/">
                            <a className="nav-link" role="button">
                              Coldbrew Night
                            </a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link to="/">
                            <a className="nav-link text-wrap" role="button">
                              Campfire Coffee Class
                            </a>
                          </Link>
                        </Dropdown.Item>
                      </Col>
                    </Row>
                  </Container>
                </NavDropdown>
              </Nav>
              <Nav>
                <div
                  className="search-icon"
                  onClick={() => setSearchTrigger(!searchTrigger)}
                >
                  <i className="icofont-search"></i>
                </div>
                {/* <Nav.Link to="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Dank memes
                </Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <div className={`menu-search-form ${searchTrigger ? "open" : ""}`}>
        <div
          className="search-close"
          onClick={() => setSearchTrigger(!searchTrigger)}
        ></div>
        <form>
          <input type="text" name="search" placeholder="Search here..." />
          <button type="submit">
            <i className="icofont-search"></i>
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default HeaderThree;
