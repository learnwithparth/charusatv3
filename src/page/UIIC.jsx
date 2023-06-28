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
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="main-part">
                
                {/*  */}
                <div className="row g-4 row-cols-1 justify-content-center bg-white p-4">
                <h3>University Industry Interaction Cell</h3>
                <hr />
                  <h5 className="opps">OBJECTIVE</h5>
                  <p className="not-ruselt">
                    UIIC has been established to facilitate collaboration
                    amongst academicians, scientists, and industry.
                  </p>
                  <h5>UIIC ACTIVITIES</h5>
                  <ol>
                    {featureList.map((val, i) => (
                      <li key={i} className="mx-4 mb-3">
                        {val}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
            <Contact
              name="Dr. Samir Patel"
              email="samirpatel.ph@charusat.ac.in"
              phone="+91 26972 65161"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIIC;
