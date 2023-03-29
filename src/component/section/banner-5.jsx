import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
// import NewsSlider from "../section/NewsSlider";

import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "../../assets/css/slider-animations.css";
import "../../assets/css/slider-banner.css";

const slides = [
  { title: "First item", description: "Lorem ipsum" },
  { title: "Second item", description: "Lorem ipsum" },
];

const content = [
  {
    title: "NAAC 'A+' University ",
    description: "Take a tour",
    button: "Apply Now",
    image: "http://172.16.102.120:9090/upload/images/home/s7.webp",
    user: "Luan Gjokaj",
    userProfile: "https://i.imgur.com/JSW6mEk.png",
  },
  {
    title: "Laboratories",
    description:
      "Highly equipped and advanced labs for practical learning and in-depth research",
    button: "Apply Now",
    image: "http://172.16.102.120:9090/upload/images/home/s8.webp",
    user: "Erich Behrens",
    userProfile: "https://i.imgur.com/0Clfnu7.png",
  },
  {
    title: "Hostels",
    description:
      "Our hostels give out the vibes of comfort and contentment, just like home",
    button: "Apply Now",
    image: "http://172.16.102.120:9090/upload/images/home/s3.webp",
    user: "Bruno Vizovskyy",
    userProfile: "https://i.imgur.com/4KeKvtH.png",
  },
];

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
    <section className="d-block clearfix">
      <Slider className="slider-wrapper" autoplay="4000">
        {content.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            style={{
              background: `url('${item.image}') no-repeat center center`,
            }}
          >
            <div className="inner">
              <div className="h1 main-text-slider animated-text-front-page">
                {item.title}
              </div>
              <br /> <br /> <br /> <br />
              <br />
              <div className="subTitle-slider">{item.description}</div>
              {/* <button>{item.button}</button> */}
            </div>
            {/* <section>
              <img src={item.userProfile} alt={item.user} />
              <span>
                Posted by <strong>{item.user}</strong>
              </span>
            </section> */}
          </div>
        ))}
      </Slider>
      <br />
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
