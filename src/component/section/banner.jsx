import { Link } from "react-router-dom";

const subTitle = "Hub of education";
const title = (
  <h2 className="title">
    <span className="d-lg-block">Welcome to the </span> A<sup>+</sup> Grade{" "}
    <span className="d-lg-block">University</span>
  </h2>
);
const desc = "Welcome to the A+ Graded Univeristy.";

const catagoryList = [
  {
    name: "Figma",
    link: "#",
  },
  {
    name: "Adobe XD",
    link: "#",
  },
  {
    name: "illustration",
    link: "#",
  },
  {
    name: "Photoshop",
    link: "#",
  },
];

const shapeList = [
  {
    name: "16M Students Happy",
    link: "#",
    className: "ccl-shape shape-1",
  },
  {
    name: "130K+ Total Courses",
    link: "#",
    className: "ccl-shape shape-2",
  },
  {
    name: "89% Successful Students",
    link: "#",
    className: "ccl-shape shape-3",
  },
  {
    name: "23M+ Learners",
    link: "#",
    className: "ccl-shape shape-4",
  },
  {
    name: "36+ Languages",
    link: "#",
    className: "ccl-shape shape-5",
  },
];

const Banner = () => {
  return (
    <section className="banner-section">
      <div className="container">
        <div className="section-wrapper">
          <div className="row align-items-center">
            <div className="col-xxl-5 col-xl-6 col-lg-10">
              <div className="banner-content">
                
                
                <h6 className="subtitle text-uppercase fw-medium">
                  {subTitle}
                </h6>
                {title}
                <h3>Current Happening</h3>
                <Link to="/blog-single" className="lab-btn">
                  <span>
                    Announcement 1{' '}
                    <i className="icofont-external-link"></i>
                  </span>
                </Link>
                <br/>
                <br/>
                <Link to="/blog-single" className="lab-btn">
                  <span>
                    Announcement 2{' '}
                    <i className="icofont-external-link"></i>
                  </span>
                </Link>
                {/* <p className="desc">{desc}</p> */}
                {/* <form action="/">
                                    <div className="banner-icon">
                                        <i className="icofont-search"></i>
                                    </div>
                                    <input type="text" placeholder="Keywords of your course" />
                                    <button type="submit">Search Course</button>
                                </form> */}
                {/* <div className="banner-catagory d-flex flex-wrap">
                                    <p>Most Popular : </p>
                                    <ul className="lab-ul d-flex flex-wrap">
                                        {catagoryList.map((val, i) => (
                                            <li key={i}><a href={val.link}>{val.name}</a></li>
                                        ))}
                                    </ul>
                                </div> */}
              </div>
            </div>
            <div className="col-xxl-7 col-xl-6">
              <div className="banner-thumb">
                <img src="assets/images/banner/01.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="all-shapes"></div>
      <div className="cbs-content-list d-none">
        <ul className="lab-ul">
          {shapeList.map((val, i) => (
            <li className={val.className} key={i}>
              <a href={val.link}>{val.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Banner;
