import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

const subTitle = "C H A R U S A T";
const title = (
  <h2 className="title">
    NAAC A<sup>+</sup> <span>University</span>
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
              <div className="banner-content">
                <h4 className="subtitle">{subTitle}</h4>
                {title}
                <p className="desc">{desc}</p>
                <Link to="/course" className="lab-btn">
                  <span>
                    Register for 12<sup>th</sup> Convocation
                  </span>
                </Link>
                <br />
                <br />
                <Link to="/course" className="lab-btn">
                  <span>{btnText}</span>
                </Link>
              </div>
              <br />
              <br />
              <Marquee speed="100" gradientWidth="150">
                <Link to="/course" className="lab-btn">
                  <span>{btnText}</span>
                </Link>
                ||||
                <Link to="/course" className="lab-btn">
                  <span>{btnText}</span>
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
