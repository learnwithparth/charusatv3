import { Link } from "react-router-dom";

const title = "Coming soon!";
const desc = "...";
const btnText = "Go Back To Home";

const ComingSoon = () => {
  return (
    <div className="four-zero-section padding-tb section-bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 col-sm-12 col-12">
            <div className="four-zero-content">
              <br />
              <h2 className="title">{title}</h2>
              <p>{desc}</p>
              <Link to="/home" className="lab-btn ">
                <span>
                  {btnText} <i className="icofont-external-link"></i>
                </span>
              </Link>
            </div>
          </div>
          {/* <div className="col-lg-8 col-sm-6 col-12">
            <div className="foue-zero-thumb">
              <img src="assets/images/coming_soon.jpeg" alt="CodexCoder" />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
