import React from "react";
import Contact from "../component/section/contact";
import { Link } from "react-router-dom";

const UIIC = () => {
  const featureList = [
    "Signing MOU with industries on behalf of the university.",
    "Exchanging personnel between university and industries for knowledge and skill sharing.",
    "Promoting sponsored and R&D projects from industries.",
    "Coordinating and Promoting the consultancy services",
    "Organizing industrial academia meets to highlight expertise available at the university",
    "Organizing industrial training and visits for students and faculty members",
    "Curriculum development, evaluation of project work etc. in consultation with industry personnel",
    "Offering corporate training to industrial personnel",
  ];

  return (
    <div>
      <div className="course-single-section padding-tb section-bg">
        <div className="blog-section section-bg mb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-12">
                <article>
                  <div className="section-wrapper">
                    <div className="row row-cols-1 justify-content-center g-4">
                      <div className="col">
                        <div className="post-item style-2">
                          <div className="post-inner">
                            <div className="post-content">
                              <h2 className="opps">OBJECTIVE</h2>
                              <h4 className="not-ruselt">
                                UIIC has been established to facilitate
                                collaboration amongst academicians, scientists,
                                and industry.
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="main-part">
                <div className="course-item">
                  <div className="course-inner">
                    <div className="course-content">
                      <h3>UIIC ACTIVITIES</h3>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="row g-4 row-cols-1 justify-content-center">
                  {featureList.map((val, i) => (
                    <div className="col" key={i}>
                      <div className="feature-item">
                        <div
                          className="feature-inner"
                          style={{ padding: "25px" }}
                        >
                          <div className="feature-content">
                            <p style={{ margin: 0 }}>
                              <h6 style={{ margin: 0 }}>{val}</h6>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <Contact
              name="Dr. Samir Patel"
              email="samirpatel.ph@charusat.ac.in"
              phone="NA"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIIC;
