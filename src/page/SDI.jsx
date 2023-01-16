import { Component, Fragment } from "react";

import ss201516 from "../files/sdi/5.1.3_2015-16_SS_R1.pdf"; 
import ss201617 from "../files/sdi/5.1.3_2016-17_SS_R1.pdf";
import ss201718 from "../files/sdi/5.1.3_2017-18_SS_R1.pdf";
import ss201819 from "../files/sdi/5.1.3_2018-19_SS_R1.pdf";
import ss201920 from "../files/sdi/2019-20_SS_R1.pdf";
import lcs201516 from "../files/sdi/5.1.3_2015-16_LCS_R1.pdf";
import lcs201617 from "../files/sdi/5.1.3_2016-17_LCS_R1.pdf";
import lcs201718 from "../files/sdi/5.1.3_2017-18_LCS_R1.pdf";
import lcs201819 from "../files/sdi/5.1.3_2018-19_LCS_R1.pdf";
import lcs201920 from "../files/sdi/2019-20_LCS_R1.pdf";
import ls201516 from "../files/sdi/5.1.3_2015-16_LS_R1.pdf";
import ls201617 from "../files/sdi/5.1.3_2016-17_LS_R1.pdf";
import ls201718 from "../files/sdi/5.1.3_2017-18_LS_R1.pdf";
import ls201819 from "../files/sdi/5.1.3_2018-19_LS_R1.pdf";
import ls201920 from "../files/sdi/2019-20_LS_R1.pdf";
import att201516 from "../files/sdi/5.1.3_2015-16_ATT_R1.pdf";
import att201617 from "../files/sdi/5.1.3_2016-17_ATT_R1.pdf";
import att201718 from "../files/sdi/5.1.3_2017-18_ATT_R1.pdf";
import att201819 from "../files/sdi/5.1.3_2018-19_ATT_R1.pdf";
import att201920 from "../files/sdi/2019-20_ATT_R1.pdf";

const DocList = [
    {
      Category: "Soft Skills",
      Year: "2015-16",
      doc: ss201516,
    },
    {
        Year: "2016-17",
        doc: ss201617,
    },
    {
        Year: "2017-18",
        doc: ss201718,
    },
    {
        Year: "2018-19",
        doc: ss201819,
    },
    {
        Year: "2019-20",
        doc: ss201920,
    },
    {
        Category: "Language and Communication Skills",
        Year: "2015-16",
        doc: lcs201516,
    },
    {
        Year: "2016-17",
        doc: lcs201617,
    },
    {
        Year: "2017-18",
        doc: lcs201718,
    },
    {
        Year: "2018-19",
        doc: lcs201819,
    },
    {
        Year: "2019-20",
        doc: lcs201920,
    },
    {
        Category: "Life Skills",
        Year: "2015-16",
        doc: ls201516,
    },
    {
        Year: "2016-17",
        doc: ls201617,
    },
    {
        Year: "2017-18",
        doc: ls201718,
    },
    {
        Year: "2018-19",
        doc: ls201819,
    },
    {
        Year: "2019-20",
        doc: ls201920,
    },
    {
        Category: "Awareness of Trends in Technology",
        Year: "2015-16",
        doc: att201516,
    },
    {
        Year: "2016-17",
        doc: att201617,
    },
    {
        Year: "2017-18",
        doc: att201718,
    },
    {
        Year: "2018-19",
        doc: att201819,
    },
    {
        Year: "2019-20",
        doc: att201920,
    },
   
  ];

  const SDI = () => {
    return (
      <Fragment>
        {/* <PageHeader title={'4 Results found for: Business'} curPage={'Search Result'} /> */}
        <div className="blog-section padding-tb section-bg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col">
                <article>
                  <div className="section-wrapper">
                    <div className="row row-cols-1 justify-content-center g-4">
                      <div className="col">
                        <div className="post-item style-2">
                          <div className="post-inner">
                            <div className="post-content">
                              <center><h3>Student Development Initiatives @ CHARUSAT</h3></center><br/>
                              <div className="meta-post" style={{textAlign:"justify"}}>
                                CHARUSAT fosters holistic development of students, in addition to their academic enrichment and career development. The focus is on shaping up and contribute confident, progressive, skilful and enlightened individuals to the society.
                              </div>
                              <br/>
                              <h5>DIVERSE INITIATIVES UNDERTAKEN IN THIS DIRECTION ARE AS FOLLOWS:</h5>
                              <hr />
                              <ul>
                                <li>Courses on ‘Creativity, Problem solving and Innovation’ and ‘Liberal Arts’ to impart opportunities for multidimensional development to students</li>
                                <li>Seminars/workshops/Expert sessions on creative thinking and idea generation</li>
                                <li>Bridge courses for improving communication in English & French</li>
                                <li>Training sessions on developing soft and verbal etiquettes for professional communications</li>
                                <li>Initiatives on physical fitness, mental healthcare, personal and public hygiene through:
                                    <ul>
                                        <li>Community awareness programs and camps</li>
                                        <li>Hands-on workshops & Expert sessions</li>
                                        <li>Communicating through poster presentations, rallies, role plays and walkathon</li>
                                        <li>Yoga sessions and mental health counselling</li>
                                        <li>Spiritual discourses</li>
                                    </ul>
                                </li>
                                <li>Orientation and induction programs to build a student-friendly environment on campus</li>
                                <li>Expert sessions/Workshops/Webinars on technological and scientific advancements through a range of national and international experts involved as resource persons</li>
                                <li>Tech-fests and scientific events to develop leadership skills in students</li>
                                <li>Celebration/Observations of National and International relevance in Healthcare, Science & Technology</li>
                              </ul>
                              <h5>The necessary documents to support the data can be accessed using the following links:</h5>
                            <div className="shop-cart">
                                <div className="container-fluid">
                                    <div className="section-wrapper">
                                        <div className="cart-top">
                              
                <table>
                  <thead>
                    <tr >
                      <th>Category</th>
                      <th>Year</th>
                      <th>Document Links</th>
                    </tr>
                  </thead>
                  <tbody >
                    {DocList.map((val, i) => (
                      <tr key={i} >
                        <td style={{padding:"5px 20px 5px 20px"}}>{val.Category}</td>
                        <td style={{padding:"5px 20px 5px git10px"}}>{val.Year}</td>
                        <td style={{padding:"5px 60px 5px 60px"}}><a href={val.doc} target="_blank"><i class="icofont-file-pdf" style={{fontSize:"30px"}}></i></a></td>
                    </tr>
                    ))}
                  </tbody>
                </table>
                </div>
                </div>
                </div>
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
              {/* <Contact name="Mr Dharmendra Patel" email="dharmendrapatel.adm@charusat.ac.in" phone="+91-9586967008"/> */}
              {/* <div className="col-lg-4 col-12">
                <aside>
                  <div className="section-wrapper">
                    <div className="row row-cols-1 justify-content-center g-4">
                      {contactList.map((val, i) => (
                        <div className="col" key={i}>
                          <div className="post-item style-2">
                            <div className="post-inner">
                              <div className="post-content">
                                <Link to="/blog-single">
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
                                
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </aside>
              </div> */}
            </div>
          </div>
        </div>
      </Fragment>
    );
  };
  
  export default SDI;
  