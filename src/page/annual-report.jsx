import { Link } from "react-router-dom";

const searchList = [
  {
    title: "Annual Report 2020-21",
    btnText: "Download",
    link: "/files/CHARUSAT_12thAnnualReport.pdf",
    metaList: [
      {
        iconName: "icofont-calendar",
        text: "2020-21",
      },
    ],
  },
  {
    title: "Annual Report 2019-20",
    btnText: "Download",
    link: "/files/CHARUSAT_11thAnnualReport.pdf",
    metaList: [
      {
        iconName: "icofont-calendar",
        text: "2019-20",
      },
    ],
  },
  {
    title: "Annual Report 2018-19",
    btnText: "Download",
    link: "/files/CHARUSAT_10thAnnualReport.pdf",
    metaList: [
      {
        iconName: "icofont-calendar",
        text: "2018-19",
      },
    ],
  },
  {
    title: "Annual Report 2017-18",
    btnText: "Download",
    link: "/files/CHARUSAT_9thAnnualReport.pdf",
    metaList: [
      {
        iconName: "icofont-calendar",
        text: "2017-18",
      },
    ],
  },
  {
    title: "Annual Report 2016-17",
    btnText: "Download",
    link: "/files/CHARUSAT_8thAnnualReport.pdf",
    metaList: [
      {
        iconName: "icofont-calendar",
        text: "2016-17",
      },
    ],
  },
];

const AnnualReport = () => {
  return (
    <>
      <div className="blog-section padding-tb section-bg">
        <h1 className="inner-title text-center mb-5">
          Annual Reports of the Institute
        </h1>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    {searchList.map((val, i) => (
                      <div className="col" key={i}>
                        <div className="post-item style-2">
                          <div className="post-inner">
                            <div className="post-content">
                              <Link to={val.link}>
                                <h3>{val.title}</h3>
                              </Link>
                              <div className="meta-post">
                                <ul className="lab-ul">
                                  {val.metaList.map((val, i) => (
                                    <li key={i}>
                                      <i className={val.iconName}></i>
                                      {val.text}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <Link to={val.link} className="lab-btn">
                                <span>
                                  {val.btnText}{" "}
                                  <i className="icofont-external-link"></i>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnnualReport;
