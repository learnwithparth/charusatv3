import { Link } from "react-router-dom";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const subTitle = "Why are we unique?";
const title = "Initiatives";

const eventSliderList = [
  {
    imgUrl: "assets/images/initiative/SPACE RESEARCH CELL.jpg",
    imgAlt: "CSRTC image",
    title: "CHARUSAT Space Research and Technology Center",
    btnText: "Read More",
    url: "/crtc",
  },
  {
    imgUrl: "assets/images/event/2.jpg",
    imgAlt: "KRADLE image",
    title: "Dr. K. C. Patel Research & Development Center",
    btnText: "Read More",
    url: "https://kradle.charusat.ac.in/",
  },
  {
    imgUrl: "assets/images/initiative/RURAL EDUCATION.jpg",
    imgAlt: "CREDP image",
    title: "CHARUSAT Rural Education Development Program",
    btnText: "Read More",
    url: "https://www.charusat.ac.in/credp.php",
  },
  {
    imgUrl: "assets/images/initiative/ICC.jpg",
    imgAlt: "ICC image",
    title: "International Cosmology Center (ICC)",
    btnText: "Read More",
    url: "https://charusat.irins.org/faculty/index/International+Centre+for+Cosmology+ICC",
  },
  {
    imgUrl: "assets/images/initiative/SDG HANDPRINT ACTION LAB.png",
    imgAlt: "SDG Lab image",
    title: "SDG Handprint Action Lab",
    btnText: "Read More",
    url: "/coming-soon",
  },
  {
    imgUrl: "assets/images/initiative/HRDC.png",
    imgAlt: "HRDC image",
    title: "Pri. B. I. Patel Human Resource Development Center",
    btnText: "Read More",
    url: "/coming-soon",
  },
  {
    imgUrl: "assets/images/initiative/EDIC.jpg",
    imgAlt: "EDIC image",
    title: "Entrepreneurship Development and Incubation Cell",
    btnText: "Read More",
    url: "./edic",
  },
  {
    imgUrl: "assets/images/initiative/IIC_2.jpg",
    imgAlt: "UIIC image",
    title: "University Industry Interaction Cell",
    btnText: "Read More",
    url: "./university-industry-interaction-cell",
  },
  {
    imgUrl: "assets/images/initiative/NABL & TESTING LAB.jpg",
    imgAlt: "NABL Lab image",
    title: "NABL & Testing Facilities",
    btnText: "Read More",
    url: "/coming-soon",
  },
];

export default function initiatives() {
  const imageStyle = {
    height: "200px",
    objectFit: "cover",
    width: "100%",
  };

  return (
    <div className="event-section style-2 padding-tb section-bg-ash">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle ">{subTitle}</span>
          <h2 className="title">{title}</h2>
        </div>
        <div className="section-wrapper">
          <div className="event-navi-item event-slider-next">
            <i className="icofont-rounded-double-right"></i>
          </div>
          <div className="event-navi-item event-slider-prev">
            <i className="icofont-rounded-double-left"></i>
          </div>
          <div className="event-sliders overflow-hidden">
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              loop={"true"}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: ".event-slider-prev",
                nextEl: ".event-slider-next",
              }}
              modules={[Autoplay, Navigation]}
              breakpoints={{
                0: {
                  width: 0,
                  slidesPerView: 1,
                },
                768: {
                  width: 768,
                  slidesPerView: 2,
                },
                1200: {
                  width: 1200,
                  slidesPerView: 3.7,
                },
              }}
            >
              {eventSliderList.map((val, i) => (
                <SwiperSlide key={i}>
                  <div className="event-item style-2">
                    <div className="event-inner">
                      <a href={val.url}>
                        <div className="event-thumb">
                          <img
                            src={`${val.imgUrl}`}
                            alt={`${val.imgAlt}`}
                            style={imageStyle}
                          />
                        </div>
                        <div className="event-content">
                          <h5 className="pt-3">{val.title}</h5>
                          {/* <h2>{val.price}</h2>
                                                <span>{val.duration}</span>
                                                <ul className="lab-ul">
                                                    {val.servList.map((val, i) => (
                                                        <li key={i}>{val.text}</li>
                                                    ))}
                                                </ul> */}
                          {/* <Link to="/login" className="lab-btn">
                          <span>{val.btnText}</span>
                        </Link> */}
                        </div>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
