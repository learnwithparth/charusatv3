import { Link } from "react-router-dom";

const subTitle = "University";
const title = "News";

export default function newsFrontPage() {
  return (
    <div className="style-2 pb-3  ">
      <div className="container ">
        <div className="section-header text-center">
          <span className="subtitle ">{subTitle}</span>
          <h2 className="title">{title}</h2>
        </div>
        <div className="row">
          <div class="col-4">
            <div class="course-item style-4">
              <div class="course-inner">
                <div class="course-thumb">
                  <img
                    src="./assets/images/uni-news/cadets.webp"
                    alt="cadets"
                  />
                </div>
                <div class="course-content">
                  <a href="#">
                    <p>Two cadets selected for the "Republic Day Camp"</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="course-item style-4">
              <div class="course-inner">
                <div class="course-thumb">
                  <img src="./assets/images/uni-news/ev3_tn.jpg" alt="unai" />
                </div>
                <div class="course-content">
                  <a href="#">
                    <p>CHARUSAT Students build Electric Car</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="course-item style-4">
              <div class="course-inner">
                <div class="course-thumb">
                  <img
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
