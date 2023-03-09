import { Link } from "react-router-dom";

const subTitle = "University";
const title = "News";

export default function newsFrontPage() {
  return (
    <div className="style-2 padding-tb ">
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
                  <img src="assets/images/uni-news/unai.png" alt="unai" />
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
                    src="https://charusat.ac.in/images/news/Gujarat%20Samachar%20CHARUSAT%20Day%20Care%20Centre%20News%2010-10-2021.jpeg"
                    alt=" image"
                  />
                </div>
                <div class="course-content">
                  <a href="/charusatv3/course-single">
                    <p>
                      Day care center facility now available @CHARUSAT Campus
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
                    src="https://charusat.ac.in/images/news/Divya%20Samachar%20EE%20Solar%20Car%20News%2020-09-2021.jpg"
                    alt=" image"
                  />
                </div>
                <div class="course-content">
                  <a href="#">
                    <p>CHARUSAT build Electric Car</p>
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
