import { Link } from "react-router-dom";

const subTitle = "University";
const title = "News";

export default function newsFrontPage() {
  return (
    <div className="style-2  ">
      <div className="container">
        <hr />
        <br />
        <div className="section-header text-center">
          <span className="subtitle ">{subTitle}</span>
          <h2 className="title">{title}</h2>
        </div>
        <div className="row">
          <div class="col-4">
            <div class="course-item style-4">
              <div class="course-inner">
                <div class="course-thumb">
                  <img src="assets/images/initiative/ICC.jpg" alt="unai" />
                </div>
                <div class="course-content">
                  <a href="#">
                    <p>
                      CHARUSAT is now a member of UNAI (United Nations Academic
                      Impact)
                    </p>
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
                    src="assets/images/initiative/RURAL%20EDUCATION.jpg"
                    alt="unai"
                  />
                </div>
                <div class="course-content">
                  <a href="#">
                    <p>
                      CHARUSAT is now a member of UNAI (United Nations Academic
                      Impact)
                    </p>
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
                    src="assets/images/initiative/NABL%20&%20TESTING%20LAB.jpg"
                    alt="unai"
                  />
                </div>
                <div class="course-content">
                  <a href="#">
                    <p>
                      CHARUSAT is now a member of UNAI (United Nations Academic
                      Impact)
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
