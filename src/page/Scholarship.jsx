import { Fragment } from "react";
import Contact from "../component/section/contact";
import Image from "react-bootstrap/Image";

const Scholarship = () => {
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
                            <h3>Scholarship</h3>
                            <div className="meta-post">
                              {/* <Image src="./assets/images/CDPC_banner.jpg" />
                              <br />
                              <br /> */}
                              <p>
                                CHARUSAT offers a variety of scholarships to
                                encourage and facilitate academic and research
                                pursuits.
                              </p>
                              <p style={{ color: "#3db166" }}></p>
                              <br />
                              <p style={{ "text-align": "justify" }}></p>
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
              name="Dr. Mayur Sutaria Head, IQAC "
              email="iqac@charusat.ac.in"
              phone="+91-2697-265213"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Scholarship;
