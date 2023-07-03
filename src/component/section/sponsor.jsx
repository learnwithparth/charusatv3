import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const title = "Recruiters";

const sponsorList = [
  {
    imgUrl: "https://charusat.ac.in/images/recruiters/placement/jaro.png",
    imgAlt: "Jaro Education",
  },
  {
    imgUrl: "https://charusat.ac.in/images/recruiters/placement/in.png",
    imgAlt: "Indian Navy",
  },
  {
    imgUrl: "https://charusat.ac.in/images/recruiters/placement/gsfc.png",
    imgAlt: "GSFC",
  },
  {
    imgUrl: "https://charusat.ac.in/images/recruiters/placement/ops.png",
    imgAlt: "OPS",
  },
  {
    imgUrl: "https://charusat.ac.in/images/recruiters/placement/mg.png",
    imgAlt: "MG",
  },
  {
    imgUrl: "https://charusat.ac.in/images/recruiters/placement/evosys.png",
    imgAlt: "Evosys",
  },
  {
    imgUrl: "https://charusat.ac.in/images/recruiters/placement/tbea.png",
    imgAlt: "TBEA",
  },
  {
    imgUrl: "https://charusat.ac.in/images/recruiters/placement/meditab.png",
    imgAlt: "Meditab",
  },
  {
    imgUrl: "https://charusat.ac.in/images/recruiters/placement/tr.png",
    imgAlt: "TR",
  },
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
  {
    imgUrl: "assets/images/recruiters/motorola.png",
    imgAlt: "sponsor rajibraj91 rajibraj",
  },
  {
    imgUrl: "assets/images/recruiters/icici.jpeg",
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
          <div className="sponsor-slider row">
            {sponsorList.map((val, i) => (
              <div key={i} className="col-md-2">
                <div className="sponsor-iten">
                  <div className="sponsor-thumb bg-white border p-3 m-2 rounded">
                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
