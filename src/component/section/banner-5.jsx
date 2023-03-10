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
    <section className="banner-section style-4   ">
      {/* <p className="text-center mt-1">
        <span
          className="text-center h1 bg-orange text-white p-2  

"
        >
          NAAC A+
        </span>
      </p>
      <br /> */}
      {/* <p className="text-center">
        <span
          className="text-center bg-blue text-white p-2  

"
        >
          Charotar University of Science and Technology
        </span>
      </p> */}
    </section>
  );
};

export default BannerFive;
