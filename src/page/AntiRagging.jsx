import { Fragment } from "react";

const AntiRagging = () => {
  const data = [
    {
      img: "https://www.charusat.ac.in/Anti-Ragging/1-Student-undertaking.jpg",
      title: "Student undertaking regarding non-involvement in ragging act",
    },
    {
      img: "https://www.charusat.ac.in/Anti-Ragging/2-Anti-ragging-awareness.jpg",
      title: "Anti-ragging campaign/awareness across the Campus",
    },
    {
      img: "https://www.charusat.ac.in/Anti-Ragging/3-Surveillance-through-CCTV.jpg",
      title: "Surveillance through CCTV in the entire campus",
    },
    {
      img: "https://www.charusat.ac.in/Anti-Ragging/4-Anti-ragging-workshop.jpg",
      title: "Anti-ragging workshops, seminars, & other activities",
    },
    {
      img: "https://www.charusat.ac.in/Anti-Ragging/5-meetings-by-ARC.JPG",
      title:
        "Regular meetings by Anti-Ragging Committee to appraise the situation",
    },
    {
      img: "https://www.charusat.ac.in/Anti-Ragging/6-Commencement-Celebration.JPG",
      title:
        "Commencement Celebration to make a bond between freshers and seniors",
    },
  ];

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
                            <h3>Anti Ragging Committee</h3>
                            <hr />
                            <br />
                            <img
                              src="https://www.charusat.ac.in/Anti-Ragging/ragging_img.jpg"
                              alt="Anti Ragging Committee"
                              className="img-fluid"
                            />
                            <br />
                            <br />
                            <br />

                            <h5>Ragging is a CRIME</h5>
                            <p style={{ fontSize: "1rem" }}>
                              Ragging can lead to Suspension, Rustication or
                              Police arrest
                            </p>
                            <p style={{ fontSize: "1rem" }}>
                              In pursuance to the UGC guidelines, CHARUSAT has
                              constituted an Anti-Ragging Committee. The
                              Committee is committed to eliminating ragging in
                              all its forms.
                            </p>
                            <hr />
                            <h5>Mechanism</h5>
                            <p style={{ fontSize: "1rem" }}>
                              CHARUSAT has zero-tolerance towards ragging in any
                              form. Any individual who is subjected to ragging
                              by any student or any other person can report the
                              incident to the member/Convener/Chairman of
                              Anti-ragging Committee or Head of the
                              Institute/Department. The Anti-ragging Committee
                              will take prompt and appropriate action on receipt
                              of the complaint in line with the guidelines
                              issued by UGC.
                            </p>
                            <hr />
                            <h5>Our Measures / Activities to Curb Ragging</h5>
                            {/*  */}
                            <div className="row g-4 justify-content-center row-cols-xl-2 row-cols-lg-2 row-cols-md-1 row-cols-1 course-filter">
                              {/*  */}
                              {data.map((item, id) => {
                                return (
                                  <div className="col" key={id}>
                                    <div className="post-item style-2">
                                      <div className="post-inner">
                                        <div className="post-thumb">
                                          <img
                                            src={item.img}
                                            alt="Anti Ragging Committee"
                                            className="img-fluid"
                                          />
                                        </div>
                                        <div className="post-content">
                                          <p style={{ fontSize: "1rem" }}>
                                            {item.title}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                              {/*  */}
                            </div>
                            <br />
                            <hr />
                            <br />
                            <h5>
                              CHARUSAT AIMS TO OFFER A SAFE LEARNING ENVIRONMENT
                              FOR ALL STUDENTS
                            </h5>
                            <ul className="lab-ul">
                              <li>
                                <i className="icofont-tick-mark"></i>{" "}
                                Familiarize yourself with the most up-to-date
                                information on
                                <ul>
                                  {[
                                    {
                                      name: "UGC Anti-Ragging Policy",
                                      link: "https://www.ugc.ac.in/oldpdf/ragging/gazzetaug2010.pdf",
                                    },
                                    {
                                      name: "UGC Ragging Related Circulars",
                                      link: "https://www.ugc.ac.in/page/Ragging-Related-Circulars.aspx",
                                    },
                                  ].map((item, id) => (
                                    <li key={id}>
                                      <a
                                        style={{
                                          color: "#0066b3",
                                        }}
                                        href={item.link}
                                        target="_blank"
                                        rel="noreferrer"
                                      >
                                        {item.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                                <li>
                                  <i className="icofont-tick-mark"></i>{" "}
                                  Understand the student -{" "}
                                  <a
                                    style={{
                                      color: "#0066b3",
                                    }}
                                    href="https://www.charusat.ac.in/Anti-Ragging/Understand%20the%20student_Guidelines%20ARC.pdf"
                                    target="_blank"
                                  >
                                    Guidelines
                                  </a>
                                </li>
                                <li>
                                  <i className="icofont-tick-mark"></i>{" "}
                                  <a
                                    style={{
                                      color: "#0066b3",
                                    }}
                                    href="https://www.charusat.ac.in/documents/pdfs/ar/Anti%20Ragging%20committee%202021.pdf"
                                    target="_blank"
                                  >
                                    Circular Anti-Ragging Committee
                                  </a>
                                </li>
                                <li>
                                  <i className="icofont-tick-mark"></i>
                                  Contact for Help -{" "}
                                  <a
                                    style={{
                                      color: "#0066b3",
                                    }}
                                    href="https://www.ugc.ac.in/page/Helpline.aspx"
                                    target="_blank"
                                  >
                                    Helpline
                                  </a>
                                </li>
                              </li>
                            </ul>
                            <br />
                            <img
                              style={{
                                margin: "auto",
                              }}
                              src="https://www.charusat.ac.in/Anti-Ragging/tollfree-ARC.JPG"
                              alt="Anti Ragging Committee"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/*  */}
            <div className="col-lg-4 col-12">
              <aside>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          <div className="post-content">
                            {/* <Link to="/blog-single"> */}
                            <h3>Contact Person</h3>
                            {/* </Link> */}
                            <div className="meta-post">
                              <ul className="lab-ul">
                                <li
                                  style={{
                                    marginBottom: "10px",
                                  }}
                                >
                                  <i className="icofont-ui-user"></i>
                                  Dr. Vijaykumar Chaudhary
                                </li>
                                <li
                                  style={{
                                    marginBottom: "10px",
                                  }}
                                >
                                  <i className="icofont-email"></i>
                                  vijaychaudhary.me@charusat.ac.in
                                </li>
                                <li
                                  style={{
                                    marginBottom: "10px",
                                  }}
                                >
                                  <i className="icofont-phone"></i>
                                  +91 02697265221
                                </li>
                                <li
                                  style={{
                                    marginBottom: "10px",
                                  }}
                                >
                                  <i className="icofont-phone"></i>
                                  +91 9925830781
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AntiRagging;
