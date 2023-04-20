import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
// import NewsSlider from "../section/NewsSlider";

import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "../../assets/css/slider-animations.css";
import "../../assets/css/slider-banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Autoplay,
  Pagination,
  EffectFade,
  Scrollbar,
  A11y,
} from "swiper";

import "swiper/swiper-bundle.min.css";

const slides = [
  { title: "First item", description: "Lorem ipsum" },
  { title: "Second item", description: "Lorem ipsum" },
];

const content = [
  {
    title: "CHARUSAT",
    description: "Accreditated with 'A+' Grade by NAAC",
    button: "Apply Now",
    image: "assets/images/home/s1-updated.png",
    user: "Luan Gjokaj",
    userProfile: "https://i.imgur.com/JSW6mEk.png",
  },
  {
    title: "Laboratories",
    description:
      "Highly equipped and advanced labs for practical learning and in-depth research",
    button: "Apply Now",
    image: "assets/images/home/lab.webp",
    user: "Erich Behrens",
    userProfile: "https://i.imgur.com/0Clfnu7.png",
  },
  {
    title: "Hostels",
    description:
      "Our hostels give out the vibes of comfort and contentment, just like home",
    button: "Apply Now",
    image: "assets/images/home/s3.webp",
    user: "Bruno Vizovskyy",
    userProfile: "https://i.imgur.com/4KeKvtH.png",
  },
  {
    title: "Wifi Campus",
    description:
      "Connect with the world on CHARUSAT that is entirely wi-fi enabled",
    button: "Apply Now",
    image: "assets/images/home/s4.webp",
    user: "Bruno Vizovskyy",
    userProfile: "https://i.imgur.com/4KeKvtH.png",
  },
  {
    title: "Canteen",
    description:
      "Wholesome meals served as a part of indian and world cuisines replete with all 5 flavors",
    button: "Apply Now",
    image: "assets/images/home/canteen.webp",
    user: "Bruno Vizovskyy",
    userProfile: "https://i.imgur.com/4KeKvtH.png",
  },
  {
    title: "Infrastucture",
    description:
      "Future-ready acamedic infrastructures with ergonomically designed classrooms, ICT and climatization",
    button: "Apply Now",
    image: "assets/images/home/s7.webp",
    user: "Bruno Vizovskyy",
    userProfile: "https://i.imgur.com/4KeKvtH.png",
  },
  {
    title: "ATHLETICS & FITNESS",
    description:
      "Physical benefits of recreational sports on the sports fields and in gymnasium facilitates. Indoor sports facility for mental endurance and relaxation",
    button: "Apply Now",
    image: "assets/images/home/s8.webp",
    user: "Bruno Vizovskyy",
    userProfile: "https://i.imgur.com/4KeKvtH.png",
  },
  {
    title: "Green Campus",
    description: "Creating a Sustainable and Eco-Friendly Campus Environment",
    button: "Apply Now",
    image: "assets/images/home/s9.png",
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
      {/* <Slider className="slider-wrapper" autoplay="4000">
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
              <button>{item.button}</button>
            </div>
            {/* <section>
              <img src={item.userProfile} alt={item.user} />
              <span>
                Posted by <strong>{item.user}</strong>
              </span>
            </section> }
          </div>
        ))}
      </Slider> */}
      <Swiper
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect={"fade"}
        spaceBetween={30}
      >
        {content.map((item, index) => (
          <SwiperSlide
            className="slider-content"
            style={{
              height: "750px",
              width: "100%",
              // background: `url('${item.image}') no-repeat center center`,
            }}
            key={item.index}
          >
            <img
              src={item.image}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div className="inner">
              <div
                className="h1 main-text-slider animated-text-front-page"
                style={{
                  fontFamily: "Playfair Display",
                  fontweight: "700",
                }}
              >
                {item.title}
              </div>
              <br /> <br /> <br /> <br />
              <br />
              <div className="subTitle-slider">{item.description}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
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
