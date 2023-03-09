import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
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
    <section className="banner-section style-5">
      <div className="container">
        <div className="section-wrapper">
          <div className="row">
            <div className="offset-md-6 col-xl-6">
              <div className="banner-content m-0">
                <h4 className="subtitle">{subTitle}</h4>
                {title}
                {/* <p className="desc">{desc}</p> */}

                {/* <Link to="/course" className="lab-btn">
                  <span>
                    Register for 12<sup>th</sup> Convocation - Click here
                  </span>
                </Link> */}
                <br />
                <br />
                <br />
                {/* <NewsSlider /> */}
                {/* <br />
                <br />
                <Link to="/course" className="lab-btn">
                  <span>{btnText}</span>
                </Link> */}
              </div>
              <br />
              <br />

              <Marquee speed="50" gradientWidth="150">
                <Link to="/course" className="lab-btn">
                  <span>Tender for providing Canteen Services to CHARUSAT</span>
                </Link>
                ||||
                <Link to="/course" className="lab-btn">
                  <span>Registration for 12th Convocation</span>
                </Link>
                ||||
                <Link to="/course" className="lab-btn">
                  <span>Notice for 12th Convocation</span>
                </Link>
                ||||
                <Link to="/course" className="lab-btn">
                  <span>PG Admission under DASA Scheme</span>
                </Link>
                ||||
                <Link to="/course" className="lab-btn">
                  <span>DASA Online Reporting Form</span>
                </Link>
                ||||
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerFive;
