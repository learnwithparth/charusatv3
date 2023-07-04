import { Link } from "react-router-dom";
import RepublicDayCamp from "../../files/news/Achievement_RDC-2022.pdf";

const subTitle = "University";
const title = "News";

export default function newsFrontPage() {
  const imageStyle = {
    height: "200px",
    objectFit: "scale-down",
    width: "100%",
  };

  return (
    <div className="style-2 pb-3  ">
      <div className="container ">
        <div className="section-header text-center">
          <span className="subtitle ">{subTitle}</span>
          <h2 className="title">{title}</h2>
        </div>
        <div className="row">
          <div class="col">
            <div class="course-item style-4">
              <div class="course-inner">
                <div class="course-thumb">
                  <img
                    src="./assets/images/uni-news/cadets.webp"
                    alt="cadets"
                    style={imageStyle}
                  />
                </div>
                <div class="course-content">
                  <a href={RepublicDayCamp}>
                    <p>Two cadets selected for the "Republic Day Camp"</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="course-item style-4">
              <div class="course-inner">
                <div class="course-thumb">
                  <img
                    src="./assets/images/uni-news/ev3_tn.jpg"
                    alt="unai"
                    style={imageStyle}
                  />
                </div>
                <div class="course-content">
                  <a href="#">
                    <p>Charusat Students build Electric Car</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="course-item style-4">
              <div class="course-inner">
                <div class="course-thumb">
                  <img
                    style={imageStyle}
                    src="./assets/images/uni-news/mou.png"
                    alt="Charusat University inks MoU with FRIGE HOUSE"
                  />
                </div>
                <div class="course-content">
                  <a href="#">
                    <p>Charusat University inks MoU with FRIGE HOUSE</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
