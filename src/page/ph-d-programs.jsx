import { Fragment } from "react";
import { Link } from "react-router-dom";

import Fellowship from "../files/PhD/Fellowship.pdf";
import Regulations from "../../src/files/PhD/Regulations.pdf";
import Supervisors from "../../src/files/PhD/Supervisors.pdf";
import Scholar from "../../src/files/PhD/Scholar.pdf";

const searchList = [
  {
    title: "PhD Fellowship Guidelines",
    btnText: "Read More",
    link: Fellowship,
    metaList: [
      {
        iconName: "icofont-calendar",
        text: "May 22,2023",
      },
    ],
  },
  {
    title: "PhD Latest Guidelines",
    btnText: "Read More",
    link: Regulations,
    metaList: [
      {
        iconName: "icofont-calendar",
        text: "May 22,2023",
      },
    ],
  },
  {
    title: "PhD Supervisors List",
    btnText: "Read More",
    link: Supervisors,
    metaList: [
      {
        iconName: "icofont-calendar",
        text: "May 22,2023",
      },
    ],
  },
  {
    title: "PhD Scholar List",
    btnText: "Read More",
    link: Scholar,
    metaList: [
      {
        iconName: "icofont-calendar",
        text: "May 22,2023",
      },
    ],
  },
];

const PhDPrograms = () => {
  return (
    <Fragment>
      <div className="blog-section padding-tb section-bg">
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
    </Fragment>
  );
};

export default PhDPrograms;
