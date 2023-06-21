import { Fragment } from "react";
import Contact from "../component/section/contact";
import { color } from "@mui/system";
import "../assets/css/EOC.css";

const CPSH = () => {
  return (
    <Fragment>
      {/* <PageHeader title={'4 Results found for: Business'} curPage={'Search Result'} /> */}
      <div className="blog-section padding-tb section-bg">
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
                            <h3>
                              Cell for Prevention of Sexual Harassment (CPSH)
                            </h3>
                            <div className="meta-post">
                              <h4>Objective</h4>
                              The objectives of the Cell and its policy are:
                              <ul>
                                <li>
                                  To create a healthy working environment for
                                  both the genders by establishing guidelines to
                                  deter any Sexual Harassment
                                </li>
                                <li>
                                  To encourage raising of awareness about gender
                                  sensitivity and gender equality at campus
                                </li>
                                <li>
                                  To set a process of accepting grievances on
                                  sexual harassment, gender dignity, their fair
                                  investigation and appropriate action on the
                                  findings of the enquiries
                                </li>
                              </ul>
                            </div>
                            <div className="meta-post">
                              <h4>Definition</h4>
                              Sexual Harassment includes such unwelcome sexually
                              determined behavior by any person individually or
                              in association with other persons or by any person
                              in authority, whether either directly or by
                              implications, such as following:
                              <ul
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  alignItems: "flex-start",
                                  justifyContent: "flex-start",
                                }}
                              >
                                <li>Eve teasing</li>
                                <li>
                                  Jokes causing or likely to cause awkwardness
                                  or embarrassment
                                </li>
                                <li>Unsavory remarks </li>
                                <li>Gender Based insults or sexiest remarks</li>
                                <li>Innuendos and taunts </li>
                                <li>
                                  Unwelcome sexual overtone in any manner such
                                  as over telephone (Obnoxious telephone calls)
                                  and the like
                                </li>
                                <li>
                                  Touching or brushing against any part of the
                                  body and the like
                                </li>
                                <li>
                                  Display of pornographic or other offensive or
                                  derogatory pictures, cartoons pamphlets or
                                  sayings
                                </li>
                                <li>Forcible physical touch or molestation </li>
                                <li>
                                  Physical confinement against one’s will and
                                  any other act likely to violate one’s privacy
                                </li>
                                <li>
                                  Unwelcomed physical contacts and advances
                                </li>
                                <li>A communication for sexual favors </li>
                                <li>
                                  Any other unwelcome, physical, verbal or
                                  non-verbal conduct of sexual nature directly,
                                  indirectly, or through electronic media like
                                  SMS, MMS, Social Networking sites etc.
                                </li>
                                <li>
                                  Any act of Gender Discrimination such as
                                  denial of employment to women due to women’s
                                  reproductive role, or rigidity in attitude,
                                  which hinders the reproductive role of women
                                  (for example, non-flexible work hours and
                                  timings, non-availability of day care
                                  services, lack of maternity leave, etc).
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <Contact
              name="Contact Person: Dr. Hiteshri Shashtri"
              email="hiteshrishastri.cv@charusat.ac.in"
              phone=" 5092"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CPSH;
