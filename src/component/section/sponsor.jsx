import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const title = "Recruiters";

const sponsorList = [
  {
    imgUrl: "assets/images/recruiters/adani.png",
    imgAlt: "sponsor rajibraj91 rajibraj",
  },
  {
    imgUrl: "assets/images/recruiters/berger.png",
    imgAlt: "sponsor rajibraj91 rajibraj",
  },
  {
    imgUrl: "assets/images/recruiters/byju.png",
    imgAlt: "sponsor rajibraj91 rajibraj",
  },
  {
    imgUrl: "assets/images/recruiters/crest.png",
    imgAlt: "sponsor rajibraj91 rajibraj",
  },
  {
    imgUrl: "assets/images/recruiters/jeavio.png",
    imgAlt: "sponsor rajibraj91 rajibraj",
  },
  {
    imgUrl: "assets/images/recruiters/samsung.png",
    imgAlt: "sponsor rajibraj91 rajibraj",
  },
  {
    imgUrl: "assets/images/recruiters/tcs.png",
    imgAlt: "sponsor rajibraj91 rajibraj",
  },
];

const Sponsor = () => {
  return (
    <div className="sponsor-section ">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle ">Major</span>
          <h2 className="title">{title}</h2>
          {/* <h2 className="abs-title">{absTitle}</h2> */}
        </div>

        <div className="section-wrapper">
          <div className="sponsor-slider">
            <Swiper
              spaceBetween={20}
              slidesPerView={2}
              loop={"true"}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              breakpoints={{
                0: {
                  width: 0,
                  slidesPerView: 1,
                },
                768: {
                  width: 768,
                  slidesPerView: 3,
                },
                1200: {
                  width: 1200,
                  slidesPerView: 5.5,
                },
              }}
            >
              {sponsorList.map((val, i) => (
                <SwiperSlide key={i}>
                  <div className="sponsor-iten">
                    <div className="sponsor-thumb">
                      <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
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
};

export default Sponsor;
