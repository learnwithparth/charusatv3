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

export default function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">
          <div className="logo">
            <Nav.Link>
              <img src="assets/images/logo/02.png" alt="logo" />
            </Nav.Link>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Container fluid>
            <Nav className="ms-auto">
              {/*  style={{ border: "1px solid red" }}
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
              <NavDropdown
                className=" align-text-top"
                title="Academics"
                id="basic-nav-dropdown"
              >
                <Container className="eventsNav pt-0 mt-0">
                  <div class="flex-container">
                    <div>
                      <Dropdown.Header>Undergraduate Studies</Dropdown.Header>
                      <Nav.Link>Link 1</Nav.Link>
                      <Nav.Link>Link 2</Nav.Link>
                      <Nav.Link>Link 3</Nav.Link>
                      <Nav.Link>Link 1</Nav.Link>
                      <Nav.Link>Link 2</Nav.Link>
                      <Nav.Link>Link 3</Nav.Link>
                      <Nav.Link>Link 1</Nav.Link>
                      <Nav.Link>Link 2</Nav.Link>
                      <Nav.Link>Link 3</Nav.Link>
                      <Nav.Link>Link 1</Nav.Link>
                      <Nav.Link>Link 2</Nav.Link>
                      <Nav.Link>Link 3</Nav.Link>
                      <Nav.Link>Link 1 sdfad sdfsf</Nav.Link>
                    </div>
                    <div>
                      <Dropdown.Header>Postgraduate Studies</Dropdown.Header>
                      <Nav.Link>Link 1</Nav.Link>
                      <Nav.Link>Link 2</Nav.Link>
                      <Nav.Link>Link 3</Nav.Link>
                    </div>
                    <div>
                      <Dropdown.Header>Phd</Dropdown.Header>
                      <Nav.Link>Link 1</Nav.Link>
                      <Nav.Link>Link 2</Nav.Link>
                      <Nav.Link>Link 3</Nav.Link>
                    </div>
                    <div>
                      <Dropdown.Header>Other Links</Dropdown.Header>
                      <Nav.Link>Link 1</Nav.Link>
                      <Nav.Link>Link 2</Nav.Link>
                      <Nav.Link>Link 3</Nav.Link>
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
                title="Admission"
                id="basic-nav-dropdown"
              >
                <Container className="  eventsNav pt-0 mt-0">
                  <div class="flex-container">
                    <div>
                      <Dropdown.Header>UG</Dropdown.Header>
                      <Nav.Link>Link 1</Nav.Link>
                      <Nav.Link>Link 2</Nav.Link>
                      <Nav.Link>Link 3</Nav.Link>
                    </div>
                    <div>
                      <Dropdown.Header>UG</Dropdown.Header>
                      <Nav.Link>Link 1</Nav.Link>
                      <Nav.Link>Link 2</Nav.Link>
                      <Nav.Link>Link 3</Nav.Link>
                    </div>
                    <div>
                      <Dropdown.Header>UG</Dropdown.Header>
                      <Nav.Link>Link 1</Nav.Link>
                      <Nav.Link>Link 2</Nav.Link>
                      <Nav.Link>Link 3</Nav.Link>
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
                <Container className="  eventsNav pt-0 mt-0">
                  <div class="flex-container">
                    <div>
                      <Dropdown.Header>UG</Dropdown.Header>
                      <Nav.Link>Link 1</Nav.Link>
                      <Nav.Link>Link 2</Nav.Link>
                      <Nav.Link>Link 3</Nav.Link>
                    </div>
                    <div>
                      <Dropdown.Header>UG</Dropdown.Header>
                      <Nav.Link>Link 1</Nav.Link>
                      <Nav.Link>Link 2</Nav.Link>
                      <Nav.Link>Link 3</Nav.Link>
                    </div>
                    <div>
                      <Dropdown.Header>UG</Dropdown.Header>
                      <Nav.Link>Link 1</Nav.Link>
                      <Nav.Link>Link 2</Nav.Link>
                      <Nav.Link>Link 3</Nav.Link>
                    </div>
                    <div>
                      <Dropdown.Header>UG</Dropdown.Header>
                      <Nav.Link>Link 1</Nav.Link>
                      <Nav.Link>Link 2</Nav.Link>
                      <Nav.Link>Link 3</Nav.Link>
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
                title="Research"
                id="basic-nav-dropdown"
              >
                <Container className="  eventsNav pt-0 mt-0">
                  <div class="flex-container">
                    <div>
                      <Dropdown.Header>UG</Dropdown.Header>
                      <Nav.Link>Link 1</Nav.Link>
                      <Nav.Link>Link 2</Nav.Link>
                      <Nav.Link>Link 3</Nav.Link>
                    </div>
                    <div>
                      <Dropdown.Header>UG</Dropdown.Header>
                      <Nav.Link>Link 1</Nav.Link>
                      <Nav.Link>Link 2</Nav.Link>
                      <Nav.Link>Link 3</Nav.Link>
                    </div>
                    <div>
                      <Dropdown.Header>UG</Dropdown.Header>
                      <Nav.Link>Link 1</Nav.Link>
                      <Nav.Link>Link 2</Nav.Link>
                      <Nav.Link>Link 3</Nav.Link>
                    </div>
                    <div>
                      <Dropdown.Header>UG</Dropdown.Header>
                      <Nav.Link>Link 1</Nav.Link>
                      <Nav.Link>Link 2</Nav.Link>
                      <Nav.Link>Link 3</Nav.Link>
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
                title="IQAC"
                id="basic-nav-dropdown"
              >
                <Container className="  eventsNav pt-0 mt-0">
                  <div class="flex-container">
                    <div>
                      <Dropdown.Header>UG</Dropdown.Header>
                      <Nav.Link>Link 1</Nav.Link>
                      <Nav.Link>Link 2</Nav.Link>
                      <Nav.Link>Link 3</Nav.Link>
                    </div>
                    <div>
                      <Dropdown.Header>UG</Dropdown.Header>
                      <Nav.Link>Link 1</Nav.Link>
                      <Nav.Link>Link 2</Nav.Link>
                      <Nav.Link>Link 3</Nav.Link>
                    </div>
                    <div>
                      <Dropdown.Header>UG</Dropdown.Header>
                      <Nav.Link>Link 1</Nav.Link>
                      <Nav.Link>Link 2</Nav.Link>
                      <Nav.Link>Link 3</Nav.Link>
                    </div>
                    <div>
                      <Dropdown.Header>UG</Dropdown.Header>
                      <Nav.Link>Link 1</Nav.Link>
                      <Nav.Link>Link 2</Nav.Link>
                      <Nav.Link>Link 3</Nav.Link>
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
                title="Know CHARUSAT"
                id="basic-nav-dropdown"
              >
                <Container className="  eventsNav pt-0 mt-0">
                  <div class="flex-container">
                    <div>
                      <Dropdown.Header>UG</Dropdown.Header>
                      <Nav.Link>Link 1</Nav.Link>
                      <Nav.Link>Link 2</Nav.Link>
                      <Nav.Link>Link 3</Nav.Link>
                    </div>
                    <div>
                      <Dropdown.Header>UG</Dropdown.Header>
                      <Nav.Link>Link 1</Nav.Link>
                      <Nav.Link>Link 2</Nav.Link>
                      <Nav.Link>Link 3</Nav.Link>
                    </div>
                    <div>
                      <Dropdown.Header>UG</Dropdown.Header>
                      <Nav.Link>Link 1</Nav.Link>
                      <Nav.Link>Link 2</Nav.Link>
                      <Nav.Link>Link 3</Nav.Link>
                    </div>
                    <div>
                      <Dropdown.Header>UG</Dropdown.Header>
                      <Nav.Link>Link 1</Nav.Link>
                      <Nav.Link>Link 2</Nav.Link>
                      <Nav.Link>Link 3</Nav.Link>
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
            </Nav>
          </Container>
          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
