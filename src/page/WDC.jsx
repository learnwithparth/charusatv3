import { Fragment } from "react";
import EOCcontact from "../component/section/EOCcontact";
import { color } from "@mui/system";
import "../assets/css/EOC.css";

const WDC = () => {
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
                            <h3>WOMEN DEVELOPMENT CELL (WDC)</h3>
                            <br />
                            <div className="meta-post" >
                              <p>
                              In pursuance to the directions issued by the UGC and Ministry of Human Resource Development, Government of India, CHARUSAT set up the Women Development Cell (WDC) in the year 2016.
                              <br />
                              <br />
                              <a className="pdfLink" href="https://charusat.ac.in/documents/pdfs/wdc/01.Womens-Development-Cell-Policy-1.pdf">WOMEN DEVELOPMENT CELL Policy</a>
                              <br />
                              <a className="pdfLink" href="https://charusat.ac.in/files/wdc/WOMEN%20DEVELOPMENT%20CELL%20Structure_2021-2024.pdf">WOMEN DEVELOPMENT CELL Structure</a>
                              <br />
                              <a className="pdfLink" href="https://charusat.ac.in/files/wdc/Women%20Development%20Cell%20Ciruclar.pdf">Woman's Development Cell Circular</a>
                              <br />
                              <a className="pdfLink" href="https://charusat.ac.in/files/wdc/WOMEN%20DEVELOPMENT%20CELL%20Structure_2021-2024.pdf">WDC Structure 2021-2024</a>
                              <br />
                               </p>
                            </div>
                            <br />
                            <div className="meta-post" >
                              <h4>WDC AT CHARUSAT IS COMMITTED</h4>
                              <ul>
                                <li>To build a gender-sensitive campus</li>
                                <li> To nurture the strength of girl students as well as to create a sensitized environment leading to gender equality</li>
                                <li> To conduct audit on regular basis to review safety and security measures for female employees and girl students on the University campus</li>
                                <li> To organize awareness programmes on gender sensitization, women rights, and women empowerment</li>
                                <li> To organize the regular counselling sessions for girl students mainly in three major areas i.e. academics, career and behavioural patterns</li>
                                <li> To work for a congenial working environment for women employees and students</li>
                                <li> To make women aware of their social and legal rights and thus empower them to stand against any discrimination</li>
                                <li> To develop personality and incubate leadership quality in women leading to a fulfilling life</li>
                                <li> To recommend measures and policies for gender parity at the university</li>
                              </ul>
                            </div>
                            <div className="meta-post" >
                              <h4>WDC EVENTS</h4>
                              <div>
                                <a className="pdfLink" href="https://charusat.ac.in/files/wdc/Summary%20of%20WDC%20Event%20(2020-21).pdf">Sumamry of WDC Event ( 2020-21)</a>
                                <br />
                                <a className="pdfLink" href="https://charusat.ac.in/files/wdc/Sumamry%20of%20WDC%20Event%20(2019-20).pdf">Sumamry of WDC Event ( 2019-20)</a>
                                <br />
                                <a className="pdfLink" href="https://charusat.ac.in/files/wdc/Sumamry%20of%20WDC%20Event%20(2018-19).pdf">Sumamry of WDC Event ( 2018-19)</a>
                                <br />
                                <a className="pdfLink" href="https://charusat.ac.in/files/wdc/Sumamry%20of%20WDC%20Event%20(2017-18).pdf">Sumamry of WDC Event ( 2017-18)</a>
                                <br />
                                <a className="pdfLink" href="https://charusat.ac.in/files/wdc/Sumamry%20of%20WDC%20Event%20(2016-17).pdf">Sumamry of WDC Event ( 2016-17)</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <EOCcontact
      name="Contact Person: Dr. Gayatri Dave"
      email="gayatridave.bt@charusat.ac.in"
      EXT=""
      />
          </div>
        </div>
      </div>
    </Fragment>
    );
}

export default WDC;