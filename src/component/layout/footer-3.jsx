import { Link } from "react-router-dom";
import GoogleMap from "../sidebar/googlemap";

const title = "Contact Details";
const desc =
  "Eduaid theme number one world class university in the world There are student are studing always in this university for all time.";
const courseTitle = "Courses";
const quickTitle = "Quick Links";
const googleMapTitle = "Locate us on Map";
const tweetTitle = "Recent Tweets";
const year = new Date().getFullYear();

const addressList = [
  {
    iconName: "icofont-google-map",
    text: "CHARUSAT Campus, Off. Nadiad-Petlad Highway, Changa 388 421",
  },
  {
    iconName: "icofont-phone",
    text: "+91 2697 265011/12",
  },
  {
    iconName: "icofont-envelope",
    text: "info@charusat.ac.in",
  },
];

const socialList = [
  {
    iconName: "icofont-facebook",
    siteLink: "https://www.facebook.com/thecharusat/",
    className: "facebook",
  },
  {
    iconName: "icofont-twitter",
    siteLink: "https://twitter.com/thecharusat?lang=en",
    className: "twitter",
  },
  {
    iconName: "icofont-linkedin",
    siteLink:
      "https://www.linkedin.com/school/charotar-university-of-science-&-technology-charusat-",
    className: "linkedin",
  },
  {
    iconName: "icofont-instagram",
    siteLink: "https://www.instagram.com/thecharusat/?hl=en",
    className: "instagram",
  },
  // {
  //     iconName: 'icofont-pinterest',
  //     siteLink: '#',
  //     className: 'pinterest',
  // },
];

const courseList = [
  {
    text: "All Courses",
    link: "#",
  },
  {
    text: "Forms and Admision materials",
    link: "#",
  },
  {
    text: "Professional Courses",
    link: "#",
  },
  {
    text: "Course Outline",
    link: "#",
  },
  {
    text: "Policy",
    link: "#",
  },
  {
    text: "FAQs",
    link: "#",
  },
  {
    text: "Online Course",
    link: "#",
  },
];

const quickList = [
  {
    text: "Exam Result",
    link: "https://charusat.edu.in:912/Uniexamresult/",
  },
  {
    text: "Pay Fees",
    link: "https://charusat.edu.in:912/FeesPaymentApp/",
  },
  {
    text: "Admissions",
    link: "#",
  },
  {
    text: "Downloads",
    link: "#",
  },
  {
    text: "Careers",
    link: "#",
  },
  {
    text: "Donations",
    link: "#",
  },
  {
    text: "The Act & First Statutes",
    link: "../../../files/statutes.pdf",
  },
  {
    text: "Policies and Procedures - Support Facilities",
    link: "#",
  },
  {
    text: "Code of Conduct",
    link: "#",
  },
];

const footerbottomList = [
  {
    text: "Faculty",
    link: "#",
  },
  {
    text: "Staff",
    link: "#",
  },
  {
    text: "Students",
    link: "#",
  },
  {
    text: "Alumni",
    link: "#",
  },
];

const FooterThree = () => {
  return (
    <>
      <div className="news-footer-wrap">
        <div className="fs-shape">
          <img
            src="assets/images/shape-img/03.png"
            alt="fst"
            className="fst-1"
          />
          <img
            src="assets/images/shape-img/04.png"
            alt="fst"
            className="fst-2"
          />
        </div>
        <br />
        <br />
        <footer className="style-2">
          <div className="footer-top dark-view padding-tb">
            <div className="container">
              <div className="row g-4 row-cols-xl-3 row-cols-sm-2 row-cols-1 justify-content-center">
                <div className="col">
                  <div className="footer-item our-address">
                    <div className="footer-inner">
                      <div className="footer-content">
                        <div className="title">
                          <h4>{title}</h4>
                        </div>
                        <div className="content">
                          {/* <p>{desc}</p> */}
                          <ul className="lab-ul office-address">
                            {addressList.map((val, i) => (
                              <li key={i}>
                                <i className={val.iconName}></i>
                                {val.text}
                              </li>
                            ))}
                          </ul>
                          <ul className="lab-ul social-icons">
                            {socialList.map((val, i) => (
                              <li key={i}>
                                <a
                                  href={val.siteLink}
                                  className={val.className}
                                >
                                  <i className={val.iconName}></i>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="footer-item">
                    <div className="footer-inner">
                      <div className="footer-content">
                        <div className="title">
                          <h4>{quickTitle}</h4>
                        </div>
                        <div className="content">
                          <ul className="lab-ul">
                            {quickList.map((val, i) => (
                              <li key={i}>
                                <a href={val.link}>{val.text}</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-item twitter-post">
                    <div className="footer-inner">
                      <div className="footer-content">
                        <div className="title">
                          <h4>{googleMapTitle}</h4>
                        </div>
                        <div className="content">
                          {/* <ul className="lab-ul"> */}
                          <GoogleMap />
                          <br />
                          <br />
                          {/* </ul> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="section-wrapper">
                <p>
                  &copy; {year} <Link to="/">C H A R U S A T</Link>{" "}
                </p>
                <div className="footer-bottom-list">
                  {footerbottomList.map((val, i) => (
                    <a href={val.link} key={i}>
                      {val.text}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default FooterThree;
