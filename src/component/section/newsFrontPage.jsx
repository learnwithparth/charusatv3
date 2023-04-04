import { Link } from "react-router-dom";

const subTitle = "University";
const title = "News";

export default function newsFrontPage() {
  return (
    <div className="style-2  ">
      <div className="container">
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
                    src="https://charusat.ac.in/images/news/IMG-20211219-WA0082.webp"
                    alt="unai"
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
                  <img
                    src="https://charusat.ac.in/cspit/ee/img/portfolio/ev3_tn.jpg"
                    alt="unai"
                  />
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
                    src="https://www.shutterstock.com/image-vector/mou-memorandum-understanding-type-agreement-260nw-1701328165.jpg"
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
