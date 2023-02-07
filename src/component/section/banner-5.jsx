import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import Button from "react-bootstrap/Button";
// import NewsSlider from "../section/NewsSlider";

const subTitle = "C H A R U S A T";
const title = (
  <h2 className="title">
    NAAC A+ <span>University</span>
  </h2>
);
const desc = "Current Happening";
const btnText = "View Lincon’s Courses";

const BannerFive = () => {
  return (
    <section className="banner-section style-4" style={{ height: "auto" }}>
      <div className="container">
        <div className="section-wrapper">
          <div className="row">
            <div className=" col">
              <div className="banner-content ">
                <h4 className="subtitle">{subTitle}</h4>
                {title}
                {/* <p className="desc">{desc}</p> */}
                {/* <Link to="/course" className="lab-btn">
                  <span>
                    Register for 12<sup>th</sup> Convocation - Click here
                  </span>
                </Link>
                <br />
                <br />
                <br /> */}
                {/* <NewsSlider /> */}
                {/* <br />
                <br />
                <Link to="/course" className="lab-btn">
                  <span>{btnText}</span>
                </Link> */}
                <Marquee speed="50" gradientWidth="150">
                  <Link to="/course" className="">
                    <span className="px-1">
                      Tender for Providing Canteen Services to CHARUSAT
                    </span>
                  </Link>
                  <span>&#x2731;</span>
                  <Link to="/course">
                    <span className="px-1">
                      Registration for 12th Convocation
                    </span>
                  </Link>
                  <span>&#x2731;</span>
                  <Link to="/course">
                    <span>Notice for 12th Convocation</span>
                  </Link>
                  <span>&#x2731;</span>
                </Marquee>
                <br />
                <Button href="#" variant="danger" size="sm">
                  View All <i className="icofont-long-arrow-right"></i>
                </Button>{" "}
              </div>
              <br />
              {/* <Link
                href="www.google.com"
                style={{
                  "text-decoration": "underline",
                  "text-align": "right",
                  fontSize: "1.2rem",
                  padding: "1rem",
                }}
              >
                View All <i className="icofont-long-arrow-right"></i>
              </Link> */}

              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerFive;
