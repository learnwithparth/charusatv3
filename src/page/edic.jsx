import { Fragment } from "react";
import Contact from "../component/section/contact";
import Image from "react-bootstrap/Image";

const Edic = () => {
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
                              Entrepreneurship Development and Incubation
                              Cell(EDIC)
                            </h3>
                            <div className="meta-post">
                              {/* <Image src="./assets/images/CDPC_banner.jpg" /> */}
                              <Image src="https://placehold.co/800x400?text=EDIC" />
                              <br />
                              <br />
                              <p>
                                The Motive of Charotar University of Science and
                                Technology, Changa (CHARUSAT) is to help society
                                to develop towards a better future.
                              </p>
                              <p style={{ color: "#3db166" }}>
                                The cell is sensitized to function all through
                                the year towards generating placement and
                                training opportunities for the students.
                              </p>
                              <br />
                              <p style={{ "text-align": "justify" }}>
                                We believe in providing value based education to
                                the students so that they can be better
                                employable candidates and more importantly an
                                individual contributing to the organization and
                                the society as a whole. For the same purpose, a
                                dedicated centralized Career Development and
                                Placement Cell (CDPC) has been constituted on
                                the campus. The Cell coordinates all the
                                Training and Placement activities of different
                                institutes of the University and enhances
                                Industry Institute Interaction. Exposure to good
                                work culture at the beginning of the students’
                                professional life guarantees success in all
                                their endeavours. We at Training and Placement
                                Cell, provide our students with the best avenues
                                to utilize their skills by helping them find
                                gainful employment with the best firms. The
                                university has provided complete infrastructure
                                for effective functioning of the cell. Training
                                activities are organized throughout the year in
                                an effort towards preparing the prospective
                                students for the campus selection programmes.
                                The cell keeps on inviting various industries
                                and reputed firms for campus recruitment. The
                                cell is sensitized to function all through the
                                year towards generating placement and training
                                opportunities for the students.
                              </p>
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
              name="Dr. Jaimin Undavia, Head, CSIC"
              email="jaiminundavia.mca@charusat.ac.in"
              phone="+91-2697-265256"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Edic;
