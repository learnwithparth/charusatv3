import { Fragment } from "react";
import Contact from "../component/section/contact";
import { color } from "@mui/system";
import "../assets/css/EOC.css";

const EOC = () => {
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
                            <h3>Equal Opportunity Cell (EOC)</h3>
                            <hr />
                            <br />
                            <div className="meta-post" >
                              
                                <a className="pdfLink" href="https://charusat.ac.in/documents/pdfs/eoc/02.EQUAL-OPPORTUNITY-CELL.pdf"> Equal Opportunity Cell Policy <i class="icofont-file-pdf" style={{ fontSize: "22px" }}></i></a>
                                <br />
                                <a className="pdfLink" href="https://charusat.ac.in/documents/pdfs/eoc/EOC_Circular-2016.pdf"> Equal Opportunity Cell Circular <i class="icofont-file-pdf" style={{ fontSize: "22px" }}></i></a>
                                <br />
                                <a className="pdfLink" href="https://charusat.ac.in/documents/pdfs/eoc/Reconstitution-of-EOC-CHARUSAT.pdf"> Constitution of EOC at Charusat <i class="icofont-file-pdf" style={{ fontSize: "22px" }}></i></a>
                                <br />
                                <a className="pdfLink" href="https://charusat.ac.in/documents/pdfs/eoc/Contact%20Details%20of%20EOC%20members.pdf"> Contact Details for any grievance related to Equal Opportunity matter <i class="icofont-file-pdf" style={{ fontSize: "22px" }}></i></a>
                                <br />
                                <a className="pdfLink" href="https://charusat.ac.in/documents/pdfs/eoc/List-of-Activities-under-EOC-Conducted-and-Planned.pdf"> List of Activities under EOC -Conducted /Planned <i class="icofont-file-pdf" style={{ fontSize: "22px" }}></i></a>
                             
                            </div>
                            {/* <Link to="/blog-single" className="lab-btn"><span>Operator's Detail <i className="icofont-external-link"></i></span></Link> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <Contact
      name="Contact Person: Dr. Vijay Panchal"
      email="vijaypanchal.cv@charusat.ac.in"
      phone=" 5081"
      />
          </div>
        </div>
      </div>
    </Fragment>
    );
}

export default EOC;